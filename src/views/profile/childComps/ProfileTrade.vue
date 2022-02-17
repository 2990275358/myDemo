<template>
  <div class="shopping">
    <div class="my-message">
            <div class="svg">
                <img src="~assets/img/profile/cart.svg" alt="">
            </div>
            <div class="text" @click="toCart">我的购物车</div>
        </div>
    <div class="my-message">
            <div class="svg">
                <img src="~assets/img/profile/shopping.svg" alt="">
            </div>
            <div class="text">下载购物APP</div>
        </div>
  </div>
</template>

<script>
export default {
name:"ProfileTrade",
methods: {
    toCart() {
        this.$router.push('/cart')
    }
},
}
</script>

<style scoped>
.my-message{
    height: 60px;
    padding-left: 20px;
    border-bottom:1px solid  #eee;
    display: flex;
    align-items: center;
}
.my-message:last-child{
    border-bottom: none;
}
.svg{
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.svg img{
    width: 100%;
    height: 100%;
}
</style>