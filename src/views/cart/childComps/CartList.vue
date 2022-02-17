<template>
  <div class="cart-list">
        <CartLIstItem v-for="(item,index) in cartList" :key="index" :product="item"></CartLIstItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartLIstItem from './CartLIstItem.vue'
export default {
    name:'CartList',
    components:{
        CartLIstItem
    },
    computed: {
        ...mapGetters(['cartList'])
    }
}
</script>

<style scoped>

</style>