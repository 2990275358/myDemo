<template>
  <div class="wrapper">
    <NavBar class="bar"><div slot="center">我的分类</div></NavBar>
      <CategoryList 
      :sort="sort"
      @clickList="clickList"/>
      <CategoryItem :article="article" :goods="goods"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CategoryList from './childComps/CategoryList.vue'
import CategoryItem from './childComps/CategoryItem.vue'

// 请求数据
import { getCategory,getSubcategory,getCategoryDetail } from '../../network/category'
  export default {
    name: "Category",
    components: {
      NavBar,
      CategoryList,
      CategoryItem
    },
    data() {
      return {
        sort: [],
        article:[],
        index: 0,
        maitKey:0,
        miniWallkey:0,
        goods: []
      }
    },
    methods: {
      _getCategory() {
        getCategory().then(res => {
          this.sort = res.data.category.list
          })
        },
        clickList(index){
          this.index = index
          this.miniWallkey = this.sort[this.index].miniWallkey
          this.maitKey = this.sort[index].maitKey
          this._getSubcategory(this.maitKey)
          this._getCategoryDetail(this.sort[this.index].miniWallkey)
        },
        _getSubcategory(maitKey){
          getSubcategory(maitKey).then(res => {
            this.article = res.data.list
          })
        },
        _getCategoryDetail(miniWallkey) {
          getCategoryDetail(miniWallkey).then(res => {
            if(this.goods.length !== 0) this.goods = []
              for (let i = 0; i < res.length; i++) {
                const element = res[i];
                this.goods.push({image:element.img,prict:element.prict,title:element.title,cfav:element.cfav})
              }
          })
        }
      },
      created() {
        this._getCategory()       
      },
      updated() {
        if (this.article.length == 0) {
          this._getSubcategory(this.sort[0].maitKey)
        }
        if (this.goods.length == 0) {
          this._getCategoryDetail(this.sort[0].miniWallkey)
        }
      },
  }
</script>

<style scoped>
.bar{
  background-color: var(--color-tint);
  color: white;
}
</style>
