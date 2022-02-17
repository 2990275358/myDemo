import {request} from './request'

export function getDetail(iid){
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

// 创建一个类

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice =itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.discountBgColor = itemInfo.discountBgColor
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

//创建店铺信息的类
export class Shop {
    constructor(shopInfo){
        this.log = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}

// 创建参数数据的类
export class GoodsParam{
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.Sizes = rule.tables;
    }
}