/**
 * Created by lanou3g on 17/6/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
  loginway:'',
};
const mutations={
  CHANGE_LOGINWAY(state,type){
    state.loginway=type
  },
  CHANGE_SHOW(state,type){
    state.show=type
  },
};
const actions={
  //{commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。
  changeLoginway({commit},type){
    console.log(type);
    commit('CHANGE_LOGINWAY',type)
  },
  changeShow({commit},type){
    console.log(type)
    commit('CHANGE_SHOW',type)
  }
};
const getters={
  getLoginway:function(state){
    console.log(state.loginway);
    return state.loginway
  },
  getShow:function(state){
    return state.show
  },
};
export default({
  state,
  mutations,
  actions,
  getters
});

