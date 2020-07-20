import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

import VuexPer from "vuex-persist"

const vuexLocal = new VuexPer({
  storage: window.localStorage,
  key: "vuex1"
})


const store = new Vuex.Store({
  state: {
    loading: false,
    // activeIndex:0,
    nums: 0,
    cartList: [],
    orderList: [],
    orderInfo: [],

  },
  mutations: {
    setLoading(state, bool) {
      state.loading = bool
    },
    addCart(state, payload) {
      console.log(payload);
      state.cartList = payload;
    },
    countCarts(state) {
      let tmp = 0
      state.cartList.forEach(item => {
        tmp += item.nums
      })
      state.nums = tmp
    },
    setOrderList(state) {
      state.orderList = state.cartList.filter(item => {
        return item.checked == true
      })
    },
    setOrderInfo(state, payload) {
      console.log(payload);
      state.orderInfo = payload;
    },
    clear(state) {
      state.cartList = [];
      state.nums = 0;
      state.orderInfo = [];
    }
  },
  actions: {},
  getters: {
    totalAmounts(state) {
      let amount = 0
      state.orderList.forEach(item => {
        amount += item.price * item.nums
      })
      return amount
    }
  },
  plugins: [vuexLocal.plugin]
})
export default store;
