<template>
  <div>
    <van-nav-bar title="专栏详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul class="zl">
      <router-link
        :to="'/special/small-special/'+item.id"
        tag="li"
        v-for="(item) in zlList"
        :key="item.id"
      >
        <img :src="item.pic" alt />
        <div class="txt">
          <p v-html="item.title"></p>
          <p v-html="item.descript" class="p"></p>
          <!-- <p>
            <van-button round class="btn" style="color:black;background:#fff;">查看详情</van-button>
          </p> -->
          <p>查看详情</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zlList: []
    };
  },

  mounted() {
    this.specialAjax();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    specialAjax() {
      this.$axios({
        url: "https://api.it120.cc/small4/cms/news/list"
      }).then(res => {
        this.zlList = res.data;
      });
    }
  },
  components: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
ul {
  width: 100%;
  li {
    width: 100%;
    padding: 0.2rem;
    height: 3.5rem;
    position: relative;
    img {
      width: 100%;
      height: 3.5rem;
    }
    div {
      margin: 0 auto;
      width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: absolute;
      top: 1rem;
      bottom: 0.5rem;
      //   left: 5%;
      // right: 0.5;
      text-align: center;
      color: rgb(255, 249, 249);

      p {
        width: 60%;
        margin: 0 auto;
        line-height: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:nth-type-of(2) {
        line-height: 0.4rem;
      }

      //   .p {
      //     //   width: 80%;
      //     //   margin: 0 auto;

      //     //
      //   }
    }
  }
}
.van-button::before {
  width: 50%;
  height: 0.6rem;
  line-height: 0.6rem;
  //   color: black;
  //   background: #f0f0f0;/
}
</style>