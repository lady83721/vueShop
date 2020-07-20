<template>
  <div>
    <van-nav-bar title="订单页" left-arrow @click-left="back" />
    <div class="address">
      <div>
        <van-icon name="location-o" />
      </div>
      <div class="add">
        <p>{{addOrder.linkMan}}-{{addOrder.mobile}}</p>
        <p>{{addOrder.address}}</p>
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-card
      class="cart"
      v-for="(item,index) in this.$store.state.orderList"
      :key="index"
      :price="item.price"
      :num="item.nums"
      :title="item.name"
      :thumb="item.pic"
    ></van-card>
    <van-submit-bar
      :price="this.$store.getters.totalAmounts*100"
      @submit="createOrder"
      button-text="确认订单"
    />
  </div>
</template>

<script>
import storage from "@/utils/storage";
export default {
  data() {
    return {
      addOrder: []
    };
  },

  mounted() {
    this.getAddress();
  },
  methods: {
    getAddress() {
      let data = storage.get("user", true);
      if (data == null) {
        this.$toast.fail("请先登录");
        this.$router.push("/shop/deng");
        return false;
      }
      this.$axios({
        url: "https://api.it120.cc/small4/user/shipping-address/default",
        params: {
          token: data.token
        }
      }).then(res => {
        if (res.code != 0) {
          this.$toast.fail("请先登录");
          this.$router.push("/shop/deng");
          return false;
        }
        this.addOrder = res.data;
      });
    },
    back() {
      this.$router.go(-1);
    },
    createOrder() {
      let data = storage.get("user", true);
      let arr = [];
      console.log(this.$store.state.orderList)
      this.$store.state.orderList.forEach(item => {
        let object = new Object();
        object.goodsId = item.good_id;
        object.number = item.nums;
        object.propertyChildIds = item.properties;
        object.logisticsType = 0;
        arr.push(object);
        console.log(111)
      });

      //创建订单的接口数据
      let formdata = new FormData();
      formdata.append("token", data.token);
      formdata.append("goodsJsonStr", JSON.stringify(arr));

      this.$axios
        .post("https://api.it120.cc/small4/order/create", formdata)
        .then(res => {
          this.$toast.loading({
            message: "订单正在努力生成中",
            overlay: true
          });
          console.log(res.data);
          this.$store.commit("setOrderInfo", res.data);
          setTimeout(() => {
            this.$router.push("/orders");
          }, 2000);
        });
    }
  },
  components: {},
  computed: {}
};
</script>
<style scoped>
.address {
  width: 100%;
  height: 1.5rem;
  padding: 0.1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f0f0f0;
}
.add {
  width: 50%;
  display: flex;
  flex-direction: column;
  line-height: 0.5rem;
}
</style>