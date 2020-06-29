import Vue from 'vue'
import App from './App'
import router from './router'
import Store from './store/index.js'

// import axios from 'axios';
import axios from './utils/request.js';
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Store,
  router,
  render: h => h(App)
})
