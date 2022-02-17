<template>
  <div class="bottom-bar">
      <div class="sort">
          <div class="service">
              <i class="service-img"></i>
              <span>客服</span>
          </div>
          <div class="store">
              <i class="store-img"></i>
              <span>店铺</span>
          </div>
          <div class="collect">
              <i class="collect-img"></i>
              <span>客服</span>
          </div>
      </div>
      <div class="feature">
          <div class="cart" @click="addCart">加入购物车</div>
          <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailBottomBar",
    methods: {
        addCart(){
            this.$emit('addCart')
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    height: 49px;
    background-color: white;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
.sort{
    width: 55%;
    float: left;
    display: flex;
    text-align: center;
    margin-left:-20px ;
}
.service,.store,.collect{
    flex: 1;
    position: relative;
}
.service span,.store span,.collect span{
    position: absolute;
    top: 30px;
}
.service-img,.store-img,.collect-img{
    display: block;
    width: 32px;
    height: 32px;
    position: absolute;
}
.service-img{
    background: url('~assets/img/detail/detail_bottom.png');
    background-size: 100%;
    background-position-y: -77px;
    left: 32px;
}
.store-img{
    background: url('~assets/img/detail/detail_bottom.png');
    background-size: 100%;
    background-position-y: -143px;
    left: 34px;
}
.collect-img{
    background: url('~assets/img/detail/detail_bottom.png');
    background-size: 100%;
    left: 34px;
}
.feature{
    width: 45%;
    float: right;
    display: flex;
    text-align: center;
    line-height: 49px;
}
.cart,.buy{
    flex: 1;
    margin: auto;
}
.cart{
    background-color: yellow;
}
.buy{
    background-color: var(--color-high-text);
    color: white;
}
</style>