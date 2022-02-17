<template>
  <div class="checkButton" :class="{check : isCheck}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
name:"CheckButton",
props:{
    isCheck:{
        type:Boolean,
        default() {
            return false
        }
    }
}
}
</script>

<style>
.checkButton{
    position: relative;
    border-radius: 100%;
    width: 22px;
    height: 22px;
    border: 2px solid darkgrey;
    margin: 2px;
}
.checkButton img{
    position: absolute;
    top: 2px;
    left: 2px;
}
.check{
    background-color: red;
    border-color: red;
}
</style>