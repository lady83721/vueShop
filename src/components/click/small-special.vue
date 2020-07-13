<template>
  <div>
    <van-nav-bar title="专栏详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="detail" style="font-size:.3rem;">
      <p v-html="pidTxt.title"></p>
      <p>
        <img :src="pidTxt.pic" alt />
      </p>
      <p v-html="pidTxt.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pid: 0,
      pidTxt: {}
    };
  },

  mounted() {
    this.pid = this.$route.params.id;
    this.specialAjax();
  },
  methods: {
    specialAjax() {
      this.$axios({
        url: "https://api.it120.cc/small4/cms/news/detail",
        methods: "post",
        params: {
          id: this.pid
        }
      }).then(res => {
        console.log(res);
        this.pidTxt = res.data;
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
.detail {
  text-align: center;
  width: 100%;
  font-size: 0.3rem;
  padding: 0.1rem;
  box-sizing: border-box;
  p {
    line-height: 0.6rem;
    font-size: 0.3rem;
    img {
      width: 90%;
      height: 3rem;
    }
  }
}
</style>
