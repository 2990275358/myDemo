<template>
  <div class="recommend">
      <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommends:{
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
 .recommend{
     display: flex;
     width: 100%;
     text-align: center;
     padding: 10px 0px 20px;
     border-bottom: 10px solid #eee;
 }
 .recommend-item{
     flex: 1;
 }
 .recommend-item img{
     width: 70px;
     height: 70px;
 }
</style>