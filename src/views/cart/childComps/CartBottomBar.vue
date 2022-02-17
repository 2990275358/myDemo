<template>
  <div class="bottom-bar">
      <div class="all-check">
          <CheckButton 
          :is-check="isCheckAll"
          @click.native="checkClick"/>
          <span>全选</span>
      </div>
      <div class="sum">
          <span>合计</span>
          <span class="pric">{{totalPrice}}</span>
      </div>
      <div class="count" @click="countCilck">
          <span>去结算（{{checkLength}}）</span>
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
import { mapGetters } from 'vuex'
export default {
    name:"CartBottomBar",
    components:{
        CheckButton
    },
    computed:{
        ...mapGetters(['cartList']),
        totalPrice() {
            // 商品价格的计算
            return '￥' + this.cartList.filter(item => {
                return item.checked
            }).reduce((preValue, item) => {
                return preValue + item.price * item.count
            }, 0).toFixed(2)
        },
        checkLength() {
            // 商品数量的计算
            return this.cartList.filter(item => item.checked).reduce((preValue, item) => {
                 return preValue + item.count
                },0)
        },
        // 判断是否都选中
        isCheckAll() {
            // 判断是否有商品在购物车
            if(this.cartList.length == 0) return false
            // return !(this.cartList.find(item => !item.checked))
            // return !(this.cartList.filter(item => !item.checked).length)
            for(let item of this.cartList){
                if(!item.checked){
                    return false
                }
            }
            return true
        }
    },
    methods: {
        checkClick() {
            if(this.isCheckAll) {
                this.cartList.forEach(element => {
                    // return element.checked = false
                    this.$store.commit('updatedChecked',element)
                });
            }else {
                this.cartList.forEach(element => {
                    // return element.checked = true
                    this.$store.commit('desecletAll', element)
                });
            }
        },
        countCilck() {
            if(this.checkLength == 0) {
                this.$toast.show('未选择商品')
            }
        }
    },
}
</script>

<style scoped>
.bottom-bar{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    position: fixed;
    bottom: 49px;
    background-color: rgba(238, 238, 238, 0.3);
}
.all-check{
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
}
.all-check span{
    margin-left: 2px;
}
.sum{
    flex: 1;
}
.count{
    width: 110px;
    text-align: center;
    background-color: var(--color-tint);
}
</style>