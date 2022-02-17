<template>
  <div class="info">
      <div class="my-info">
          <div class="number">
              <span>0.00</span>元
          </div>
          <div class="text">
              <span>我的余额</span>
          </div>
      </div>
      <div class="my-info">
          <div class="number">
              <span>0</span>个
          </div>
          <div class="text">
              <span>我的优惠</span>
          </div>
      </div>
      <div class="my-info">
          <div class="number">
              <span>0</span>分
          </div>
          <div class="text">
              <span>我的积分</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"ProfileInfo"
}
</script>

<style scoped>
.info{
    display: flex;
    height: 100px;
    border-bottom:10px solid #eee ;
}
.my-info{
    flex: 1;
    border-left: 1px solid #eee;
    text-align: center;
    padding-top: 10px;
}
.my-info:nth-child(1){
    border-left: none;
}
.number span{
    font-size: 25px;
    color: coral;
    padding-right: 5px;
}
.text{
    margin-top: 10px;
}
</style>