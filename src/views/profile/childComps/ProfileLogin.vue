<template>
  <div class="login">
      <div class="photo"></div>
      <div class="enter">
          <h2>登录/注册</h2>
          <div class="Tel">
              <i></i>
              <span>暂无绑定手机号</span>
          </div>
      </div>
      <div class="detail">
          <i></i>
      </div>
  </div>
</template>

<script>
export default {
    name:"ProfileLogin"
}
</script>

<style scoped>
.login{
    width: 375px;
    height: 100px;
    background-color: var(--color-tint);
    display: flex;
}
.photo{
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background: url('~assets/img/common/头像.svg');
    background-size: 100%;
    background-color: #b9b1b1;
    margin-left: 30px;
}
.enter{
    padding: 15px;
}
.Tel{
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.Tel i,.detail i{
    width: 25px;
    height: 25px;
    display: inline-block;
}
.Tel i{
    background: url('~assets/img/common/手机.svg');
    background-size: 100%;
}
.Tel span{
    padding-top: 5px;
}
.detail{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.detail i{
    background: url('~assets/img/common/进入.svg');
    background-size: 100%;
}
</style>