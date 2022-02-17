<template>
  <div class="wrapper" ref="wrapper">
      <div class="centent">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default() {
                return 0
            }
        },
        pullUpLoad:{
            type:Boolean,
            default() {
                return false
            }
        }
    },
    data() {
        return {
            scroll:null,
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType: this.probeType,
            click:true,
            pullUpLoad:this.pullUpLoad
        })

        // 监听滚动
        this.scroll.on('scroll',(position) =>{
            this.$emit('scroll',position)
        })

        // 上拉加载更多
        if(this.pullUpLoad) {
                this.scroll.on('pullingUp',() =>{
                this.$emit('pullingup')
            })
        }
    },
    methods:{
        // 回到顶部
        scrollTo(x,y,tiem=300){
            this.scroll && this.scroll.scrollTo(x,y,tiem)
        },
        // 上拉加载更多，实现多次加载
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        // 刷新滚动区域
        refresh(){
           this.scroll && this.scroll.refresh()
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>

<style

</style>