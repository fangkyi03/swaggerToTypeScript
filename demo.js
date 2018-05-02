
    /**
     *  接口名称 address
     *  接口描述名称 收货地址
     */
     export function address (target) {

    /**
     *  接口英文备注 saveAddress
     *  接口中文描述 保存收货地址
     *  接口类型 POST
     *  接口地址 v6.0/address
     *  @param {string} trueName 会员姓名
     *  @param {string} mobPhone 手机电话
     *  @param {string} address 地址
     *  @param {string} areaInfo 地区内容
     *  @param {string} areaId 地区id
     *  @param {string} cityId 市级id
     *  @param {string} provinceId 省级id
     *  @param {string} isDefault 是否设为默认地址
     *  @param {string} addressId 收货地址id
     */
     function saveAddressPOST (trueName,mobPhone,address,areaInfo,areaId,cityId,provinceId,isDefault,addressId) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'v6.0/address',params:{trueName,mobPhone,address,areaInfo,areaId,cityId,provinceId,isDefault,addressId},...info}
        }
     }

    /**
     *  接口英文备注 userAddressList
     *  接口中文描述 获取收货地址列表
     *  接口类型 GET
     *  接口地址 v6.0/address

     */
     function userAddressListGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/address',params:{},...info}
        }
     }

    /**
     *  接口英文备注 userAddressListAndSelfServer
     *  接口中文描述 获取收获地址以及自提点信息列表
     *  接口类型 GET
     *  接口地址 and/self
     *  @param {string} storeId 店铺ID
     *  @param {string} ssAtitude 纬度
     *  @param {string} ssLongitude 经度
     */
     function userAddressListAndSelfServerGET (storeId,ssAtitude,ssLongitude) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'and/self',params:{storeId,ssAtitude,ssLongitude},...info}
        }
     }

    /**
     *  接口英文备注 getAddressByAddressId
     *  接口中文描述 根据地址ID获取地址
     *  接口类型 GET
     *  接口地址 address/{id}
     *  @param {string} id 收货地址id
     */
     function getAddressByAddressIdGET (id) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'address/{id}',urlTran:true,params:{id},...info}
        }
     }

    /**
     *  接口英文备注 updateAddressDef
     *  接口中文描述 根据收货地址id和用户id修改默认收货地址
     *  接口类型 PATCH
     *  接口地址 address/{id}
     *  @param {string} id 收货地址id
     */
     function updateAddressDefPATCH (id) {
        return (info)=>{
            return {target,isUrl:true,method:'patch',url:'address/{id}',urlTran:true,params:{id},...info}
        }
     }

    /**
     *  接口英文备注 deleteAddressByAddressId
     *  接口中文描述 根据地址id删除地址
     *  接口类型 DELETE
     *  接口地址 address/{id}
     *  @param {string} id 收货地址id
     */
     function deleteAddressByAddressIdDELETE (id) {
        return (info)=>{
            return {target,isUrl:true,method:'delete',url:'address/{id}',urlTran:true,params:{id},...info}
        }
     }

     return {
       saveAddressPOST,
       userAddressListGET,
       userAddressListAndSelfServerGET,
       getAddressByAddressIdGET,
       updateAddressDefPATCH,
       deleteAddressByAddressIdDELETE,
      }
     }

    /**
     *  接口名称 advertising
     *  接口描述名称 启动图
     */
     export function advertising (target) {

    /**
     *  接口英文备注 listApi
     *  接口中文描述 获取启动图
     *  接口类型 GET
     *  接口地址 v6.0/advertising

     */
     function listApiGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/advertising',params:{},...info}
        }
     }

     return {
       listApiGET,
      }
     }

    /**
     *  接口名称 alipay
     *  接口描述名称 支付宝
     */
     export function alipay (target) {

    /**
     *  接口英文备注 toalipay
     *  接口中文描述 服务器端对订单信息进行签名
     *  接口类型 GET
     *  接口地址 v6.0/alipay
     *  @param {string} orderCode 订单号
     *  @param {number} amount 金额
     */
     function toalipayGET (orderCode,amount) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/alipay',params:{orderCode,amount},...info}
        }
     }

     return {
       toalipayGET,
      }
     }

    /**
     *  接口名称 area
     *  接口描述名称 地区接口
     */
     export function area (target) {

    /**
     *  接口英文备注 areaList
     *  接口中文描述 地区列表
     *  接口类型 GET
     *  接口地址 area/{parentid}
     *  @param {string} parentId 父id，传0代表查一级
     */
     function areaListGET (parentId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'area/{parentid}',urlTran:true,params:{parentId},...info}
        }
     }

     return {
       areaListGET,
      }
     }

    /**
     *  接口名称 bargain
     *  接口描述名称 砍价活动
     */
     export function bargain (target) {

    /**
     *  接口英文备注 bargain
     *  接口中文描述 砍价操作
     *  接口类型 GET
     *  接口地址 bargain/bargain
     *  @param {string} bargainActivityId 砍价表中砍价商品的id
     *  @param {string} bargainId 砍价操作的Id的值
     */
     function bargainGET (bargainActivityId,bargainId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'bargain/bargain',params:{bargainActivityId,bargainId},...info}
        }
     }

    /**
     *  接口英文备注 bargainList
     *  接口中文描述 砍价商品列表
     *  接口类型 GET
     *  接口地址 bargain/bargainActivityList
     *  @param {string} storeId 商店id
     *  @param {integer} pageNo 页码
     */
     function bargainListGET (storeId,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'bargain/bargainActivityList',params:{storeId,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 bargainDetail
     *  接口中文描述 砍价商品详情
     *  接口类型 GET
     *  接口地址 bargain/bargainDetail
     *  @param {string} id 砍价活动商品表的id值
     *  @param {string} bargainId 砍价id
     */
     function bargainDetailGET (id,bargainId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'bargain/bargainDetail',params:{id,bargainId},...info}
        }
     }

    /**
     *  接口英文备注 bargainOrder
     *  接口中文描述 砍价支付
     *  接口类型 GET
     *  接口地址 bargain/bargainOrder
     *  @param {string} addressId 地址id
     *  @param {string} bargainId 砍价id
     *  @param {string} invoiceId 发票id
     *  @param {string} remark 留言信息
     */
     function bargainOrderGET (addressId,bargainId,invoiceId,remark) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'bargain/bargainOrder',params:{addressId,bargainId,invoiceId,remark},...info}
        }
     }

    /**
     *  接口英文备注 bargainPurchase
     *  接口中文描述 砍价商品立即购买
     *  接口类型 GET
     *  接口地址 bargain/bargainPurchase
     *  @param {string} bargainId 砍价表的Id
     */
     function bargainPurchaseGET (bargainId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'bargain/bargainPurchase',params:{bargainId},...info}
        }
     }

    /**
     *  接口英文备注 bargainRanking
     *  接口中文描述 好友砍价
     *  接口类型 GET
     *  接口地址 bargain/bargainRanking
     *  @param {string} bargainId 砍价的id
     *  @param {integer} pageNo pageNo
     *  @param {integer} pageSize pageSize
     */
     function bargainRankingGET (bargainId,pageNo,pageSize) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'bargain/bargainRanking',params:{bargainId,pageNo,pageSize},...info}
        }
     }

    /**
     *  接口英文备注 topTen
     *  接口中文描述 砍价排行top10
     *  接口类型 GET
     *  接口地址 bargain/topTen
     *  @param {string} bargainActivityId 砍价活动id
     */
     function topTenGET (bargainActivityId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'bargain/topTen',params:{bargainActivityId},...info}
        }
     }

     return {
       bargainGET,
       bargainListGET,
       bargainDetailGET,
       bargainOrderGET,
       bargainPurchaseGET,
       bargainRankingGET,
       topTenGET,
      }
     }

    /**
     *  接口名称 bottom
     *  接口描述名称 首页底部展示
     */
     export function bottom (target) {

    /**
     *  接口英文备注 setBottom
     *  接口中文描述 首页底部查询
     *  接口类型 GET
     *  接口地址 v6.0/bottom

     */
     function setBottomGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/bottom',params:{},...info}
        }
     }

     return {
       setBottomGET,
      }
     }

    /**
     *  接口名称 cart
     *  接口描述名称 购物车
     */
     export function cart (target) {

    /**
     *  接口英文备注 addCart
     *  接口中文描述 加入购物车
     *  接口类型 POST
     *  接口地址 v6.0/cart
     *  @param {string} goodsId 商品id
     *  @param {string} count 数量
     *  @param {string} specId 规格id
     *  @param {integer} saveType 加入类型 加入购物车:0/立即购买:1
     */
     function addCartPOST (goodsId,count,specId,saveType) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'v6.0/cart',params:{goodsId,count,specId,saveType},...info}
        }
     }

    /**
     *  接口英文备注 isCheck
     *  接口中文描述 删除选中购物车
     *  接口类型 DELETE
     *  接口地址 v6.0/cart

     */
     function isCheckDELETE () {
        return (info)=>{
            return {target,isUrl:true,method:'delete',url:'v6.0/cart',params:{},...info}
        }
     }

    /**
     *  接口英文备注 cartList
     *  接口中文描述 购物车列表
     *  接口类型 GET
     *  接口地址 v6.0/cart

     */
     function cartListGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/cart',params:{},...info}
        }
     }

    /**
     *  接口英文备注 allCkeck
     *  接口中文描述 购物车全选接口
     *  接口类型 POST
     *  接口地址 all/checked
     *  @param {string} id 店铺id
     */
     function allCkeckPOST (id) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'all/checked',params:{id},...info}
        }
     }

    /**
     *  接口英文备注 addCouponMember
     *  接口中文描述 订单可用优惠券
     *  接口类型 GET
     *  接口地址 available/coupon

     */
     function addCouponMemberGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'available/coupon',params:{},...info}
        }
     }

    /**
     *  接口英文备注 addCartBath
     *  接口中文描述 商品批量添加购物车
     *  接口类型 POST
     *  接口地址 cart/carts
     *  @param {string} goodsId 商品ID
     *  @param {string} specStr 规格集合
     */
     function addCartBathPOST (goodsId,specStr) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'cart/carts',params:{goodsId,specStr},...info}
        }
     }

    /**
     *  接口英文备注 isCheck
     *  接口中文描述 购物车是否选中
     *  接口类型 GET
     *  接口地址 cart/check
     *  @param {string} id 购物车id
     */
     function isCheckGET (id) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'cart/check',params:{id},...info}
        }
     }

    /**
     *  接口英文备注 updateCartCount
     *  接口中文描述 修改购物车数量
     *  接口类型 PATCH
     *  接口地址 {id}/{count}
     *  @param {string} id 购物车id
     *  @param {integer} count 数量
     */
     function updateCartCountPATCH (id,count) {
        return (info)=>{
            return {target,isUrl:true,method:'patch',url:'{id}/{count}',urlTran:true,params:{id,count},...info}
        }
     }

    /**
     *  接口英文备注 favgoodsCollection
     *  接口中文描述 收藏购物车商品
     *  接口类型 POST
     *  接口地址 cart/favgoods

     */
     function favgoodsCollectionPOST () {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'cart/favgoods',params:{},...info}
        }
     }

    /**
     *  接口英文备注 addShipping
     *  接口中文描述 获取运费
     *  接口类型 GET
     *  接口地址 cart/freight
     *  @param {string} cityId 城市id
     */
     function addShippingGET (cityId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'cart/freight',params:{cityId},...info}
        }
     }

    /**
     *  接口英文备注 getPrice
     *  接口中文描述 订单最后应付金额
     *  接口类型 GET
     *  接口地址 cart/price
     *  @param {string} couponId 优惠券id
     *  @param {string} freight 运费
     *  @param {string} cityId 城市id
     *  @param {string} ispoint 是否采用积分支付
     *  @param {string} useoiu 积分支付余额
     *  @param {string} isPd 是否使用余额
     *  @param {string} activityIds 店铺的活动id
     */
     function getPriceGET (couponId,freight,cityId,ispoint,useoiu,isPd,activityIds) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'cart/price',params:{couponId,freight,cityId,ispoint,useoiu,isPd,activityIds},...info}
        }
     }

    /**
     *  接口英文备注 subCartToOrder
     *  接口中文描述 去结算
     *  接口类型 POST
     *  接口地址 cart/settlement

     */
     function subCartToOrderPOST () {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'cart/settlement',params:{},...info}
        }
     }

    /**
     *  接口英文备注 dataSync
     *  接口中文描述 购物车数据同步接口
     *  接口类型 POST
     *  接口地址 cart/sync

     */
     function dataSyncPOST () {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'cart/sync',params:{},...info}
        }
     }

    /**
     *  接口英文备注 deleteCart
     *  接口中文描述 删除购物车
     *  接口类型 DELETE
     *  接口地址 cart/{id}
     *  @param {string} id 购物车id
     */
     function deleteCartDELETE (id) {
        return (info)=>{
            return {target,isUrl:true,method:'delete',url:'cart/{id}',urlTran:true,params:{id},...info}
        }
     }

     return {
       addCartPOST,
       isCheckDELETE,
       cartListGET,
       allCkeckPOST,
       addCouponMemberGET,
       addCartBathPOST,
       isCheckGET,
       updateCartCountPATCH,
       favgoodsCollectionPOST,
       addShippingGET,
       getPriceGET,
       subCartToOrderPOST,
       dataSyncPOST,
       deleteCartDELETE,
      }
     }

    /**
     *  接口名称 coupon
     *  接口描述名称 用户优惠券展示
     */
     export function coupon (target) {

    /**
     *  接口英文备注 cartList
     *  接口中文描述 用户优惠券展示
     *  接口类型 GET
     *  接口地址 v6.0/coupon
     *  @param {string} couponIsUser 是否可用
     */
     function cartListGET (couponIsUser) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/coupon',params:{couponIsUser},...info}
        }
     }

     return {
       cartListGET,
      }
     }

    /**
     *  接口名称 feedback
     *  接口描述名称 feedback
     */
     export function feedback (target) {

    /**
     *  接口英文备注 feedback
     *  接口中文描述 feedback
     *  接口类型 POST
     *  接口地址 v6.0/feedback
     *  @param {string} title 标题
     *  @param {string} content 内容
     *  @param {string} images 图片路径
     *  @param {string} telphone 手机号
     *  @param {string} systemType 系统类型：(IOS:1,ANDROID:2,OTHER:3)
     */
     function feedbackPOST (title,content,images,telphone,systemType) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'v6.0/feedback',params:{title,content,images,telphone,systemType},...info}
        }
     }

     return {
       feedbackPOST,
      }
     }

    /**
     *  接口名称 flashsale
     *  接口描述名称 flashSale
     */
     export function flashsale (target) {

    /**
     *  接口英文备注 index
     *  接口中文描述 限时抢购首页api接口
     *  接口类型 GET
     *  接口地址 flashSale/index
     *  @param {integer} pageNo 第几页
     *  @param {integer} type 抢购类型:10今日推荐 20 今日爆款 30今日抢购
     */
     function indexGET (pageNo,type) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'flashSale/index',params:{pageNo,type},...info}
        }
     }

    /**
     *  接口英文备注 list
     *  接口中文描述 团购列表api接口
     *  接口类型 GET
     *  接口地址 flashSale/list
     *  @param {integer} type /其他10/单品团20/品牌团30/清仓团40/数码团50/量贩团60
     *  @param {integer} pageNo pageNo
     */
     function listGET (type,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'flashSale/list',params:{type,pageNo},...info}
        }
     }

     return {
       indexGET,
       listGET,
      }
     }

    /**
     *  接口名称 goods
     *  接口描述名称 搜索商品
     */
     export function goods (target) {

    /**
     *  接口英文备注 goodsListByGcIdApi
     *  接口中文描述 根据商品的分类查询商品列表
     *  接口类型 GET
     *  接口地址 v6.0/goods
     *  @param {integer} pageNo 页码
     *  @param {string} gcId 商品分类id
     */
     function goodsListByGcIdApiGET (pageNo,gcId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/goods',params:{pageNo,gcId},...info}
        }
     }

    /**
     *  接口英文备注 addLikeCount
     *  接口中文描述 增加点赞数
     *  接口类型 POST
     *  接口地址 goods/addLikeCount
     *  @param {string} id 评价id
     */
     function addLikeCountPOST (id) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'goods/addLikeCount',params:{id},...info}
        }
     }

    /**
     *  接口英文备注 brandApi
     *  接口中文描述 品牌信息
     *  接口类型 GET
     *  接口地址 goods/brands
     *  @param {string} classid 所属分类id
     *  @param {string} storeid 店铺id
     *  @param {string} typeid 类型id
     */
     function brandApiGET (classid,storeid,typeid) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/brands',params:{classid,storeid,typeid},...info}
        }
     }

    /**
     *  接口英文备注 goodsClassApi
     *  接口中文描述 所有商品分类
     *  接口类型 GET
     *  接口地址 goods/class

     */
     function goodsClassApiGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/class',params:{},...info}
        }
     }

    /**
     *  接口英文备注 saveConsult
     *  接口中文描述 产品咨询提交
     *  接口类型 POST
     *  接口地址 goods/consult
     *  @param {string} consultContent 咨询内容
     *  @param {string} id 商品id
     */
     function saveConsultPOST (consultContent,id) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'goods/consult',params:{consultContent,id},...info}
        }
     }

    /**
     *  接口英文备注 goodsConsultList
     *  接口中文描述 我的产品咨询列表
     *  接口类型 GET
     *  接口地址 goods/consults
     *  @param {string} id 商品id
     *  @param {integer} pageNo 页码
     */
     function goodsConsultListGET (id,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/consults',params:{id,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 findEvaluateDetail
     *  接口中文描述 一级评论详情
     *  接口类型 GET
     *  接口地址 evaluateDetail/{gevalId}
     *  @param {string} gevalId gevalId
     */
     function findEvaluateDetailGET (gevalId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'evaluateDetail/{gevalId}',urlTran:true,params:{gevalId},...info}
        }
     }

    /**
     *  接口英文备注 goodsfiltermore
     *  接口中文描述 商品筛选条件
     *  接口类型 GET
     *  接口地址 goods/filter
     *  @param {string} searchType 查询类型 keywordSearch:关键字搜索  gcIdSearch:商品分类id搜索  typeId:根据类型id搜索
     *  @param {string} keyword 关键字
     */
     function goodsfiltermoreGET (searchType,keyword) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/filter',params:{searchType,keyword},...info}
        }
     }

    /**
     *  接口英文备注 hotGoodsList
     *  接口中文描述 商品排行榜
     *  接口类型 GET
     *  接口地址 goods/hots
     *  @param {string} storeId 商铺id
     */
     function hotGoodsListGET (storeId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/hots',params:{storeId},...info}
        }
     }

    /**
     *  接口英文备注 getSpecByGoodsIdAndSpecIds
     *  接口中文描述 下单前显示商品规格ID、规格的价钱和库存
     *  接口类型 GET
     *  接口地址 goods/info
     *  @param {string} goodsId 商品ID
     *  @param {string} specIds 商品对应的所有的规格id,用逗号隔开
     */
     function getSpecByGoodsIdAndSpecIdsGET (goodsId,specIds) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/info',params:{goodsId,specIds},...info}
        }
     }

    /**
     *  接口英文备注 GoodsRecommed
     *  接口中文描述 商品推荐列表
     *  接口类型 GET
     *  接口地址 goods/recommends

     */
     function GoodsRecommedGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/recommends',params:{},...info}
        }
     }

    /**
     *  接口英文备注 recordSecondLevelEvaluate
     *  接口中文描述 记录二级评论
     *  接口类型 POST
     *  接口地址 goods/recordSecondLevelEvaluate
     *  @param {string} gevalId 一级评论id
     *  @param {string} gevalContent 二级评论内容
     *  @param {integer} gevalIsanonymous 是否匿名，0表示不是 1表示是匿名评价
     */
     function recordSecondLevelEvaluatePOST (gevalId,gevalContent,gevalIsanonymous) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'goods/recordSecondLevelEvaluate',params:{gevalId,gevalContent,gevalIsanonymous},...info}
        }
     }

    /**
     *  接口英文备注 goodsListApi
     *  接口中文描述 满足条件的商品
     *  接口类型 GET
     *  接口地址 goods/search
     *  @param {string} searchType 查询类型 keywordSearch 关键词搜索   gcIdSearch 分类查找,在keyword设置对应的id   typeIdSearch 类型查找,在keyword设置对应的id
     *  @param {string} keyword 关键词
     *  @param {integer} pageNo 页码
     *  @param {string} brandId 品牌ID
     *  @param {string} areaId 地区id
     *  @param {string} specFilter 过滤规格(一个商品的一套spValueId用逗号隔开 例如:颜色spValueId,尺寸spValueId，内存spValueId)
     *  @param {string} sortField 排序的字段 比如salenum  goods的实体类的属性名称而定 
     *  @param {string} sortOrder 排序类型 asc,desc 顺序,逆序
     *  @param {string} maximumPrice 最大价格
     *  @param {string} minimumPrice 最小价格
     *  @param {integer} identification 标识 0:pc端  1api端  api不需要高亮显示
     *  @param {string} storeId 店铺id
     */
     function goodsListApiGET (searchType,keyword,pageNo,brandId,areaId,specFilter,sortField,sortOrder,maximumPrice,minimumPrice,identification,storeId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/search',params:{searchType,keyword,pageNo,brandId,areaId,specFilter,sortField,sortOrder,maximumPrice,minimumPrice,identification,storeId},...info}
        }
     }

    /**
     *  接口英文备注 specValue
     *  接口中文描述 根据规格id获取详细规格值和对应id
     *  接口类型 GET
     *  接口地址 spec/{spId}
     *  @param {string} spId 规格id
     */
     function specValueGET (spId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'spec/{spId}',urlTran:true,params:{spId},...info}
        }
     }

    /**
     *  接口英文备注 goodsEvaluteList
     *  接口中文描述 商品评论列表
     *  接口类型 GET
     *  接口地址 {goodsId}/evalutes
     *  @param {string} goodsId 商品id
     *  @param {string} gevalScore  全部不用传、 1:代表差评,3:代表中评,5:代表好评
     *  @param {integer} gevalImg 晒图(查看晒图,传0)
     *  @param {integer} pageNo 页码
     */
     function goodsEvaluteListGET (goodsId,gevalScore,gevalImg,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'{goodsId}/evalutes',urlTran:true,params:{goodsId,gevalScore,gevalImg,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 goodsApi
     *  接口中文描述 商品详细信息
     *  接口类型 GET
     *  接口地址 goods/{specId}
     *  @param {string} specId 规格id
     *  @param {integer} pageNo 页码
     */
     function goodsApiGET (specId,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/{specId}',urlTran:true,params:{specId,pageNo},...info}
        }
     }

     return {
       goodsListByGcIdApiGET,
       addLikeCountPOST,
       brandApiGET,
       goodsClassApiGET,
       saveConsultPOST,
       goodsConsultListGET,
       findEvaluateDetailGET,
       goodsfiltermoreGET,
       hotGoodsListGET,
       getSpecByGoodsIdAndSpecIdsGET,
       GoodsRecommedGET,
       recordSecondLevelEvaluatePOST,
       goodsListApiGET,
       specValueGET,
       goodsEvaluteListGET,
       goodsApiGET,
      }
     }

    /**
     *  接口名称 hot-words-controller
     *  接口描述名称 Hot Words Controller
     */
     export function hotwordscontroller (target) {

    /**
     *  接口英文备注 hotWordsApiList
     *  接口中文描述 查询热词列表，默认为5条数据
     *  接口类型 GET
     *  接口地址 v6.0/hotwords

     */
     function hotWordsApiListGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/hotwords',params:{},...info}
        }
     }

    /**
     *  接口英文备注 hotWordsApiAllLidst
     *  接口中文描述 获取全部的热词
     *  接口类型 GET
     *  接口地址 hotwords/all

     */
     function hotWordsApiAllLidstGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'hotwords/all',params:{},...info}
        }
     }

     return {
       hotWordsApiListGET,
       hotWordsApiAllLidstGET,
      }
     }

    /**
     *  接口名称 index
     *  接口描述名称 首页数据展示(轮播图、中间的菜单入口、资讯、楼层)
     */
     export function index (target) {

    /**
     *  接口英文备注 setList
     *  接口中文描述 首页数据
     *  接口类型 GET
     *  接口地址 v6.0/index

     */
     function setListGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/index',params:{},...info}
        }
     }

    /**
     *  接口英文备注 recommend
     *  接口中文描述 首页为你推荐接口
     *  接口类型 GET
     *  接口地址 index/recommend

     */
     function recommendGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'index/recommend',params:{},...info}
        }
     }

     return {
       setListGET,
       recommendGET,
      }
     }

    /**
     *  接口名称 invoice
     *  接口描述名称 发票信息（修改）
     */
     export function invoice (target) {

    /**
     *  接口英文备注 addInvoice
     *  接口中文描述 保存或修改发票信息
     *  接口类型 POST
     *  接口地址 v6.0/invoice
     *  @param {string} state 发票类型  1普通纸质发票 2增值税发票 3电子发票
     *  @param {string} title 发票抬头 1个人 2单位
     *  @param {string} content 发票内容  1电脑配件 2明细 3耗材 4办公用品
     *  @param {string} company 单位名称
     *  @param {string} code 纳税人识别号
     *  @param {string} regAddr 注册电话
     *  @param {string} regPhone 注册电话
     *  @param {string} regBname 开户银行
     *  @param {string} regBaccount 银行账户
     */
     function addInvoicePOST (state,title,content,company,code,regAddr,regPhone,regBname,regBaccount) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'v6.0/invoice',params:{state,title,content,company,code,regAddr,regPhone,regBname,regBaccount},...info}
        }
     }

     return {
       addInvoicePOST,
      }
     }

    /**
     *  接口名称 live
     *  接口描述名称 直播信息(查询)
     */
     export function live (target) {

    /**
     *  接口英文备注 findLives
     *  接口中文描述 获取当前正在直播的主播列表
     *  接口类型 GET
     *  接口地址 v6.0/live
     *  @param {integer} type 类型
     *  @param {integer} pageNo 页码
     *  @param {integer} pageSize 每页显示条数
     */
     function findLivesGET (type,pageNo,pageSize) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/live',params:{type,pageNo,pageSize},...info}
        }
     }

     return {
       findLivesGET,
      }
     }

    /**
     *  接口名称 login
     *  接口描述名称 用户登录/登出
     */
     export function login (target) {

    /**
     *  接口英文备注 loginIn
     *  接口中文描述 用户登录
     *  接口类型 POST
     *  接口地址 v6.0/login
     *  @param {string} username 用户名
     *  @param {string} password 密码
     *  @param {string} verifyCode 验证码
     *  @param {string} remember_me 是否保存账户和密码(1：保存，0：不保存)
     */
     function loginInPOST (username,password,verifyCode,remember_me) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'v6.0/login',params:{username,password,verifyCode,remember_me},...info}
        }
     }

    /**
     *  接口英文备注 getImageVerifyCode
     *  接口中文描述 获取登陆图形验证码
     *  接口类型 GET
     *  接口地址 login/imge

     */
     function getImageVerifyCodeGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'login/imge',params:{},...info}
        }
     }

    /**
     *  接口英文备注 loginOut
     *  接口中文描述 用户退出登录 
     *  接口类型 POST
     *  接口地址 login/out

     */
     function loginOutPOST () {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'login/out',params:{},...info}
        }
     }

    /**
     *  接口英文备注 startLogin
     *  接口中文描述 快捷登录 
     *  接口类型 POST
     *  接口地址 login/quick
     *  @param {string} mobile 手机号
     *  @param {string} verifyCode 验证码
     */
     function startLoginPOST (mobile,verifyCode) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'login/quick',params:{mobile,verifyCode},...info}
        }
     }

    /**
     *  接口英文备注 loginByCode
     *  接口中文描述 根据code 获取token
     *  接口类型 GET
     *  接口地址 token/{code}
     *  @param {string} code code
     */
     function loginByCodeGET (code) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'token/{code}',urlTran:true,params:{code},...info}
        }
     }

    /**
     *  接口英文备注 getVerifyCode
     *  接口中文描述 获取验证码
     *  接口类型 GET
     *  接口地址 verify/{mobile}
     *  @param {string} mobile 手机号
     */
     function getVerifyCodeGET (mobile) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'verify/{mobile}',urlTran:true,params:{mobile},...info}
        }
     }

     return {
       loginInPOST,
       getImageVerifyCodeGET,
       loginOutPOST,
       startLoginPOST,
       loginByCodeGET,
       getVerifyCodeGET,
      }
     }

    /**
     *  接口名称 member
     *  接口描述名称 会员中心接口
     */
     export function member (target) {

    /**
     *  接口英文备注 updateMemberInfo
     *  接口中文描述 修改会员信息
     *  接口类型 PATCH
     *  接口地址 v6.0/member
     *  @param {string} birthday 生日(年-月-日)
     *  @param {string} truename 昵称
     *  @param {string} sex 性别（0:保密，1：女，2：男）
     *  @param {string} areainfo 住址信息
     *  @param {string} imgUrl 图片路径
     */
     function updateMemberInfoPATCH (birthday,truename,sex,areainfo,imgUrl) {
        return (info)=>{
            return {target,isUrl:true,method:'patch',url:'v6.0/member',params:{birthday,truename,sex,areainfo,imgUrl},...info}
        }
     }

    /**
     *  接口英文备注 Available
     *  接口中文描述 获取会员余额
     *  接口类型 GET
     *  接口地址 avai/balance

     */
     function AvailableGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'avai/balance',params:{},...info}
        }
     }

    /**
     *  接口英文备注 bindAliPay
     *  接口中文描述 绑定支付宝
     *  接口类型 POST
     *  接口地址 bind/alipay
     *  @param {string} alipayAccountNumber 支付宝账户(手机号)
     *  @param {string} aliPayName 支付宝名称
     */
     function bindAliPayPOST (alipayAccountNumber,aliPayName) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'bind/alipay',params:{alipayAccountNumber,aliPayName},...info}
        }
     }

    /**
     *  接口英文备注 findBindAlipay
     *  接口中文描述 查询绑定支付宝
     *  接口类型 GET
     *  接口地址 alipay/msg

     */
     function findBindAlipayGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'alipay/msg',params:{},...info}
        }
     }

    /**
     *  接口英文备注 memberBoughtGoods
     *  接口中文描述 选择用购买过的商品
     *  接口类型 GET
     *  接口地址 bought/goods

     */
     function memberBoughtGoodsGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'bought/goods',params:{},...info}
        }
     }

    /**
     *  接口英文备注 GoodsBrowseListOne
     *  接口中文描述 我的足迹列表，第一次点击进去
     *  接口类型 GET
     *  接口地址 member/browses
     *  @param {integer} pageNo 页码
     */
     function GoodsBrowseListOneGET (pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'member/browses',params:{pageNo},...info}
        }
     }

    /**
     *  接口英文备注 GoodsBrowseList
     *  接口中文描述 我的足迹列表，按日期查询(日期是必填的）
     *  接口类型 GET
     *  接口地址 browses/{data}
     *  @param {string} data 日期
     *  @param {integer} pageNo 页码
     */
     function GoodsBrowseListGET (data,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'browses/{data}',urlTran:true,params:{data,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 weChatBindPhone
     *  接口中文描述 检验微信绑定输入的手机号是否被绑定
     *  接口类型 GET
     *  接口地址 bind/phone
     *  @param {string} phoneNumber phoneNumber
     */
     function weChatBindPhoneGET (phoneNumber) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'bind/phone',params:{phoneNumber},...info}
        }
     }

    /**
     *  接口英文备注 checkCode
     *  接口中文描述 找回密码验证手机或邮箱验证码(返回标识)
     *  接口类型 GET
     *  接口地址 chk/code
     *  @param {string} bound 邮箱或者手机(mobile/email)
     *  @param {string} boundcode 验证码
     */
     function checkCodeGET (bound,boundcode) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'chk/code',params:{bound,boundcode},...info}
        }
     }

    /**
     *  接口英文备注 chkPasswd
     *  接口中文描述 余额支付的时候 验证信息
     *  接口类型 GET
     *  接口地址 chk/passwd
     *  @param {string} pwd 余额支付密码
     */
     function chkPasswdGET (pwd) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'chk/passwd',params:{pwd},...info}
        }
     }

    /**
     *  接口英文备注 confirmGoods
     *  接口中文描述 确认以前购买的商品
     *  接口类型 GET
     *  接口地址 confirm/goods
     *  @param {string} recId 商品Id,多个用逗号隔开
     */
     function confirmGoodsGET (recId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'confirm/goods',params:{recId},...info}
        }
     }

    /**
     *  接口英文备注 Detail
     *  接口中文描述 获取会员信息
     *  接口类型 GET
     *  接口地址 member/detail

     */
     function DetailGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'member/detail',params:{},...info}
        }
     }

    /**
     *  接口英文备注 favotitesGoods
     *  接口中文描述 会员店铺/商品收藏列表
     *  接口类型 GET
     *  接口地址 member/favotites
     *  @param {integer} pageno 页码
     *  @param {string} type 类型(1-商品，2-店铺)
     */
     function favotitesGoodsGET (pageno,type) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'member/favotites',params:{pageno,type},...info}
        }
     }

    /**
     *  接口英文备注 delGoodsBrowse
     *  接口中文描述 单条浏览记录删除
     *  接口类型 DELETE
     *  接口地址 browse/{browseId}
     *  @param {string} browseId 商品id
     */
     function delGoodsBrowseDELETE (browseId) {
        return (info)=>{
            return {target,isUrl:true,method:'delete',url:'browse/{browseId}',urlTran:true,params:{browseId},...info}
        }
     }

    /**
     *  接口英文备注 GoodsBrowseSaveOrUpdate
     *  接口中文描述 商品浏览记录新增或修改
     *  接口类型 POST
     *  接口地址 browse/{goodsId}
     *  @param {string} goodsId 商品id
     */
     function GoodsBrowseSaveOrUpdatePOST (goodsId) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'browse/{goodsId}',urlTran:true,params:{goodsId},...info}
        }
     }

    /**
     *  接口英文备注 delGoodsBrowseByAll
     *  接口中文描述 删除全部商品或店铺浏览记录
     *  接口类型 DELETE
     *  接口地址 goodses/browse
     *  @param {integer} browseState 浏览商品/店铺(0为商品，1为店铺)
     */
     function delGoodsBrowseByAllDELETE (browseState) {
        return (info)=>{
            return {target,isUrl:true,method:'delete',url:'goodses/browse',params:{browseState},...info}
        }
     }

    /**
     *  接口英文备注 getImgCode
     *  接口中文描述 找回密码获取图片验证码
     *  接口类型 GET
     *  接口地址 member/imgcode

     */
     function getImgCodeGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'member/imgcode',params:{},...info}
        }
     }

    /**
     *  接口英文备注 messagesCenter
     *  接口中文描述 消息中心物流/互动列表
     *  接口类型 GET
     *  接口地址 member/message
     *  @param {integer} pageno 页码
     */
     function messagesCenterGET (pageno) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'member/message',params:{pageno},...info}
        }
     }

    /**
     *  接口英文备注 updatePasswordByMobile
     *  接口中文描述 忘记密码时根据手机号修改密码
     *  接口类型 PATCH
     *  接口地址 password/mobile
     *  @param {string} telphone 手机号
     *  @param {string} newPwd 新密码
     *  @param {string} verifyCode 验证码
     */
     function updatePasswordByMobilePATCH (telphone,newPwd,verifyCode) {
        return (info)=>{
            return {target,isUrl:true,method:'patch',url:'password/mobile',params:{telphone,newPwd,verifyCode},...info}
        }
     }

    /**
     *  接口英文备注 updateMember
     *  接口中文描述 根据旧密码修改会员密码
     *  接口类型 PATCH
     *  接口地址 password/oldpwd
     *  @param {string} pwd 旧密码
     *  @param {string} newpwd 新密码
     */
     function updateMemberPATCH (pwd,newpwd) {
        return (info)=>{
            return {target,isUrl:true,method:'patch',url:'password/oldpwd',params:{pwd,newpwd},...info}
        }
     }

    /**
     *  接口英文备注 updatePaymentPass
     *  接口中文描述 修改支付密码
     *  接口类型 PATCH
     *  接口地址 payment/passwd
     *  @param {string} newPwd 新支付密码
     */
     function updatePaymentPassPATCH (newPwd) {
        return (info)=>{
            return {target,isUrl:true,method:'patch',url:'payment/passwd',params:{newPwd},...info}
        }
     }

    /**
     *  接口英文备注 centRecommendList
     *  接口中文描述 为你推荐
     *  接口类型 GET
     *  接口地址 member/recommends

     */
     function centRecommendListGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'member/recommends',params:{},...info}
        }
     }

    /**
     *  接口英文备注 Register
     *  接口中文描述 会员注册
     *  接口类型 POST
     *  接口地址 member/register
     *  @param {string} telphone 手机号
     *  @param {string} verifycode 验证码
     *  @param {string} pwd 密码
     */
     function RegisterPOST (telphone,verifycode,pwd) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'member/register',params:{telphone,verifycode,pwd},...info}
        }
     }

    /**
     *  接口英文备注 verify
     *  接口中文描述 手机验证码+邮箱验证码 发送
     *  接口类型 GET
     *  接口地址 send/code
     *  @param {string} mobile 手机号
     *  @param {string} email 邮箱
     */
     function verifyGET (mobile,email) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'send/code',params:{mobile,email},...info}
        }
     }

    /**
     *  接口英文备注 shopPointsLogList
     *  接口中文描述 积分列表
     *  接口类型 GET
     *  接口地址 shop/points
     *  @param {integer} pageNo 页码
     *  @param {string} startTime 开始时间
     *  @param {string} endTime 结束时间
     */
     function shopPointsLogListGET (pageNo,startTime,endTime) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'shop/points',params:{pageNo,startTime,endTime},...info}
        }
     }

    /**
     *  接口英文备注 shopBoutique
     *  接口中文描述 推广中心
     *  接口类型 GET
     *  接口地址 member/spread

     */
     function shopBoutiqueGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'member/spread',params:{},...info}
        }
     }

    /**
     *  接口英文备注 thirdLogin
     *  接口中文描述 第三方登录
     *  接口类型 POST
     *  接口地址 third/login
     *  @param {string} name 用户名
     *  @param {string} sex 性别：1男，0女
     *  @param {string} loginType 类型：qq,weixin,sina
     *  @param {string} openID 唯一标识
     *  @param {string} face 头像
     */
     function thirdLoginPOST (name,sex,loginType,openID,face) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'third/login',params:{name,sex,loginType,openID,face},...info}
        }
     }

    /**
     *  接口英文备注 twoDimensionImage
     *  接口中文描述 获取个人分销关联的二维码
     *  接口类型 GET
     *  接口地址 twodimension/image

     */
     function twoDimensionImageGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'twodimension/image',params:{},...info}
        }
     }

    /**
     *  接口英文备注 getVerifyCode
     *  接口中文描述 会员注册获取验证码
     *  接口类型 GET
     *  接口地址 verifycode/{mobile}
     *  @param {string} mobile 手机号
     */
     function getVerifyCodeGET (mobile) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'verifycode/{mobile}',urlTran:true,params:{mobile},...info}
        }
     }

    /**
     *  接口英文备注 weChatBindPhone
     *  接口中文描述 微信登陆绑定手机号与修改登陆密码
     *  接口类型 POST
     *  接口地址 bind/phone
     *  @param {string} phonenumber 绑定的手机号
     *  @param {string} pwd 新密码
     */
     function weChatBindPhonePOST (phonenumber,pwd) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'bind/phone',params:{phonenumber,pwd},...info}
        }
     }

    /**
     *  接口英文备注 loginState
     *  接口中文描述 检查微信登陆是否绑定手机号
     *  接口类型 GET
     *  接口地址 phone/state

     */
     function loginStateGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'phone/state',params:{},...info}
        }
     }

    /**
     *  接口英文备注 getDeatilOrderLogisticsApi
     *  接口中文描述 物流详情
     *  接口类型 GET
     *  接口地址 member/{nu}
     *  @param {string} nu 物流单号
     */
     function getDeatilOrderLogisticsApiGET (nu) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'member/{nu}',urlTran:true,params:{nu},...info}
        }
     }

     return {
       updateMemberInfoPATCH,
       AvailableGET,
       bindAliPayPOST,
       findBindAlipayGET,
       memberBoughtGoodsGET,
       GoodsBrowseListOneGET,
       GoodsBrowseListGET,
       weChatBindPhoneGET,
       checkCodeGET,
       chkPasswdGET,
       confirmGoodsGET,
       DetailGET,
       favotitesGoodsGET,
       delGoodsBrowseDELETE,
       GoodsBrowseSaveOrUpdatePOST,
       delGoodsBrowseByAllDELETE,
       getImgCodeGET,
       messagesCenterGET,
       updatePasswordByMobilePATCH,
       updateMemberPATCH,
       updatePaymentPassPATCH,
       centRecommendListGET,
       RegisterPOST,
       verifyGET,
       shopPointsLogListGET,
       shopBoutiqueGET,
       thirdLoginPOST,
       twoDimensionImageGET,
       getVerifyCodeGET,
       weChatBindPhonePOST,
       loginStateGET,
       getDeatilOrderLogisticsApiGET,
      }
     }

    /**
     *  接口名称 order
     *  接口描述名称 订单
     */
     export function order (target) {

    /**
     *  接口英文备注 saveorder
     *  接口中文描述 保存订单
     *  接口类型 POST
     *  接口地址 v6.0/order
     *  @param {string} paytype 收货地址id
     *  @param {string} paytype 支付方式 1:在线支付,2:货到付款
     *  @param {string} freight 运费
     *  @param {string} couponId 优惠券id
     *  @param {string} invoiceId 发票id
     *  @param {integer} ispoint 是否使用积分 0 不使用 1使用
     *  @param {integer} useoiu 积分数
     *  @param {integer} isPd 是否使用余额 0 不使用 1使用
     *  @param {string} activityIds 活动id
     */
     function saveorderPOST (paytype,paytype,freight,couponId,invoiceId,ispoint,useoiu,isPd,activityIds) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'v6.0/order',params:{paytype,paytype,freight,couponId,invoiceId,ispoint,useoiu,isPd,activityIds},...info}
        }
     }

    /**
     *  接口英文备注 list
     *  接口中文描述 获取订单列表
     *  接口类型 GET
     *  接口地址 v6.0/order
     *  @param {integer} pageNo 页码
     *  @param {integer} status 状态 10:待付款 30:待收货 40:已完成
     */
     function listGET (pageNo,status) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/order',params:{pageNo,status},...info}
        }
     }

    /**
     *  接口英文备注 finishorder
     *  接口中文描述 订单确认收货
     *  接口类型 PATCH
     *  接口地址 finish/{orderSn}
     *  @param {string} orderSn 订单编号
     */
     function finishorderPATCH (orderSn) {
        return (info)=>{
            return {target,isUrl:true,method:'patch',url:'finish/{orderSn}',urlTran:true,params:{orderSn},...info}
        }
     }

    /**
     *  接口英文备注 getOrderPay
     *  接口中文描述 获取支付信息
     *  接口类型 GET
     *  接口地址 payinfo/{paySn}
     *  @param {string} paySn 支付单号
     */
     function getOrderPayGET (paySn) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'payinfo/{paySn}',urlTran:true,params:{paySn},...info}
        }
     }

    /**
     *  接口英文备注 paymentList
     *  接口中文描述 获得支付方式列表
     *  接口类型 GET
     *  接口地址 payment/list

     */
     function paymentListGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'payment/list',params:{},...info}
        }
     }

    /**
     *  接口英文备注 virtualOrderDetail
     *  接口中文描述 虚拟商品订单详情
     *  接口类型 GET
     *  接口地址 virtual/{id}
     *  @param {string} id 订单id
     */
     function virtualOrderDetailGET (id) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'virtual/{id}',urlTran:true,params:{id},...info}
        }
     }

    /**
     *  接口英文备注 orderdetail
     *  接口中文描述 订单详细
     *  接口类型 GET
     *  接口地址 order/{id}
     *  @param {string} id 订单id
     */
     function orderdetailGET (id) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'order/{id}',urlTran:true,params:{id},...info}
        }
     }

    /**
     *  接口英文备注 delorder
     *  接口中文描述 删除订单
     *  接口类型 DELETE
     *  接口地址 order/{id}
     *  @param {string} id 订单id
     */
     function delorderDELETE (id) {
        return (info)=>{
            return {target,isUrl:true,method:'delete',url:'order/{id}',urlTran:true,params:{id},...info}
        }
     }

    /**
     *  接口英文备注 cancleorder
     *  接口中文描述 取消订单
     *  接口类型 PATCH
     *  接口地址 order/{orderSn}
     *  @param {string} ordersn 订单编号
     */
     function cancleorderPATCH (ordersn) {
        return (info)=>{
            return {target,isUrl:true,method:'patch',url:'order/{orderSn}',urlTran:true,params:{ordersn},...info}
        }
     }

     return {
       saveorderPOST,
       listGET,
       finishorderPATCH,
       getOrderPayGET,
       paymentListGET,
       virtualOrderDetailGET,
       orderdetailGET,
       delorderDELETE,
       cancleorderPATCH,
      }
     }

    /**
     *  接口名称 personhome
     *  接口描述名称 个人中心
     */
     export function personhome (target) {

    /**
     *  接口英文备注 memberAuthentication
     *  接口中文描述 认证接口
     *  接口类型 POST
     *  接口地址 trends/authentication
     *  @param {string} memberId 认证用户id
     *  @param {string} trueName 真实姓名
     *  @param {string} idNumber 身份证号
     *  @param {string} phoneNumber 手机号码
     *  @param {string} images 认证资料
     *  @param {string} description 认证描述
     *  @param {string} organizationName 机构名称
     *  @param {string} organizationAddress 机构地址
     *  @param {integer} type 认证类型  0:个人认证 1:企业认证
     */
     function memberAuthenticationPOST (memberId,trueName,idNumber,phoneNumber,images,description,organizationName,organizationAddress,type) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'trends/authentication',params:{memberId,trueName,idNumber,phoneNumber,images,description,organizationName,organizationAddress,type},...info}
        }
     }

    /**
     *  接口英文备注 queryMyArticle
     *  接口中文描述 我的文章
     *  接口类型 GET
     *  接口地址 my/article

     */
     function queryMyArticleGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'my/article',params:{},...info}
        }
     }

    /**
     *  接口英文备注 findPersonInfo
     *  接口中文描述 个人主页
     *  接口类型 GET
     *  接口地址 person/home

     */
     function findPersonInfoGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'person/home',params:{},...info}
        }
     }

     return {
       memberAuthenticationPOST,
       queryMyArticleGET,
       findPersonInfoGET,
      }
     }

    /**
     *  接口名称 pointsgoods
     *  接口描述名称 积分商城
     */
     export function pointsgoods (target) {

    /**
     *  接口英文备注 addCart
     *  接口中文描述 我要兑换，添加到购物车
     *  接口类型 POST
     *  接口地址 pointsgoods/buys
     *  @param {string} shopPointsGoodsId 积分商品id
     *  @param {integer} pointsGoodsNum 要购买的数量
     */
     function addCartPOST (shopPointsGoodsId,pointsGoodsNum) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'pointsgoods/buys',params:{shopPointsGoodsId,pointsGoodsNum},...info}
        }
     }

    /**
     *  接口英文备注 pointGoods
     *  接口中文描述 积分商品添加详情和积分商品详情
     *  接口类型 GET
     *  接口地址 pointsgoods/detail
     *  @param {string} id 积分商品id
     */
     function pointGoodsGET (id) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'pointsgoods/detail',params:{id},...info}
        }
     }

    /**
     *  接口英文备注 list
     *  接口中文描述 积分商品列表
     *  接口类型 GET
     *  接口地址 pointsgoods/list
     *  @param {integer} begin 最小等级
     *  @param {integer} end 最大等级
     *  @param {integer} pageNo 页码
     */
     function listGET (begin,end,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'pointsgoods/list',params:{begin,end,pageNo},...info}
        }
     }

     return {
       addCartPOST,
       pointGoodsGET,
       listGET,
      }
     }

    /**
     *  接口名称 raise
     *  接口描述名称 众筹
     */
     export function raise (target) {

    /**
     *  接口英文备注 raiseDetailApi
     *  接口中文描述 根据众筹规则id查询对应的众筹规则信息
     *  接口类型 GET
     *  接口地址 raise/detail
     *  @param {string} raiseItemId 众筹规则id
     */
     function raiseDetailApiGET (raiseItemId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'raise/detail',params:{raiseItemId},...info}
        }
     }

    /**
     *  接口英文备注 raiseDevelopApi
     *  接口中文描述 分页获取众筹的进展信息
     *  接口类型 GET
     *  接口地址 raise/develop
     *  @param {string} raiseId 众筹id
     *  @param {integer} pageNo 分页数
     */
     function raiseDevelopApiGET (raiseId,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'raise/develop',params:{raiseId,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 raiseInfoApi
     *  接口中文描述 根据众筹id获取众筹详情信息
     *  接口类型 GET
     *  接口地址 raise/info
     *  @param {string} raiseId 众筹id
     */
     function raiseInfoApiGET (raiseId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'raise/info',params:{raiseId},...info}
        }
     }

    /**
     *  接口英文备注 raiseItemsApi
     *  接口中文描述 根据众筹id获取所有的规则详情
     *  接口类型 GET
     *  接口地址 raise/items
     *  @param {string} raiseId 众筹id
     */
     function raiseItemsApiGET (raiseId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'raise/items',params:{raiseId},...info}
        }
     }

    /**
     *  接口英文备注 raiseListApi
     *  接口中文描述 众筹分页展示list
     *  接口类型 GET
     *  接口地址 raise/list
     *  @param {integer} activityStatus 活动状态  20：活动中 30：活动结束
     *  @param {string} storeId 店铺id
     *  @param {integer} pageNo 页码
     */
     function raiseListApiGET (activityStatus,storeId,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'raise/list',params:{activityStatus,storeId,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 raiseLuckyerApi
     *  接口中文描述 获取众筹参与的中奖用户信息
     *  接口类型 GET
     *  接口地址 raise/luckyer
     *  @param {string} raiseId raiseId
     *  @param {integer} pageNo pageNo
     */
     function raiseLuckyerApiGET (raiseId,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'raise/luckyer',params:{raiseId,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 raiseMembersApi
     *  接口中文描述 获取众筹参与的用户信息
     *  接口类型 GET
     *  接口地址 raise/members
     *  @param {string} raiseId 众筹id
     *  @param {string} raiseItemId 众筹规则id
     *  @param {integer} pageNo 当前页数
     */
     function raiseMembersApiGET (raiseId,raiseItemId,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'raise/members',params:{raiseId,raiseItemId,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 raiseOrderApi
     *  接口中文描述 保存用户众筹信息，待支付
     *  接口类型 GET
     *  接口地址 raise/order
     *  @param {string} raiseItemId 众筹规则id
     *  @param {number} raiseMoney 众筹金额
     *  @param {string} addressId 用户地址id
     *  @param {integer} raiseNumber 订单数量，众筹抽奖专用
     *  @param {string} remark 用户留言
     */
     function raiseOrderApiGET (raiseItemId,raiseMoney,addressId,raiseNumber,remark) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'raise/order',params:{raiseItemId,raiseMoney,addressId,raiseNumber,remark},...info}
        }
     }

     return {
       raiseDetailApiGET,
       raiseDevelopApiGET,
       raiseInfoApiGET,
       raiseItemsApiGET,
       raiseListApiGET,
       raiseLuckyerApiGET,
       raiseMembersApiGET,
       raiseOrderApiGET,
      }
     }

    /**
     *  接口名称 refund-return-api-controller
     *  接口描述名称 Refund Return Api Controller
     */
     export function refundreturnapicontroller (target) {

    /**
     *  接口英文备注 barterDelivery
     *  接口中文描述 换货发货
     *  接口类型 POST
     *  接口地址 barter/delivery
     *  @param {string} id 换货记录id
     *  @param {string} expressName 物流公司名称
     *  @param {string} invoiceNo 物流单号
     */
     function barterDeliveryPOST (id,expressName,invoiceNo) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'barter/delivery',params:{id,expressName,invoiceNo},...info}
        }
     }

    /**
     *  接口英文备注 barterDetail
     *  接口中文描述 换货详细
     *  接口类型 GET
     *  接口地址 barter/detail
     *  @param {string} id 换货记录id
     */
     function barterDetailGET (id) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'barter/detail',params:{id},...info}
        }
     }

    /**
     *  接口英文备注 finishBarter
     *  接口中文描述 换货确认收货
     *  接口类型 POST
     *  接口地址 barter/finish
     *  @param {string} id 换货记录id
     */
     function finishBarterPOST (id) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'barter/finish',params:{id},...info}
        }
     }

    /**
     *  接口英文备注 barterOrder
     *  接口中文描述 订单换货
     *  接口类型 POST
     *  接口地址 barter/order
     *  @param {string} id 订单id
     *  @param {string} buyerMessage 换货原因
     *  @param {string} orderGoodsId 订单项id
     *  @param {string} goodsNum 换货数量
     *  @param {string} imgUrl 图片
     *  @param {integer} invoiceProof 申请凭证 0无发票 1有发票
     */
     function barterOrderPOST (id,buyerMessage,orderGoodsId,goodsNum,imgUrl,invoiceProof) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'barter/order',params:{id,buyerMessage,orderGoodsId,goodsNum,imgUrl,invoiceProof},...info}
        }
     }

    /**
     *  接口英文备注 barterList
     *  接口中文描述 换货列表
     *  接口类型 GET
     *  接口地址 refundreturn/barters
     *  @param {integer} pageNo 页码
     */
     function barterListGET (pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'refundreturn/barters',params:{pageNo},...info}
        }
     }

    /**
     *  接口英文备注 returnDelivery
     *  接口中文描述 订单退款
     *  接口类型 POST
     *  接口地址 refund/order
     *  @param {string} id 订单id
     *  @param {string} buyerMessage 退款原因
     *  @param {string} orderGoodsId 订单商品项id
     *  @param {number} refundAmount 退款金额
     *  @param {string} imgUrl 图片
     *  @param {integer} refundMode 退款方式 0原支付返还 1 退款至账户余额
     *  @param {integer} invoiceProof 申请凭证 0无发票 1有发票
     */
     function returnDeliveryPOST (id,buyerMessage,orderGoodsId,refundAmount,imgUrl,refundMode,invoiceProof) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'refund/order',params:{id,buyerMessage,orderGoodsId,refundAmount,imgUrl,refundMode,invoiceProof},...info}
        }
     }

    /**
     *  接口英文备注 returnDelivery
     *  接口中文描述 退货发货
     *  接口类型 POST
     *  接口地址 return/delivery
     *  @param {string} refundId 退货记录id
     *  @param {string} expressName 物流公司名称
     *  @param {string} invoiceNo 物流单号
     */
     function returnDeliveryPOST (refundId,expressName,invoiceNo) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'return/delivery',params:{refundId,expressName,invoiceNo},...info}
        }
     }

    /**
     *  接口英文备注 returnDetail
     *  接口中文描述 退货详细
     *  接口类型 GET
     *  接口地址 return/detail
     *  @param {string} refundId 退货记录id
     */
     function returnDetailGET (refundId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'return/detail',params:{refundId},...info}
        }
     }

    /**
     *  接口英文备注 returnOrder
     *  接口中文描述 订单退货
     *  接口类型 POST
     *  接口地址 return/order
     *  @param {string} id 订单id
     *  @param {string} buyerMessage 退货原因
     *  @param {string} orderGoodsId 订单项id
     *  @param {string} goodsNum 退货数量
     *  @param {string} imgUrl 上传图片
     *  @param {integer} refundMode 退款方式 0原支付返还 1 退款至账户余额
     *  @param {integer} invoiceProof 申请凭证 0无发票 1有发票
     */
     function returnOrderPOST (id,buyerMessage,orderGoodsId,goodsNum,imgUrl,refundMode,invoiceProof) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'return/order',params:{id,buyerMessage,orderGoodsId,goodsNum,imgUrl,refundMode,invoiceProof},...info}
        }
     }

    /**
     *  接口英文备注 List
     *  接口中文描述 退货列表
     *  接口类型 GET
     *  接口地址 refundreturn/returnList
     *  @param {integer} pageNo 页码
     */
     function ListGET (pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'refundreturn/returnList',params:{pageNo},...info}
        }
     }

     return {
       barterDeliveryPOST,
       barterDetailGET,
       finishBarterPOST,
       barterOrderPOST,
       barterListGET,
       returnDeliveryPOST,
       returnDeliveryPOST,
       returnDetailGET,
       returnOrderPOST,
       ListGET,
      }
     }

    /**
     *  接口名称 reviews
     *  接口描述名称 商品评论
     */
     export function reviews (target) {

    /**
     *  接口英文备注 saveReviews
     *  接口中文描述 商品评价
     *  接口类型 POST
     *  接口地址 store/evaluate
     *  @param {string} imgUrl 图片url
     *  @param {string} orderSn 订单编号
     *  @param {string} recId 订单商品表索引id
     *  @param {string} sevalDesccredit 店铺描述相符评分
     *  @param {string} sevalServicecredit 店铺服务态度评分
     *  @param {string} sevalDeliverycredit 店铺发货速度评分
     *  @param {string} gevalScore 商品评分1-5分
     *  @param {string} gevalContent 商品信誉评价内容
     *  @param {integer} gevalIsAnonymous 商品是否匿名评价 1表示是匿名评价,否则0
     */
     function saveReviewsPOST (imgUrl,orderSn,recId,sevalDesccredit,sevalServicecredit,sevalDeliverycredit,gevalScore,gevalContent,gevalIsAnonymous) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'store/evaluate',params:{imgUrl,orderSn,recId,sevalDesccredit,sevalServicecredit,sevalDeliverycredit,gevalScore,gevalContent,gevalIsAnonymous},...info}
        }
     }

     return {
       saveReviewsPOST,
      }
     }

    /**
     *  接口名称 store
     *  接口描述名称 店铺详情
     */
     export function store (target) {

    /**
     *  接口英文备注 getStoreGoodsClass
     *  接口中文描述 店铺所有商品分类
     *  接口类型 GET
     *  接口地址 store/class
     *  @param {string} id 店铺id
     */
     function getStoreGoodsClassGET (id) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'store/class',params:{id},...info}
        }
     }

    /**
     *  接口英文备注 getStoreGoodsClass
     *  接口中文描述 查询店铺该分类下的所有商品
     *  接口类型 GET
     *  接口地址 class/goods
     *  @param {string} id 店铺id
     *  @param {string} stcId 店铺商品分类id
     *  @param {integer} pageNo 页码
     *  @param {string} goodsName 商品名称
     *  @param {string} sortField 排序字段
     *  @param {string} orderBy 按照时间升序或降序
     *  @param {integer} goodsType 商品类别
     */
     function getStoreGoodsClassGET (id,stcId,pageNo,goodsName,sortField,orderBy,goodsType) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'class/goods',params:{id,stcId,pageNo,goodsName,sortField,orderBy,goodsType},...info}
        }
     }

    /**
     *  接口英文备注 couponlist
     *  接口中文描述 店铺优惠券
     *  接口类型 GET
     *  接口地址 store/coupons
     *  @param {string} storeId 店铺id
     */
     function couponlistGET (storeId) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'store/coupons',params:{storeId},...info}
        }
     }

    /**
     *  接口英文备注 storeCollection
     *  接口中文描述 关注店铺
     *  接口类型 POST
     *  接口地址 store/favgoods
     *  @param {string} id 店铺id
     *  @param {string} favType 收藏类型 1：收藏商品  2：收藏店铺 
     *  @param {string} goodsId 商品id
     */
     function storeCollectionPOST (id,favType,goodsId) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'store/favgoods',params:{id,favType,goodsId},...info}
        }
     }

    /**
     *  接口英文备注 getGoodsUpNew
     *  接口中文描述 店铺上新商品
     *  接口类型 GET
     *  接口地址 goods/new
     *  @param {string} id 店铺id
     *  @param {integer} pageNo 页码
     */
     function getGoodsUpNewGET (id,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/new',params:{id,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 storeGoods
     *  接口中文描述 根据id获取店铺商品列表
     *  接口类型 GET
     *  接口地址 goods/{id}
     *  @param {string} id 店铺id
     *  @param {integer} pageNo 第几页
     *  @param {integer} pageSize 每页显示条数
     *  @param {string} goodsName 商品名称
     *  @param {string} sortField 排序字段
     *  @param {string} orderBy 按照时间升序或降序
     *  @param {integer} goodsType 商品类别
     */
     function storeGoodsGET (id,pageNo,pageSize,goodsName,sortField,orderBy,goodsType) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'goods/{id}',urlTran:true,params:{id,pageNo,pageSize,goodsName,sortField,orderBy,goodsType},...info}
        }
     }

    /**
     *  接口英文备注 receiveCoupon
     *  接口中文描述 领取优惠券
     *  接口类型 POST
     *  接口地址 receive/coupon
     *  @param {string} id 优惠券id
     *  @param {string} storeId 店铺id
     */
     function receiveCouponPOST (id,storeId) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'receive/coupon',params:{id,storeId},...info}
        }
     }

    /**
     *  接口英文备注 storeDetail
     *  接口中文描述 店铺详情
     *  接口类型 GET
     *  接口地址 store/{id}
     *  @param {string} id 店铺id
     */
     function storeDetailGET (id) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'store/{id}',urlTran:true,params:{id},...info}
        }
     }

     return {
       getStoreGoodsClassGET,
       getStoreGoodsClassGET,
       couponlistGET,
       storeCollectionPOST,
       getGoodsUpNewGET,
       storeGoodsGET,
       receiveCouponPOST,
       storeDetailGET,
      }
     }

    /**
     *  接口名称 storeinfo
     *  接口描述名称 小店信息
     */
     export function storeinfo (target) {

    /**
     *  接口英文备注 findStoreInfoByStoreId
     *  接口中文描述 获取店铺信息
     *  接口类型 GET
     *  接口地址 v6.0/storeinfo

     */
     function findStoreInfoByStoreIdGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/storeinfo',params:{},...info}
        }
     }

    /**
     *  接口英文备注 findStoreCodeByStoreId
     *  接口中文描述 获取店铺二维码
     *  接口类型 GET
     *  接口地址 storeinfo/code

     */
     function findStoreCodeByStoreIdGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'storeinfo/code',params:{},...info}
        }
     }

    /**
     *  接口英文备注 findStoreGoodsList
     *  接口中文描述 获取店铺出售的所有产品
     *  接口类型 GET
     *  接口地址 storeinfo/goods
     *  @param {string} searchType 搜索商品的类型
     *  @param {string} keyword 关键词搜索
     *  @param {integer} pageNo 页码
     *  @param {string} specFilter 规格值id
     *  @param {string} sortField 排序的字段
     *  @param {string} sortOrder 排序的方式
     *  @param {string} maximumPrice 最大值
     *  @param {string} minimumPrice 最小值
     *  @param {integer} identification identification
     */
     function findStoreGoodsListGET (searchType,keyword,pageNo,specFilter,sortField,sortOrder,maximumPrice,minimumPrice,identification) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'storeinfo/goods',params:{searchType,keyword,pageNo,specFilter,sortField,sortOrder,maximumPrice,minimumPrice,identification},...info}
        }
     }

    /**
     *  接口英文备注 updateMyStoreLogo
     *  接口中文描述 修改店铺图标
     *  接口类型 POST
     *  接口地址 logo/{id}
     *  @param {string} id 店铺id
     *  @param {File} upfile 图片
     */
     function updateMyStoreLogoPOST (id,upfile) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'logo/{id}',urlTran:true,params:{id,upfile},...info}
        }
     }

    /**
     *  接口英文备注 updateMyStoreName
     *  接口中文描述 修改店铺名字
     *  接口类型 GET
     *  接口地址 name/{id}
     *  @param {string} id 店铺id
     *  @param {string} storeName 店铺新名字
     */
     function updateMyStoreNameGET (id,storeName) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'name/{id}',urlTran:true,params:{id,storeName},...info}
        }
     }

    /**
     *  接口英文备注 findStoreAllOrdersByStoreId
     *  接口中文描述 获取他的店铺订单
     *  接口类型 GET
     *  接口地址 storeinfo/orders

     */
     function findStoreAllOrdersByStoreIdGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'storeinfo/orders',params:{},...info}
        }
     }

     return {
       findStoreInfoByStoreIdGET,
       findStoreCodeByStoreIdGET,
       findStoreGoodsListGET,
       updateMyStoreLogoPOST,
       updateMyStoreNameGET,
       findStoreAllOrdersByStoreIdGET,
      }
     }

    /**
     *  接口名称 trends
     *  接口描述名称 发现管理
     */
     export function trends (target) {

    /**
     *  接口英文备注 putTrends
     *  接口中文描述 发表动态 
     *  接口类型 POST
     *  接口地址 v6.0/trends
     *  @param {string} pictures 图片
     *  @param {string} connet 文字加表情
     *  @param {string} articleContent 文章内容
     *  @param {string} articleTitle 文章标题
     *  @param {string} location 位置
     *  @param {string} videos 视屏
     *  @param {string} topicName 话题名称
     *  @param {string} plateId 分类id
     */
     function putTrendsPOST (pictures,connet,articleContent,articleTitle,location,videos,topicName,plateId) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'v6.0/trends',params:{pictures,connet,articleContent,articleTitle,location,videos,topicName,plateId},...info}
        }
     }

    /**
     *  接口英文备注 pointZan
     *  接口中文描述 动态点赞
     *  接口类型 POST
     *  接口地址 agree/{id}
     *  @param {string} id 当前动态id
     */
     function pointZanPOST (id) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'agree/{id}',urlTran:true,params:{id},...info}
        }
     }

    /**
     *  接口英文备注 delComment
     *  接口中文描述 删除评论 
     *  接口类型 DELETE
     *  接口地址 trends/comment
     *  @param {string} commentId 评论id
     *  @param {string} releaseId 发布动态人id
     */
     function delCommentDELETE (commentId,releaseId) {
        return (info)=>{
            return {target,isUrl:true,method:'delete',url:'trends/comment',params:{commentId,releaseId},...info}
        }
     }

    /**
     *  接口英文备注 commentTrends
     *  接口中文描述 动态评论
     *  接口类型 POST
     *  接口地址 trends/comment
     *  @param {string} id 动态id
     *  @param {string} content 文字加表情
     *  @param {string} pictures 图片
     *  @param {string} speech 语音
     */
     function commentTrendsPOST (id,content,pictures,speech) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'trends/comment',params:{id,content,pictures,speech},...info}
        }
     }

    /**
     *  接口英文备注 commentPointZan
     *  接口中文描述 评论点赞
     *  接口类型 POST
     *  接口地址 comment/agree
     *  @param {string} id 当前评论内容id
     *  @param {string} trendsId 当前动态id
     */
     function commentPointZanPOST (id,trendsId) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'comment/agree',params:{id,trendsId},...info}
        }
     }

    /**
     *  接口英文备注 commentDetail
     *  接口中文描述 评论详情
     *  接口类型 GET
     *  接口地址 comment/detail
     *  @param {string} id 当前评论内容id
     *  @param {string} trendsId 所属的动态id
     *  @param {integer} pageNo 页码
     */
     function commentDetailGET (id,trendsId,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'comment/detail',params:{id,trendsId,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 pointConner
     *  接口中文描述 关注接口
     *  接口类型 POST
     *  接口地址 trends/conner
     *  @param {string} connerId 用户id
     *  @param {string} resonText 原因(汉字逗号隔开)
     *  @param {string} trendsId 所举报动态id
     */
     function pointConnerPOST (connerId,resonText,trendsId) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'trends/conner',params:{connerId,resonText,trendsId},...info}
        }
     }

    /**
     *  接口英文备注 connerList
     *  接口中文描述 关注动态内容列表
     *  接口类型 GET
     *  接口地址 trends/conners
     *  @param {string} topicName 话题名称
     *  @param {integer} pageNo 页码
     */
     function connerListGET (topicName,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'trends/conners',params:{topicName,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 getHotTrends
     *  接口中文描述 热门动态列表
     *  接口类型 GET
     *  接口地址 trends/hots
     *  @param {integer} pageNo 页码
     */
     function getHotTrendsGET (pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'trends/hots',params:{pageNo},...info}
        }
     }

    /**
     *  接口英文备注 findMyConnerList
     *  接口中文描述 我的关注列表
     *  接口类型 GET
     *  接口地址 my/conners
     *  @param {integer} pageNo 页码
     */
     function findMyConnerListGET (pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'my/conners',params:{pageNo},...info}
        }
     }

    /**
     *  接口英文备注 pointRecommendConner
     *  接口中文描述 推荐关注
     *  接口类型 POST
     *  接口地址 recommend/conner
     *  @param {string} memberId 用户id(多个逗号隔开)
     */
     function pointRecommendConnerPOST (memberId) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'recommend/conner',params:{memberId},...info}
        }
     }

    /**
     *  接口英文备注 getRecommendConner
     *  接口中文描述 推荐关注列表
     *  接口类型 GET
     *  接口地址 recommend/conners
     *  @param {string} typeId 类型ID(多个逗号隔开)
     *  @param {integer} pageNo 页码
     */
     function getRecommendConnerGET (typeId,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'recommend/conners',params:{typeId,pageNo},...info}
        }
     }

    /**
     *  接口英文备注 shopTrendsSerach
     *  接口中文描述 发现搜索
     *  接口类型 GET
     *  接口地址 trends/serach
     *  @param {string} keyword 关键词
     */
     function shopTrendsSerachGET (keyword) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'trends/serach',params:{keyword},...info}
        }
     }

    /**
     *  接口英文备注 findTrendsTypeList
     *  接口中文描述 话题列表
     *  接口类型 GET
     *  接口地址 trends/topics
     *  @param {integer} pageNo 页码
     */
     function findTrendsTypeListGET (pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'trends/topics',params:{pageNo},...info}
        }
     }

    /**
     *  接口英文备注 findAllTrendsType
     *  接口中文描述 类型列表
     *  接口类型 GET
     *  接口地址 trends/types
     *  @param {integer} pageNo 页码
     */
     function findAllTrendsTypeGET (pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'trends/types',params:{pageNo},...info}
        }
     }

    /**
     *  接口英文备注 getDeatilTrends
     *  接口中文描述 动态详情
     *  接口类型 GET
     *  接口地址 trends/{id}
     *  @param {string} id 动态内容Id
     *  @param {integer} pageNo 页码
     */
     function getDeatilTrendsGET (id,pageNo) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'trends/{id}',urlTran:true,params:{id,pageNo},...info}
        }
     }

     return {
       putTrendsPOST,
       pointZanPOST,
       delCommentDELETE,
       commentTrendsPOST,
       commentPointZanPOST,
       commentDetailGET,
       pointConnerPOST,
       connerListGET,
       getHotTrendsGET,
       findMyConnerListGET,
       pointRecommendConnerPOST,
       getRecommendConnerGET,
       shopTrendsSerachGET,
       findTrendsTypeListGET,
       findAllTrendsTypeGET,
       getDeatilTrendsGET,
      }
     }

    /**
     *  接口名称 unionpay
     *  接口描述名称 银联
     */
     export function unionpay (target) {

    /**
     *  接口英文备注 tounionpay
     *  接口中文描述 tounionpay
     *  接口类型 GET
     *  接口地址 unionpay/tounionpay
     *  @param {string} orderCode 订单号
     *  @param {number} amount 金额
     */
     function tounionpayGET (orderCode,amount) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'unionpay/tounionpay',params:{orderCode,amount},...info}
        }
     }

     return {
       tounionpayGET,
      }
     }

    /**
     *  接口名称 uploadimg
     *  接口描述名称 上传图片接口
     */
     export function uploadimg (target) {

    /**
     *  接口英文备注 saveTipOff
     *  接口中文描述 FormData上传图片
     *  接口类型 POST
     *  接口地址 v6.0/upload
     *  @param {File} upfile 图片
     */
     function saveTipOffPOST (upfile) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'v6.0/upload',params:{upfile},...info}
        }
     }

    /**
     *  接口英文备注 uploadVideo
     *  接口中文描述 上传视频
     *  接口类型 POST
     *  接口地址 upload/video
     *  @param {File} video 视频上传
     */
     function uploadVideoPOST (video) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'upload/video',params:{video},...info}
        }
     }

     return {
       saveTipOffPOST,
       uploadVideoPOST,
      }
     }

    /**
     *  接口名称 wechat
     *  接口描述名称 微信JS授权
     */
     export function wechat (target) {

    /**
     *  接口英文备注 oauthJsToken
     *  接口中文描述 获取微信JS授权
     *  接口类型 GET
     *  接口地址 wechat/jstoken
     *  @param {string} pageurl 生成签名参数
     */
     function oauthJsTokenGET (pageurl) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'wechat/jstoken',params:{pageurl},...info}
        }
     }

    /**
     *  接口英文备注 getUser
     *  接口中文描述 获取用户基础信息
     *  接口类型 GET
     *  接口地址 v6.0/userinfo

     */
     function getUserGET () {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'v6.0/userinfo',params:{},...info}
        }
     }

     return {
       oauthJsTokenGET,
       getUserGET,
      }
     }

    /**
     *  接口名称 wxpay
     *  接口描述名称 微信
     */
     export function wxpay (target) {

    /**
     *  接口英文备注 groupPayApi
     *  接口中文描述 余额支付接口
     *  接口类型 POST
     *  接口地址 wxpay/pay
     *  @param {string} ordercode 订单号
     *  @param {string} paypassword 支付密码
     */
     function groupPayApiPOST (ordercode,paypassword) {
        return (info)=>{
            return {target,isUrl:true,method:'post',url:'wxpay/pay',params:{ordercode,paypassword},...info}
        }
     }

    /**
     *  接口英文备注 towxpay
     *  接口中文描述 服务器端对订单信息进行签名
     *  接口类型 GET
     *  接口地址 wxpay/towxpayinfo
     *  @param {string} ordercode 订单号
     *  @param {number} amount 金额
     */
     function towxpayGET (ordercode,amount) {
        return (info)=>{
            return {target,isUrl:true,method:'get',url:'wxpay/towxpayinfo',params:{ordercode,amount},...info}
        }
     }

     return {
       groupPayApiPOST,
       towxpayGET,
      }
     }


export default {
       //收货地址
       address,
       //启动图
       advertising,
       //支付宝
       alipay,
       //地区接口
       area,
       //砍价活动
       bargain,
       //首页底部展示
       bottom,
       //购物车
       cart,
       //用户优惠券展示
       coupon,
       //feedback
       feedback,
       //flashSale
       flashsale,
       //搜索商品
       goods,
       //Hot Words Controller
       hotwordscontroller,
       //首页数据展示(轮播图、中间的菜单入口、资讯、楼层)
       index,
       //发票信息（修改）
       invoice,
       //直播信息(查询)
       live,
       //用户登录/登出
       login,
       //会员中心接口
       member,
       //订单
       order,
       //个人中心
       personhome,
       //积分商城
       pointsgoods,
       //众筹
       raise,
       //Refund Return Api Controller
       refundreturnapicontroller,
       //商品评论
       reviews,
       //店铺详情
       store,
       //小店信息
       storeinfo,
       //发现管理
       trends,
       //银联
       unionpay,
       //上传图片接口
       uploadimg,
       //微信JS授权
       wechat,
       //微信
       wxpay,
}