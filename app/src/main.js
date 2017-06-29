// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alia
//程序入口文件，加载各种公共组件
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import News from './components/News.vue'
import Shop from './components/Shop.vue'
import Collection from './components/Collections.vue'
import HomeFirst from './components/HomeFirst.vue'
import store from './store'
import Brands from './components/Brands.vue'
import Newsarticle from './components/Newsarticle.vue'
import ShoppingItem from './components/ShoppingItem.vue'
import Cart from './components/Cart.vue'
import Login from './components/Login.vue'
Vue.config.productionTip=false//生产环境提示，这里设置成false
Vue.use(VueRouter);//vue全局使用Router
const router=new VueRouter({
  routes:[{//配置路由，是一个数组
    path:'/home',
    component:Home,
    children:[
      {path:'',component:HomeFirst},
      {path:':id',component:Brands}
      ]
    },
    {
      path:'/news',component:News
    },
    {
      path:'/shop',component:Shop
    },
    {
      path:'/collections',component:Collection
    },
    {
      path:'/',redirect:'/home'
    },
    {
      path:'/newsarticle',component:Newsarticle
    },
    {
      path:'/shoppingitem',component:ShoppingItem
    },
    {
      path:'/cart',component:Cart
    },
    {
      path:'/Login',component:Login
    }
    ]
});
//引进App组件和<App/>的模板，他是通过import App from './App'这句话引入的
new Vue({
  el: '#app',
  router,
  // 把 store 对象注入到了
  store,
  template: '<App/>',
  components: { App }//对应组件的模板
})
