import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'

// import axios from 'axios';
import axios from './utils/request.js';
import storage from './utils/storage.js';
import "@/assets/style/reset.css";
Vue.prototype.$axios = axios

// 引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

// 全局路由守卫 (hasOwnProperty【只判断自身属性】   或  in 判断数据类型)
router.beforeEach((to, from, next) => {
  //  判断
  if (to.hasOwnProperty("meta")) {
      document.title = to.meta.title;
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
