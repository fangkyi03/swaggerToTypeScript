const axios = require('axios').default;
const fs = require('fs')

// 使用之前 将这个url地址 替换为自己后台swagger网站的地址
const urlAddress = '';

const parentFunTemplate = 
`
    /**
</parentInfo/>
     */
     export function </parentFunName/> (target) {
</childFunList/>
</chidFunName/>
     }
`

const childFunTemplate = 
`
    /**
</childInfo/>
</childParams/>
     */
     function </childFunName/> (</childrenParams/>) {
        return (info)=>{
            return {target,isUrl:true,method:</childrenMetHod/>,</childrenUrl/>,params:{</childrenName/>},...info}
        }
     }
`
/**
 * 请求初始化网络数据
 * 
 */
async function requestInitialization (item) {
    let parentFuncTemplate = getParentFunName(item)
    return new Promise((resolve, reject) => {
        axios.get(urlAddress + item.path)
        .then((e)=>{
            const childFunName = e.data.apis.map((e)=>`       ${e.description}${e.operations[0]['method']},\n`).join('')
            const childFun = e.data.apis.map((e)=>{
                const url = e.path.split('/').slice(-2).join('/').toString()
                return getChildrenFunName(url,e.description,e.operations[0])
            })
            const content = 
            parentFuncTemplate
            .replace('</childFunList/>',childFun.join('').toString())
            .replace('</chidFunName/>',`     return {\n${childFunName}      }`)
            resolve(content)
        })
    })
}

/**
 * 获取子函数名字
 * 
 * @param {any} data 
 */
function getChildrenFunName (url,description,operations) {
    const template = [
        {key:description,name:'接口英文备注'},
        {key:operations['summary'],name:'接口中文描述'},
        {key:operations['method'],name:'接口类型'},
        {key:url,name:'接口地址'}
    ]
    return childFunTemplate.replace('</childInfo/>',template.map((e)=>{
            return `     *  ${e.name} ${e.key}`
        }).join('\n'))
    .replace('</childParams/>',operations.parameters.map((e)=>{
        return `     *  @param {${e.type}} ${e.name} ${e.description}`
    }).join('\n'))
    .replace('</childFunName/>',`${description}${operations['method']}`)
    .replace('</childrenUrl/>',()=>{
        if (url.indexOf('}') !== -1){
            return `url:'${url}',urlTran:true`
        }else {
            return `url:'${url}'`
        }
    })
    .replace('</childrenMetHod/>',`'${operations['method'].toLocaleLowerCase()}'`)
    .replace('</childrenName/>',operations.parameters.map((e)=>`${e.name}`))
    // 如果要保存为ts格式的话 只要把这行改一下就可以了
    // .replace('</childrenParams/>',operations.parameters.map((e)=>`${e.name}:${e.type}`))
    .replace('</childrenParams/>',operations.parameters.map((e)=>`${e.name}`))
}

/**
 * 获取父函数备注与名字
 * 
 */
function getParentFunName (data) {
    console.log('data',data)
    let {description,path} = data
    const name = path.split('/').slice(-1)[0]
    const template = [{key:name,desp:'接口名称'},{key:description,desp:'接口描述名称'}]
    return parentFunTemplate.replace('</parentInfo/>',template.map((e)=>{
            return `     *  ${e.desp} ${e.key}`
        }).join('\n')
    ).replace('</parentFunName/>',name)
}

/**
 * 初始化获取网络请求数据
 * 
 * @param {any}  
 */
function getInitalNetWorkData() {
  let objText = ''
  axios.get(urlAddress)
    .then((e)=> {
      if (e.status === 200) {
          const funlist = e.data.apis.map(( e ) => requestInitialization(e))
            Promise.all(funlist)
            .then((itemArray)=>{
                const content = itemArray.join('')+'\n\n'
                // 合并底部
                let endContent = 'export default {\n</end/>}'
                endContent = endContent.replace('</end/>',e.data.apis.map((e)=>{
                    const description = e.description
                    const name = `${e.path.split('/').slice(-1)[0]}`
                    // 底部名称加备注
                    return `       //${description}\n       ${name},\n`
                }).join('').toString())
                fs.writeFileSync(__dirname + '/apiCommand.js',content + endContent)
                // fs.writeFileSync(__dirname + '/apiCommand.ts',content + endContent)
            })
        }
    })
}

getInitalNetWorkData()
