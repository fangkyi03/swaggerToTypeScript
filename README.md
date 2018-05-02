自动化swagger转TypeScript工具

默认转换成js 如果要转换成ts的话 请放开这两个注释

```
// 如果要保存为ts格式的话 只要把这行改一下就可以了
// .replace('</childrenParams/>',operations.parameters.map((e)=>`${e.name}:${e.type}`))

<!-- 最底部 -->
// fs.writeFileSync(__dirname + '/apiCommand.ts',content + endContent)
```

使用说明

```
// 使用之前 将这个url地址 替换为自己后台swagger网站的地址
const urlAddress = '';

然后直接node api.js就会自动帮你在js目录下生成一个对应的api脚本文档

推荐将这个api文件放到自己的私有库里面
在自身的项目里面 增加一个apiCreate.js脚本文件
里面只要写一行代码 require('xxxx/api')
然后修改package在script中增加一行代码

start:node apiCreate.js && 这里你原来项目启动的脚本命令

这样做以后 在你每次项目启动之前 你的私有库里面都会生成一个apiCommand脚本 然后就可以直接在项目中使用最新的接口函数来进行编程了
```

效果预览
![image](https://github.com/fangkyi03/swaggerToTypeScript/QQ20180502-163633-HD.gif)
