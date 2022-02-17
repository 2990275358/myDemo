import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
// 解决移动端300毫秒延迟
FastClick.attach(document.body)
// 引用路由
Vue.use(VueRouter)
// 注册提示插件
Vue.use(toast)

Vue.config.productionTip = false

// 使用图片懒加载插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
  toast,
  beforeCreate(){
    Vue.prototype.$bus = this
}
}).$mount('#app')
