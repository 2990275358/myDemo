<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:"Toast",
    data() {
        return {
            message:"",
            isShow: false,
            timer:null
        }
    },
    methods: {
        show(message="ss", duration=2000) {
            this.message = message
            this.isShow = true

            this.timer = setTimeout(() => {
            this.message = ""
            this.isShow = false
            }, duration);
        }
    },
    destroyed() {
        clearTimeout(timer)
    },
}
</script>

<style scoped>
.toast{
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, 0.705);
    color:white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
}
</style>