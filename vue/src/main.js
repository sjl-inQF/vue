import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//这是经过优化的
import "./assets/js/font"
//引入公共的样式,全局暴露
import "./assets/css/base.css"
import "./assets/css/public.css"
//引入路由模块
import router from "./plugins/router"
//引入axios
import axios from "./plugins/axios"


//注册服务器地址
Vue.prototype.baseUrl="http://localhost:3000"

let vm = new Vue({
  data:{
    bNav:true,
    bFoot:true,
    bLoading:true
  },
  render: h => h(App),
  router
}).$mount('#app')

axios.setupInterceptors(vm);
