//新建一个vuex文件夹（这个不是必须的），并在文件夹下新建store.js文件，文件中引入我们的vue和vuex。
import Vue from 'vue'
import Vuex from 'vuex'

import Home from './modules/Home'
import Login from './modules/Login'
import Brands from './modules/Brands'
import News from './modules/news'
import shop from './modules/shop'
//使用我们vuex，引入之后用Vue.use进行引用。
Vue.use(Vuex)

//Vuex 中的 mutations 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
export default new Vuex.Store({
  modules:{
    Home,
    Login,
    Brands,
    News,
    shop,
  },
});
