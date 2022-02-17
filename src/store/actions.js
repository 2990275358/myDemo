export default {
    addCart(context, value) {
        // value新添加的商品
        // let oldProduct = null
        // for(let item of state.cartList){
        //     if(item.iid === value.iid) {
        //         oldProduct = item
        //     }
        // }
        // 查找之前数组中是否有该商品
        return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item => item.iid === value.iid)
        if (oldProduct){
            context.commit('addCounter', oldProduct)
            resolve('当前商品+1')
        } else {
            value.count = 1
            value.checked = true
            context.commit('addToCart', value)
            resolve('添加成功')
        }
        })
    },
    delGoods(context, value) {
        // 判断是否有商品，有商品进行删除操作
        if (context.state.cartList != 0){
            context.commit('delArticre')
        }else{
            alert("未选择商品")
        }
    }
}