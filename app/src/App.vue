<!--页面入口文件-->∂
<!--<template></template>标签包裹的内容：这是模板的HTMLDom结构，里边引入了一张图片和<router-view></router-view>标签，<router-view>标签说明使用了路由机制。-->
<template>
  <div id="app" >
    <header>
      <div class="login_top">
        <ul class="login_nav">
          <li><router-link to="/Cart">购物车(0)</router-link></li>
          <li @click="changeLoginway('login')"><router-link to="/login"  class="login">Login</router-link></li>
          <li @click="changeLoginway('register')" ><router-link to="/login"class="register">Register</router-link></li>
        </ul>
      </div>
      <div class="nav">
        <ul class="left_nav">
          <!-- left_navs是通过mapgetters来的数据，在index.js中 -->
          <li :class="{bg:show===left_nav_value}" v-for="left_nav_value in left_navs">
            <router-link :to="'/'+left_nav_value" class="nav_a">{{left_nav_value.toUpperCase()}}</router-link>
          </li>
        </ul>
        <ul class="right_nav">
          <!-- brands是通过mapgetters来的数据，在index.js中 -->
          <li :class="{bg:show===brand.name}" v-for="brand in brands">
            <router-link :to="'/home/'+brand.name" class="nav_a">{{brand.name.toUpperCase()}}</router-link>
          </li>
        </ul>
        <h1 class="theme">
          <router-link to="/home">Xiu</router-link>
        </h1>
      </div>
    </header>
    <section>
      <transition name="display">
        <router-view></router-view>
      </transition>
    </section>
    <footer>
      <strong><a href="https://github.com/UNDERCOVERj/vogue" target="_blank">auther:wangmingyue</a></strong>
      <ul class="bottom">
        <li v-for="item in items" class="items">
          <h1><router-link to='/home'>{{item.title}}</router-link></h1>
          <ul>
            <li v-for="content in item.contents" class="item"><router-link to='/home'>{{content}}</router-link></li>
          </ul>
        </li>
      </ul>
      <p class="payment">
        <span>we accept:</span>
        <img :src="'../static/images/pay_1.jpg'" alt="pay" />
      </p>
    </footer>
    <transition name="scroll">
      <p v-if="scroll" class="scroll" @click="scrolltoTop">
        <img :src="'../static/images/scroll.jpg'" alt="scroll"/>
      </p>
    </transition>

  </div>
</template>
<!--<script></script>标签包括的js内容：你可以在这里些一些页面的动态效果和Vue的逻辑代码。-->
<script>
//  <!--mapGetters 辅助函数仅仅是将 store 中的 getters 映射到局部计算属性-->
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data () {
      return{
        timer:null,
        scroll:false,
        scrollTimer:null
      }
    },
    computed:{
//      使用"..."对象展开符将getters混入computed对象中,getters在获得数据之前进行的一种编辑，相当于对数据的过滤和加工
      ...mapGetters({
        show:'getShow',
        left_navs:'getLeft_nav',
        brands:'getBrands',
        items:'getFootItems',
      })
    },
    methods:{
      ...mapActions(['changeLoginway']),
      changeLoginway(type){
        this.$store.dispatch('changeLoginway',type);
      }
    },

  }
</script>
<!--<style></style>标签包裹的css内容：这里就是你平时写的CSS样式，对页面样子进行装饰用的，需要特别说明的是你可以用<style scoped></style>来声明这些css样式只在本模板中起作用。-->
<style>
  body,form,div,span,ul,ol,li,p,pre,dl,dt,dd,h1,h2,h3,h4,h5,h6,em,a,fieldset,legend,address,label,textarea,select,input,figure,table,th,td,b,i{margin:0;padding:0;}
  fieldset,img{border:0;}
  ul,li{list-style:none;}
  em,i{font-style:normal;}
  table{border-collapse:separate;border-spacing:0;}
  a{text-decoration:none;color: black}
  a:focus,input,button,select,textarea{outline:none;}
  h1,h2,h3,h4,h5,h6{ font-size:100%; font-variant: normal;font-weight: 400}
  body{margin:0px;width: 100% ;font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",FontAwesome,sans-serif;font-size:16px;}
  input{text-shadow: none}
  #app{width:100%;}
  header{height: 120px;min-width: 1150px}
  .login_top{background: #3d444c;height: 50px;line-height: 50px;box-sizing: border-box;}
  .login_nav{float:right;margin-right: 10px;}
  .login_nav li{display: inline-block;}
  .login_nav li a{color:#fff;}
  .login_nav li:nth-child(2){padding-right: 6px;}
  .login_nav .login{cursor: pointer}
  .login_nav .register{cursor: pointer}
  .login_nav .login:hover,.login_nav .register:hover{text-decoration: underline;}
  .left_nav{float:left;margin-left: 15px}
  .left_nav li,.right_nav li{display: inline-block;text-align: center;height: 90px;line-height: 90px;font-size: 20px;font-family: verdana;transition: all .3s ease-in-out;cursor: pointer}
  .left_nav li:hover{background: #00BC9B}
  .right_nav{float:right;margin-right: 15px}
  .right_nav li:hover{background: #00BC9B}
  .nav_a{display: inline-block;height: 90px;padding: 0 15px;}
  .nav{width: 100%;overflow: hidden;}
  header h1{width: 200px;height: 90px;text-align: center;line-height: 90px;font-size: 32px;font-family: verdana;cursor: pointer;transition: all .5s ease;margin: 0 auto}
  header h1:hover{font-size: 48px}
  footer{height: 72px;background: #3d444c;width: 100%;min-width: 1150px;padding-top: 8px;position: relative;color:#a9b8ca;}
  .bg{background: #00BC9B;}
  footer .items{display: inline-block;padding: 0 2px;}
  footer strong {position: absolute;left: 0;top:27.5px;}
  footer strong a{text-decoration: underline;color:#a9b8ca;}
  footer .item a{color:#a9b8ca;font-size: 12px;}
  footer ul{text-align: center;}
  footer h1{text-decoration: underline;}
  footer h1 a{color:#fff}
  footer .item:hover>a{text-decoration: underline;color:#08c;}
  footer .payment{position: absolute;right:0;top: 27.5px}
  footer .payment span{display: inline-block;vertical-align: top;height: 22px;line-height: 22px}
  .scroll{width: 60px;position: fixed;bottom: 90px;right: 0}
  .scroll-enter,.scroll-leave-active{
    opacity: 0
  }
  .scroll-enter-active,.scroll-leave{
    transition: all 1s ease;
    -moz-transition: all 1s ease;/* Firefox 4 */
    -webkit-transition: all 1s ease; /* Safari 和 Chrome */
    -o-transition: all 1s ease;  /* Opera */
  }
  .display-enter,.display-leave-active{
    opacity: 0
  }
  .display-enter-active,.display-leave{
    transition: all .5s ease;
    -moz-transition: all .5s ease;/* Firefox 4 */
    -webkit-transition: all .5s ease; /* Safari 和 Chrome */
    -o-transition: all .5s ease;  /* Opera */
  }

</style>

