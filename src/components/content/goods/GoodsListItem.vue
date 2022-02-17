<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy="showImage" alt="" @load="loadImage">
      <div class="item-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
 name:'GoodsListItem',
 props:{
     goodsItem:{
         type:Object,
         defalut() {
             return {}
         }
     }
 },
 computed:{
     showImage(){
         return this.goodsItem.image || this.goodsItem.show.img 
     }
 },
 methods:{
     loadImage(){
         this.$bus.$emit('loadImage')

        // if(this.$route.path.indexOf('/home')){
        //     this.$bus.$emit('homeLoadImage')
        // }else if(this.$route.path.indexOf('/detail')){
        //     this.$bus.$emit('detailLoadImage')
        // }
     },
     itemClick(){
         if(this.$route.path == '/home'){
             this.$router.push('/details/' + this.goodsItem.iid)
         }
     }
 }
}
</script>

<style scoped>
.goods-item{
    width: 48%;
    height:278px;
    padding: 5px;
    padding-bottom: 50px;
    position: relative;
}
.goods-item img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: -2px -2px 3px rgba(100, 100, 100, 0.5);
}
.item-info{
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    text-align: center;
    position: absolute;
    top: 230px;
}
.item-info p{
    width: 100%;
    height: 20px;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price{
    color:var(--color-high-text);
    margin-right: 30px;
}
.cfav{
    position: relative;
}
.cfav::before{
    content: '';
    width: 25px;
    height: 25px;
    position: absolute;
    left: -25px;
    top: -4px;
    background: url('~assets/img/detail/detail_bottom.png');
    background-size: 100%;
    background-position: 0px 0px;
}
</style>