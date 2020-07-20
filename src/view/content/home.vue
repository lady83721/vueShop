<template>
  <div class="app">
    <div class="boxs">
      <router-view />
    </div>

    <van-tabbar router class="ul" v-model="active">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/index2" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/index3" icon="shop-o" :badge="this.$store.state.nums">购物车</van-tabbar-item>
      <van-tabbar-item to="/index4" icon="user-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  mounted() {},
  methods: {},
  components: {},
  computed: {}
};
</script>
<style scoped>
.app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>