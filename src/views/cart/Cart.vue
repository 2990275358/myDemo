<template>
  <div class="cart">
    <NavBar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
      <div slot="right" @click="removeGoods()">删除</div>
    </NavBar>
    <Scroll class="centent" ref="scroll">
      <CartList/>
    </Scroll>
    <CartBottomBar/>
  </div>
</template>

<script>
// 顶部
import NavBar from '../../components/common/navbar/NavBar.vue'
// 购物车列表
import CartList from './childComps/CartList'
// 滚动条
import Scroll from 'components/common/scroll/Scroll'
// 底部
import CartBottomBar from './childComps/CartBottomBar.vue'
import { mapGetters } from 'vuex'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      Scroll,
      CartBottomBar
    },
    computed:{
      // 用map映射拿Vuex中的数据
      ...mapGetters(['cartLength'])
    },
    activated() {
      // 进入路由时进行一次Scroll的刷新，计算当前可滚动的界面大小
      this.$refs.scroll.refresh()
    },
    methods: {
      // 删除购物车商品
      removeGoods() {
        this.$store.dispatch('delGoods')
      }
    },
  }
</script>

<style scoped>
.cart{
  position: relative;
  height: 100vh;
}
.centent{
  position: absolute;
  top: 44px;
  left: 0px;
  right: 0px;
  bottom: 93px;
  overflow: hidden;
}
.navbar{
  background-color: var(--color-tint);
  color: white;
}
</style>
