<template>
  <div>
    <van-nav-bar title="确认订单" left-arrow @click-left="back" />
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
    <hr />

    <div class="address">
      <div>
        <van-icon name="gold-coin-o" />
      </div>
      <div>
        <p>订单编号：{{ this.$store.state.orderInfo.orderNumber }}</p>
        <p>订单总额：￥{{ this.$store.state.orderInfo.amount }}</p>
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
      <div class="bottom">
        <van-button type="danger" block @click="doPay">立即支付</van-button>
      </div>
    </div>
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

      this.$axios({
        url: "https://api.it120.cc/small4/user/shipping-address/default",
        params: {
          token: data.token
        }
      }).then(res => {
        this.addOrder = res.data;
      });
    },
    back() {
      this.$router.go(-1);
    },
    doPay() {
      this.$toast.success("支付成功");
      this.$store.commit("clear"); //清空所有的数据
      this.$router.push("/index2");
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
.bottom{
      width: 100%;
      position:fixed;
      bottom: 0px;
  }
</style>