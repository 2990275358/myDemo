<template>
  <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="" @load="loadImage">
          </a>
      </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper,SwiperItem } from 'components/common/swiper/index.js'
export default {
    name:'HomeSwiper',
    props:{
        banners:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        Swiper,SwiperItem
    },
    data() {
        return {
            isLoad:false
        }
    },
    methods: {
        loadImage(){
            if(!this.isLoad){
            this.$emit('swiperLoadImage')
            this.isLoad = true
            }
        }
    },
}
</script>

<style>

</style>