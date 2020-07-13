<template>
  <div class="box">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <img :src="item.pic" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab title="商品详情">
          <p v-html="content"></p>
        </van-tab>
        <van-tab title="商品评价">内容 2</van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="danger" text="立即购买"/>
    </van-goods-action>
   
    <div class="arrow">
      <van-icon name="arrow-left" size="25" color="red" @click="back" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pid: 0,
      banners: [],
      active: 0,
      content: ""
    };
  },

  mounted() {
    this.pid = this.$route.params.id;
    this.shopAjax();
  },
  methods: {
    shopAjax() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/detail",
        params: {
          id: this.pid
        }
      }).then(res => {
        this.banners = res.data.pics;
        this.content = res.data.content;
      });
    },
    back() {
      this.$router.go(-1);
    }
  },
  components: {},
  computed: {}
};
</script>
<style lang="scss">
.box {
  width: 100%;
  background: #f0f0f0;
  img {
    width: 100%;
  }
}
.tab {
  width: 100%;
  p {
    width: 100% !important;
    padding: 0.1rem;
    box-sizing: border-box;
    img {
      width: 100% !important;
    }
  }
}
.arrow {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #f0f0f0;
  position: fixed;
  left: 0.2rem;
  top: 0.2rem;
  text-align: center;
  line-height: 0.5rem;
  z-index: 12;
}
</style>