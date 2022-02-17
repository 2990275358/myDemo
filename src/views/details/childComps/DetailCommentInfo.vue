<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
          <div class="header-title">用户评价</div>
          <div class="header-more">
              <span>更多</span>
              <i class="arrow-right"></i>
          </div>
      </div>
      <div class="info-user">
          <img :src="commentInfo.user.avatar" alt="">
          <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
          <p>{{commentInfo.content}}</p>
          <div class="info-other">
              <span class="date">{{commentInfo.created | showDate}}</span>
              <span>{{commentInfo.style}}</span>
          </div>
          <div class="info-imgs">
              <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
          </div>
      </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils.js'
export default {
    name:"DetailCommentInfo",
    props:{
        commentInfo:{
            type:Object
        }
    },
    filters:{
        showDate(value){
            // 1.将时间戳转换为Date对象
            const date = new Date(value * 1000)

            // 2.将date进行格式化
            return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
        }
    }
}
</script>

<style scoped>
.comment-info{
    padding:10px;
    margin-bottom: 15px;
    border-bottom: 2px solid #eee;
    overflow: hidden;
}
.info-header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1.5px solid #eee;
    margin-bottom: 20px;
}
.header-title{
    float: left;
    }
.header-more{
    float: right;
}
.info-user{
    position: relative;
}
.info-user span{
    position: absolute;
    top: 20px;
    left: 60px;
}
.info-user img{
    border-radius: 100%;
    height: 50px;
    width: 50px;
}
.info-detail{
    font-size: 14px;
}
.info-detail p{
    color:rgba(0, 0, 0, 0.6);
}
.info-other{
    margin: 10px 0px 10px;
}
.info-other span{
    margin-right: 10px;
    color: rgba(169, 169, 169, 0.76);
}
.info-imgs img{
    width: 100px;
    height: 100px;
    margin-right: 10px;
}
</style>