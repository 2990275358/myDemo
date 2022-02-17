<template>
  <div class="shop-info">
      <div class="shop-top">
          <img :src="shop.log" alt="">
          <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
              <div class="info-sells">
                  <div class="sells-count">
                      {{shop.sells | sellCountFilter}}
                  </div>
                  <div class="sells-text">总销量</div>
              </div>
              <div class="info-goods">
                  <div class="goods-count">
                      {{shop.goodsCount}}
                  </div>
                  <div class="goods-text">全部宝贝</div>
              </div>
          </div>
          <div class="shop-middle-item shop-middle-right">
              <table>
                  <tr v-for="(item,index) in shop.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                      <td class="better" :class="{'better-more': item.isBetter}">{{item.isBetter ? '高':'低'}}</td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-bottom">
          <div class="enter-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailShopInfo",
    props:{
        shop:{
            type:Object
        }
    },
    filters:{
        sellCountFilter:function(value){
            if (value < 10000) return value
            return (value/10000).toFixed(1) + '万'
        }
    }
}
</script>

<style scoped>
.shop-info{
    width: 100%;
    height: 200px;
    padding: 10px;
}

/* 店铺头像和标题 */
.shop-top{
    margin: 20px 0px 30px;
    position: relative;
}
.shop-top img{
    width: 70px;
    height: 70px;
    border-radius: 100%;
    box-shadow: 1px 1px 5px;
}
.title{
    position: absolute;
    top: 30px;
    left: 85px;
    font-size: 23px;
}
/* 店铺简介 */
.shop-middle{
    width: 100%;
    display: flex;
    padding: 10px;
}
.shop-middle-item{
    flex: 1;
}
.shop-middle-left{
    display: flex;
    text-align: center;
    border-right: 2px solid #eee;
    height: 50px;
}
.sells-count,.sells-text{
    flex: 1;
    margin-right: 20px;
    margin-bottom: 5px;
}
.goods-count,.goods-text{
    flex: 1;
    margin-bottom: 5px;
}
.sells-count,.goods-count{
    font-size: 20px;
}
.sells-text,.goods-text{
    font-size: 13px;
}
.shop-middle-right{
    text-align: center;
    font-size: 13px;
}
.score{
    width: 40px;
    color: limegreen;
}
.shop-middle-right table{
    float:right;
}
.shop-middle-right table tr{
    height: 18px;
}
.better{
    color: white;
    background-color: limegreen;
}
.score-better{
    color: var(--color-high-text);
}
.better-more{
    background-color: var(--color-high-text);
}
.shop-bottom{
    width: 100%;
}
.enter-shop{
    height: 40px;
    width: 70%;
    margin: auto;
    text-align: center;
    line-height: 40px;
    background-color:rgba(100, 100, 100, 0.2);
    border-radius:50px ;
}
</style>