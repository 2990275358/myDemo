import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Details = () => import('../views/details/Details')
const CategoryItem = () => import('../views/category/childComps/CategoryItem')
// 1.安装插件
// Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    name:'home',
    path: '/home',
    component: Home,
    meta:{title: "首页"}
  },
  {
    name:'category',
    path: '/category',
    component: Category,
    meta:{title: "分类"},
    children:[{
      name:"CategoryItem",
      path:'/subcategory/:maitKey',
      component:CategoryItem
    }]
  },
  {
    name:'ccart',
    path: '/cart',
    component: Cart,
    meta:{title: "购物车"}
  },
  {
    name:'profile',
    path: '/profile',
    component: Profile,
    meta:{title: "我的"}
  },
  {
    name:'details',
    path: '/details/:iid',
    component: Details,
    meta:{title: "详情"}
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

//全局前置守卫，初始化时执行，每次路由切换后执行
router.afterEach((to,from)=>{
   document.title = to.meta.title
})

export default router
