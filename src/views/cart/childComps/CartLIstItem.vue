<template>
  <div class="cart-item">
      <div class="test">
          <CheckButton 
          :is-check="product.checked"
          @click.native="checkCilck"/>
      </div>
      <div class="item-img">
          <img :src="product.image" alt="">
      </div>
      <div class="item-detail">
          <div class="title">
              <h3>{{product.title}}</h3>
          </div>
          <div class="text">
              <span>{{product.desc}}</span>
          </div>
          <div class="detail">
              <span class="price">￥{{product.price}}</span>
              <span class="count">×{{product.count}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
    name:"CartLIstItem",
    props:{
        product:{
            type:Object,
            defaukt() {
                return {}
            }
        }
    },
    components:{
        CheckButton
    },
    methods: {
        checkCilck() {
            this.product.checked = !this.product.checked
        }
    }
}
</script>

<style scoped>
.cart-item{
    height: 150px;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #eee;
}
.test{
    width: 30px;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-img img{
    width: 100px;
    height: 100%;
}
.item-detail{
    flex: 1;
    padding-left: 10px;
    position: relative;
}
.title h3,.text span{
    display: block;
    width: 230px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-bottom: 20px;
}
.detail{
    width: calc(100% - 15px);
    position: absolute;
    top: 125px;
    left: 10px;
}
.price{
    color: var(--color-high-text);
}
.count{
    float: right;
}
</style>