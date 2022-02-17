<template>
  <div class="details">
      <DetailNavBar @titleClick="titleClick" ref="nav"></DetailNavBar>
      <Scroll 
      class="centent" 
      ref="Scroll"
      :probeType='3'
      :pull-up-load="true"
      @scroll="cententScroll"
      >
        <DetailSwiper :top-images="topImages"/>
        <DetailBaseInfo :goods="goods"/>
        <DetailShopInfo :shop="shop"/>
        <DetailGoodsInfo :detail-info="detailInfo" @imgLoad="imgLoad"/>
        <DetailParamInfo ref="param" :param-info="paramInfo"/>
        <DetailCommentInfo ref="comment" :comment-info="commentInfo"/>
        <GoodsList ref="recommend" :goods="recommends"/>
      </Scroll>
      <DetailBottomBar @addCart='addToCart'/>
      <BackTop v-show="isShowBackTop" @click.native="backTop"/>
      </div>
</template>

<script>
// 顶部导航栏
import DetailNavBar from './childComps/DetailNavBar.vue'
// 轮播图
import DetailSwiper from './childComps/DetailSwiper.vue'
// 底部信息展示
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'
// 推荐信息展示
import GoodsList from 'components/content/goods/GoodsList.vue'
// 回到顶部按钮
import BackTop from 'components/content/backTop/BackTop'

// 混入
import {itemListenerMixin} from '../../common/Mixin'
// 防抖
import {debounce} from 'common/utils'
// 滚动
import Scroll from 'components/common/scroll/Scroll'
//请求数据
import { getDetail,Goods,Shop,GoodsParam,getRecommend } from '../../network/details'
export default {
    name:"Details",
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            isShowBackTop:false,
            themeTopYs:[],
            getThemeTopY: null,
            currentIndex:0
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        BackTop,
        DetailBottomBar,
    },
    created() {
        // 存id
        this.iid = this.$route.params.iid

        // 2.根据iid请求数据
        getDetail(this.iid).then(res => {
            const data =res.result
            // 获取顶部图片
            this.topImages = data.itemInfo.topImages
            // 获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            // 获取店家信息
            this.shop = new Shop(data.shopInfo)
            // 保存商品详情数据
            this.detailInfo = data.detailInfo
            // 保存参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
            // 保存评论信息
            if(data.rate.cRate != 0 ){
                this.commentInfo = data.rate.list[0]
            }
        })
        // 请求推荐数据
        getRecommend().then(res => {
            this.recommends = res.data.list
        })

        this.getThemeTopY = debounce(() => {
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.param.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            this.themeTopYs.push(Number.MAX_VALUE)
        })
    },
    mixins:[itemListenerMixin],
    methods: {
        imgLoad(){
            this.refresh()

            this.getThemeTopY()
        },
        cententScroll(position){
            // 显示返回顶部按钮
            this.isShowBackTop = -(position.y) > 500 

            // 内容滚动显示正确内容
            const positionY = -(position.y)
            const length = this.themeTopYs.length
            // 方法一
            // for(let i = 0; i < length; i++){
            //     // 方法一
            //     if(this.currentIndex != i && ((positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))){
            //         this.currentIndex = i 
            //         this.$refs.nav.currentType = this.currentIndex
            //     }
            // }
            // 方法二
            for(let i = 0; i < length-1; i++){
                // 方法一
                if(this.currentIndex != i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
                    this.currentIndex = i 
                    this.$refs.nav.currentType = this.currentIndex
                }
            }
        },
        // 回到顶部,通过$refs调用scroll中的scrollTo方法
        backTop(){
            this.$refs.Scroll.scrollTo(0,0)
        },
        titleClick(index){
            this.$refs.Scroll.scrollTo(0,-this.themeTopYs[index],200)
        },
        addToCart(){
            // 1.获取购物车需要展示的信息
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid

            // 2.将商品添加到购物车
            this.$store.dispatch('addCart',product).then(res => {
                this.$toast.show(res, 2000)
            })
        }
    },
    destroyed() {
        this.$bus.$off('loadImage', this.itemImgListener)
    },
}
</script>

<style scoped>
.details{
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
}
.centent{
    position: absolute;
    top: 44px;
    left: 0px;
    right: 0px;
    bottom: 49px;
    overflow: hidden;
}
/* .centent{
    height: calc(100% - 44px);
    overflow: hidden;
} */
</style>