/**
 * Created by lanou3g on 17/6/27.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
  news:[
    {
      src:'../static/images/news.jpg',
      title:'篮球文化新基地，JORDAN 218 TIANHE正式开业',
      time:'2016/12/13'
    },
    {
      src:'../static/images/news2.jpg',
      title:'潮流教父藤原浩做的鸡你吃吗？',
      time:'2015/07/21'
    },
    {
      src:'../static/images/news3.jpg',
      title:'跨界发型屋！Edwin Watch Store × Barber shop...',
      time:'2015/07/16'
    },
    {
      src:'../static/images/news4.jpeg',
      title:'广州人气潮所地图&1626联乘卡贴领取方法',
      time:'2015/01/13'
    },
    {
      src:'../static/images/news.jpg',
      title:'篮球文化新基地，JORDAN 218 TIANHE正式开业',
      time:'2016/12/13'
    },
    {
      src:'../static/images/news2.jpg',
      title:'潮流教父藤原浩做的鸡你吃吗？',
      time:'2015/07/21'
    },
    {
      src:'../static/images/news3.jpg',
      title:'跨界发型屋！Edwin Watch Store × Barber shop...',
      time:'2015/07/16'
    },
    {
      src:'../static/images/news4.jpeg',
      title:'广州人气潮所地图&1626联乘卡贴领取方法',
      time:'2015/01/13'
    },
    {
      src:'../static/images/news.jpg',
      title:'篮球文化新基地，JORDAN 218 TIANHE正式开业',
      time:'2016/12/13'
    },
    {
      src:'../static/images/news2.jpg',
      title:'潮流教父藤原浩做的鸡你吃吗？',
      time:'2015/07/21'
    },
    {
      src:'../static/images/news3.jpg',
      title:'跨界发型屋！Edwin Watch Store × Barber shop...',
      time:'2015/07/16'
    },
    {
      src:'../static/images/news4.jpeg',
      title:'广州人气潮所地图&1626联乘卡贴领取方法',
      time:'2015/01/13'
    },
  ],
}
const getters={
  getNews:function(state){
    return state.news;
  },
}
export default({
  state,
  getters,
})
