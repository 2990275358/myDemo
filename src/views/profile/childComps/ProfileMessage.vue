<template>
  <div class="message">
      <div class="my-message">
          <div class="svg">
              <img src="~assets/img/profile/message.svg" alt="">
          </div>
          <div class="text">我的消息</div>
      </div>
      <div class="my-message">
          <div class="svg">
              <img src="~assets/img/profile/pointer.svg" alt="">
          </div>
          <div class="text">积分商城</div>
      </div>
      <div class="my-message">
          <div class="svg">
              <img src="~assets/img/profile/vip.svg" alt="">
          </div>
          <div class="text">会员卡</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"ProfileMessage"
}
</script>

<style scoped>
.message{
    height: 180px;
    border-bottom: 10px solid #eee;
}
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