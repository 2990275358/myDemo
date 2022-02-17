<template>
  <div class="item">
      <Scroll class="centent" ref="Scroll">
          <div class="flex">
              <CategoryChildItem 
              class="child-item"
          v-for="(item, index) in article" 
          :key="index" 
          :item='item'/>
          <GoodsList :goods="goods" class="goods"/>
          </div>
          
      </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CategoryChildItem from './CategoryChildItem.vue'
import GoodsList from '../../../components/content/goods/GoodsList.vue'
import {itemListenerMixin} from 'common/Mixin'
export default {
    name:"CategoryItem",
    props:{
        article: {
            type:Array
        },
        goods:{
            type:Array
        }
    },
    mixins:[itemListenerMixin],
    components:{
        Scroll,
        CategoryChildItem,
        GoodsList
    }
}
</script>

<style scoped>
.item{
    width: 80%;
    height:calc(100vh - 44px);
    background-color: white;
    position: absolute;
    top: 44px;
    left: 20%;
    overflow: hidden;
}
.flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.child-item{
    flex: 1;
    margin-bottom: 20px;
}
.centent{
    height: calc(100% - 50px);
    overflow: hidden;
}
</style>