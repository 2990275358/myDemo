<template>
  <div class="chid-item">
      <div class="img">
          <img :src="item.image" alt="">
          <div class="text">
             {{item.title}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"CategoryChildItem",
    props:{
        item:{
            type:Object
        }
    }
}
</script>

<style scoped>
.child-item{
     width: 90px;
    height: 90px;
}
.img{
    width: 90px;
    height: 90px;
    text-align: center;
}
.img img{
    width: 70px;
    height: 70px;
}
</style>