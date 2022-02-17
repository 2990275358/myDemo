<template>
  <div class="">
      <NavBar>
          <div slot="left" class="left" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="center">
              <div 
              v-for="(item, index) in titles" 
              :key="index" class="center-item" 
              @click="titleClick(index)" 
              :class="{active: currentType === index}">{{item}}</div>
          </div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    name:"DetailNavBar",
    components:{
        NavBar
    },
    data() {
        return {
            titles:['商品','参数','评论','推荐'],
            currentType:0
        }
    },
    methods: {
        backClick(){
            this.$router.back()
        },
        titleClick(index){
            this.currentType = this.titles[index]
            this.$emit('titleClick',index)
        }
    },
}
</script>

<style scoped>
.center{
    display: flex;
}
.center-item{
    flex: 1;
}
.left img{
    margin-top:12px ;
}
.active{
    color: var(--color-high-text);
}
</style>