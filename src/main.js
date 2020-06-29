import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'

// import axios from 'axios';
import axios from './utils/request.js';
import storage from './utils/storage.js';
Vue.prototype.$axios = axios

// 引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
