<template>
  <div class="goods-list">
      <GoodsListItem v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
 name:'GoodsList',
 components:{
     GoodsListItem
 },
 props:{
     goods:{
         type:Array,
         default() {
             return []
         }
     }
 }
}
</script>

<style>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}
</style>