<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
      <div class="info-desc">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailGoodsInfo",
    props:{
        detailInfo:{
            type:Object
        }
    },
    data() {
        return {
            imgCount:0,
            imgLength:0
        }
    },
    methods:{
        imgLoad(){
            if(++this.imgCount == this.imgLength){
                this.$emit('imgLoad')
            }
        }
    },
    watch: {
        detailInfo() {
            this.imgLength = this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
.goods-info{
    width: 100%;
    margin-top: 80px;
}
.info-desc{
    margin-left: 20px;
    margin-right: 20px;
}
.end{
    float: right;
    height: 5px;
    border-bottom: 1px solid black;
    border-right: 5px solid black;
    margin-top: 10px;
}
.start{
    float: left;
    height: 5px;
    border-bottom: 1px solid black;
    border-left: 5px solid black;
    margin-bottom: 10px;
}
.start,.end{
    width: 125px;
}
.desc{
    clear: both;
    font-size: 13px;
}
.info-list img{
    width: 100%;
}
.info-key{
    clear: both;
    margin:10px 20px ;
}
</style>