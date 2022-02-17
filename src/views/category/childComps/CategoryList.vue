<template>
  <div class="list">
    <Scroll class="centent">
      <ul class="item">
        <li 
        v-for="(item,index) in sort" 
        :key="item.maitKey" 
        :class="{active: Aactive == index}" 
        @click="clickActive(index)">
          {{item.title}}
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>

// 滚动
import Scroll from 'components/common/scroll/Scroll'
export default {
    name:"CategoryList",
    props: {
      sort: {
        type:Array
      }
    },
    data() {
      return {
        Aactive: 0
      }
    },
    components:{
      Scroll
    },
    methods: {
      clickActive(index) {
        this.Aactive = index
        this.$emit('clickList', index)
      }
    }
}
</script>

<style scoped>
.list{
width: 20%;
height: calc(100vh - 44px);
background-color: #eee;
text-align: center;
position: relative;
left: 0px;
}
.item li{
  height: 50px;
  line-height: 50px;
}
.centent{
    height: calc(100% - 50px);
    overflow: hidden;
}
.active{
  background-color: white;
  border-left: 5px solid rgba(255, 0, 0, 0.603);
  color: var(--color-high-text);
}
</style>