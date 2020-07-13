<template>
  <div>
    <!-- 头部轮播 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" backgroundcolor="white">
        <van-swipe-item v-for="(item,index) in swipeList" :key="index">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>
      <!-- 礼券 -->
      <ul class="uls">
        <li>
          <p>
            <van-icon name="like" size=".6rem" color="red" />
          </p>
          <p>签到</p>
        </li>
        <li>
          <p>
            <van-icon name="point-gift" size=".6rem" color="red" />
          </p>
          <p>礼券</p>
        </li>
        <router-link to="/cuts" tag="li">
          <p>
            <van-icon name="send-gift" size=".6rem" color="red" />
          </p>
          <p>砍价</p>
        </router-link>

        <router-link to="/special" tag="li">
          <p>
            <van-icon name="comment" size=".6rem" color="red" />
          </p>
          <p>专栏</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["swipeList", "arrs"],

  mounted() {
  },
  methods: {
   
  },
  components: {},
  computed: {}
};
</script>
<style scoped>
</style>