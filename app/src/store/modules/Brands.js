/**
 * Created by lanou3g on 17/6/27.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
  brandsArr:[
    {name:'clot',src:'../../static/images/clot.jpg'},
    {name:'madness',src:'../../static/images/madness.jpg'},
    {name:'bape',src:'../../static/images/bape.jpg'},
    {name:'assc',src:'../../static/images/assc.jpeg'},
  ],
  nowbrand:null,
  clotIntro:{
    name:'clot',
    time:'2003年6月',
    person:'陈冠希',
    story:"EDISON陈冠希2003年创办了自己的服装品牌CLOT，在上海,北京,香港等地开有Clot潮流店铺：ACU、JUICE，努力成为中国第一潮牌!EDISON近两年创办了自己的服装品牌CLOT,并自己参与服装的设计、用料等 各个方面,成为中国第一潮牌,并在世界上都有一定的影力.CLOT是一个LIFESTYLE的公司，创作服装，包括CLOT品牌服装以及在香港的 JUICE店铺、策划PARTY、帮助香港一些公司做consultant，例如NIKE、PEPSI…、更包括CLOT自己的音乐!现成员包括：陈冠 希、MC仁、陈奂仁、DJ Tommy、厨房仔、恭硕良等一起，CLOT是一个FAMILY，是一个不可分开的家庭,而他的店铺JUICE也成为香港游客的一旅游胜地!CLOT也经常会与一些其他大品牌生产合作产品,像LEVI'S,NIKE,PEPSI等品牌!",
    shop:'ACU、JUICE',
    src:'../static/images/clot.jpg'
  },
  madnessIntro:{
    name:'madness',
    time:'2003年6月',
    person:'余文乐',
    story:"EDISON陈冠希2003年创办了自己的服装品牌CLOT，在上海,北京,香港等地开有Clot潮流店铺：ACU、JUICE，努力成为中国第一潮牌!EDISON近两年创办了自己的服装品牌CLOT,并自己参与服装的设计、用料等 各个方面,成为中国第一潮牌,并在世界上都有一定的影力.CLOT是一个LIFESTYLE的公司，创作服装，包括CLOT品牌服装以及在香港的 JUICE店铺、策划PARTY、帮助香港一些公司做consultant，例如NIKE、PEPSI…、更包括CLOT自己的音乐!现成员包括：陈冠 希、MC仁、陈奂仁、DJ Tommy、厨房仔、恭硕良等一起，CLOT是一个FAMILY，是一个不可分开的家庭,而他的店铺JUICE也成为香港游客的一旅游胜地!CLOT也经常会与一些其他大品牌生产合作产品,像LEVI'S,NIKE,PEPSI等品牌!",
    shop:'ACU、JUICE',
    src:'../static/images/madness.jpg'
  },
  asscIntro:{
    name:'assc',
    time:'2003年6月',
    person:'Neek Lurk',
    story:"EDISON陈冠希2003年创办了自己的服装品牌CLOT，在上海,北京,香港等地开有Clot潮流店铺：ACU、JUICE，努力成为中国第一潮牌!EDISON近两年创办了自己的服装品牌CLOT,并自己参与服装的设计、用料等 各个方面,成为中国第一潮牌,并在世界上都有一定的影力.CLOT是一个LIFESTYLE的公司，创作服装，包括CLOT品牌服装以及在香港的 JUICE店铺、策划PARTY、帮助香港一些公司做consultant，例如NIKE、PEPSI…、更包括CLOT自己的音乐!现成员包括：陈冠 希、MC仁、陈奂仁、DJ Tommy、厨房仔、恭硕良等一起，CLOT是一个FAMILY，是一个不可分开的家庭,而他的店铺JUICE也成为香港游客的一旅游胜地!CLOT也经常会与一些其他大品牌生产合作产品,像LEVI'S,NIKE,PEPSI等品牌!",
    shop:'ACU、JUICE',
    src:'../static/images/assc.jpeg'
  },
  bapeIntro:{
    name:'bape',
    time:'2003年6月',
    person:'NIGO',
    story:"EDISON陈冠希2003年创办了自己的服装品牌CLOT，在上海,北京,香港等地开有Clot潮流店铺：ACU、JUICE，努力成为中国第一潮牌!EDISON近两年创办了自己的服装品牌CLOT,并自己参与服装的设计、用料等 各个方面,成为中国第一潮牌,并在世界上都有一定的影力.CLOT是一个LIFESTYLE的公司，创作服装，包括CLOT品牌服装以及在香港的 JUICE店铺、策划PARTY、帮助香港一些公司做consultant，例如NIKE、PEPSI…、更包括CLOT自己的音乐!现成员包括：陈冠 希、MC仁、陈奂仁、DJ Tommy、厨房仔、恭硕良等一起，CLOT是一个FAMILY，是一个不可分开的家庭,而他的店铺JUICE也成为香港游客的一旅游胜地!CLOT也经常会与一些其他大品牌生产合作产品,像LEVI'S,NIKE,PEPSI等品牌!",
    shop:'ACU、JUICE',
    src:'../static/images/bape.jpg'
  },
}
const mutations={
  CHANGE_NOWBRAND(state,type){
    state.nowbrand=type+'Intro'
  },

};
const actions={
  changeNowbrand({commit},type){
    commit('CHANGE_NOWBRAND',type)
  },
}
const getters={
  getIntro:function(state){
    return state[state.nowbrand];
  },
}
export default({
  state,
  getters,
  mutations,
  actions
})

