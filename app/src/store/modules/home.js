/**
 * Created by lanou3g on 17/6/27.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
  //初始状态，展示home页面
  show:'home',
  //定义可视窗口宽高
  clientheight:0,
  clientwidth:0,
  left_nav:{
    home:'home',
    news:'news',
    collections:'collections',
    shop:'shop'
  },
  brandsArr:[
    {name:'clot',src:'../../static/images/clot.jpg'},
    {name:'madness',src:'../../static/images/madness.jpg'},
    {name:'bape',src:'../../static/images/bape.jpg'},
    {name:'assc',src:'../../static/images/assc.jpeg'},
  ],
};
const mutations={
  //改变宽高
  CHANGE_HW(state,obj){
    state.clientwidth=obj.w;
    state.clientheight=obj.h;
  },
  CHANGE_SHOW(state,type){
    state.show=type
  },
};
const actions={
  change_hw({commit},obj){
    commit('CHANGE_HW',obj)
  },
  changeShow({commit},type){
    commit('CHANGE_SHOW',type)
  },
};
const getters={
  getHW:function (state) {
    return {
      h:state.clientheight,
      w:state.clientwidth
    }
  },
  getBrands:function(state){
    return state.brandsArr
  },
  getLeft_nav:function(state){
    return state.left_nav
  },
  getFootItems:function(state){
    return state.footItems
  },
};
export default({
  state,
  mutations,
  actions,
  getters,
})
