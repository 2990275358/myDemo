<template>
  <div class="tab-control">
      <div 
      class="tab-control-item" 
      v-for="(item,index) in titles" 
      :key="index"
      :class="{active : itemIndex===index}"
      @click="tabClick(index)"
       >
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
        name:'TabControl',
        props:{
            titles:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                itemIndex:0
            }
        },
        methods: {
            tabClick(index){
                this.itemIndex = index;
                this.$emit('tabClick',index)
            }
        },
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: white;
    z-index: 999;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom:3px solid var(--color-tint);
}
</style>