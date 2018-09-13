import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router'
import axios from 'axios'
import {store} from './store/store.js'

Vue.use(VueRouter)

//配置默认根路径
axios.defaults.baseURL = 'http://localhost:8000/'

//配置Vue原型（在任何组件都可以使用）
Vue.prototype.http = axios

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* //全局守卫
router.beforeEach((to,from,next) => {
  //判断store.gettes.isLogin==false
  if(to.path == '/login' || to.path == '/register') {
    next();
  }else{
    alert("请先登录！");
    next('/login');
  }
}) */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
