<template>
  <div class="backtop">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:"BackTop"
}
</script>

<style>
.backtop{
    position: fixed;
    bottom: 55px;
    right: 10px;
    z-index: 999;
}
.backtop img{
    width: 43px;
    height: 43px;
}
</style>