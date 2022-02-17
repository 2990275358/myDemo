<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <TabControl 
      :titles="['流行','新款','精选']" 
      class="TabControl"
      @tabClick="tabClick"
      v-show="isFixed"
      ref="TabControl1"
      />
    <Scroll 
    class="centent" 
    ref="Scroll" 
    :probeType='3'
    :pull-up-load="true"
    @scroll="cententScroll"
    @pullingup="loadMore">
        <HomeSwiper 
        :banners="banners" 
        @swiperLoadImage="swiperLoadImage"/>
        <RecommendView :recommends="recommends" />
        <FeaturView /> 
        <TabControl 
        :titles="['流行','新款','精选']" 
        ref="TabControl2"
        @tabClick="tabClick"
        />
        <GoodsList :goods="showGoods" />
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
// 子组件
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeaturView from './childComps/FeaturView.vue'
// 公共组件
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
import {itemListenerMixin} from '../../common/Mixin'
// 路由请求
import {getHomeMultidata,getHomeGoods} from '../../network/home'
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeaturView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop' ,
        isShowBackTop:false,
        offsetTop:0,
        isFixed:false,
        saveY:0  
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata();
      // 请求商品数据
      this.getHomeGoods('pop');

      this.getHomeGoods('new');

      this.getHomeGoods('sell');

    },
    mounted() {
      this.$refs.Scroll.refresh()
    },
    mixins:[itemListenerMixin],
    methods: {
      /**
       * 事件监听
       */
      // 选择流行、新款、精选
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.TabControl1.itemIndex = index
        this.$refs.TabControl2.itemIndex = index
      },
      // 回到顶部,通过$refs调用scroll中的scrollTo方法
      backTop(){
        this.$refs.Scroll.scrollTo(0,0)
      },
      // 回到顶部按钮
      cententScroll(position){
        // 显示返回顶部按钮
        this.isShowBackTop = -(position.y) > 500 

        // 实现tabControl的吸顶效果
        this.isFixed = -(position.y) > this.offsetTop
      },
      // 上拉加载更多
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperLoadImage(){
        this.offsetTop = this.$refs.TabControl2.$el.offsetTop
      },
      /**
       * 网络请求
       */
      getHomeMultidata(){
          getHomeMultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list
         })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          // 存商品列表
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 完成上拉加载更多
          this.$refs.Scroll.finishPullUp()
        })
      },
    },
    activated() {
      // 进入路由时跳转到上次离开的位置
      this.$refs.Scroll.scrollTo(0, this.saveY, 0)
      this.$refs.Scroll.refresh()
    },
    deactivated() {
      // 离开路由时保存当前位置
      this.saveY = this.$refs.Scroll.getScrollY()

      // 取消图片事件监听、
      this.$bus.$off('loadImage', this.itemImgListener)
    },
  }
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;

/* 在使用浏览器原生滚动时使用 */
  /* position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 999; */
}
.TabControl{
position: relative;
z-index: 999;
}
.centent{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
/* .centent{
  height: calc(100% - 52px);
  overflow: hidden;
} */
</style>
