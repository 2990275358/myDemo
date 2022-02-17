<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
      <!-- 标题 -->
      <div class="info-title">{{goods.title}}</div>
      <!-- 价格、优惠 -->
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount" :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
      </div>
      <!-- 其他 -->
      <div class="info-other">
          <span>{{goods.columns[0]}}</span> 
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <!-- 运输方面 -->
      <div class="info-services">
          <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailBaseInfo",
    props:{
        goods:{
            type:Object,
            default() {
                return {}
            }
        }
    },
}
</script>

<style scoped>
.base-info{
    height:200px;
    width: 100%;
    padding: 5px;
    border-bottom: 5px solid #eee;
}
.info-title{
    font-size: 17px;
    margin: 10px 0px 15px;
}
.info-price{
    position: relative;
    margin: 10px 0px 20px;
}
.info-price span{
    margin-right: 3px;
}
.n-price{
    color: var(--color-high-text);
    font-size: 23px;
}
.o-price{
    font-size: 14px;
    color: darkgray;
    text-decoration: line-through;
}
.discount{
    padding: 2px;
    border-radius: 8px;
    position: absolute;
    top: -4px;
    color: white;
}
.info-other{
    display: flex;
    margin: 10px 0px 20px;
}
.info-other span{
    font-size: 13px;
    color: darkgray;
    border-bottom: 2px solid #eee;
    padding-bottom: 5px;
}
.info-other span:nth-child(2){
    flex: 1;
    text-align: center;
}
.info-other span:last-child{
        float: right;
}
.info-other span:first-child{
    float: left;
}
.info-services{
display: flex;
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.info-services-item{
    flex: 1;
    font-size: 13px;
}
.info-services-item img{
    width: 13px;
    height: 13px;
}
</style>