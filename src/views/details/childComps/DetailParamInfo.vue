<template>
  <div class="param-info" >
      <table 
      class="info-size"
      v-for="(table, index) in paramInfo.Sizes" :key="index">
        <tr v-for="(tr, indey) in table" :key="indey">
            <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
        </tr>
      </table>
      <hr />
      <table class="info-param">
          <tr v-for="(info, index) in paramInfo.infos" :key="index">
              <td class="info-param-key">{{info.key}}</td>
              <td class="param-value">{{info.value}}</td>
          </tr>
      </table>
      <div class="info-img" v-if="paramInfo.image">
          <img :src="paramInfo.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailParamInfo",
    props:{
        paramInfo:{
            type:Object
        }
    }
}
</script>

<style>
.param-info{
    padding: 10px;
    padding-bottom: 50px;
    font-size: 15px;
    border-bottom: 5px solid #eee;
}
.info-size{
    border-collapse:collapse;
}
.info-size tr{
    height: 40px;
}
.info-size tr td{
    width: 60px;
}
.info-param{
    border-collapse:collapse;
}
.info-param tr{
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}
.info-param-key{
    width: 100px;
}
.param-value{
    color:var(--color-high-text)
}
</style>