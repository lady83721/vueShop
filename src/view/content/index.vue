<template>
  <div class="box">
    <banner :swipeList="swipeList" :arrs="arrs"></banner>
    <div class="l">
      <h4 @click="onChange">砍价列表→ →</h4>
      <!-- 砍价 -->
      <cut :cutList="cutList"></cut>
    </div>
    <div>
      <h4>精选专题→ →</h4>
      <!-- 精选轮播 -->
      <good :newList="newList"></good>
    </div>

    <!--  -->
    <div class="l">
      <h4>人气推荐 →</h4>
      <user :shopList="shopList"></user>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/content/banner"
import Cut from "@/components/content/cut"
import Good from "@/components/content/good"
import User from "@/components/content/user"
export default {
  data() {
    return {
      swipeList: [],
      arrs: [
        { like: "like", title: "签到" },
        { like: "point-gift", title: "礼券" },
        { like: "send-gift", title: "砍价" },
        { like: "comment", title: "卡包" }
      ],
      cutList: [],
      newList: [],
      shopList: []
    };
  },

  mounted() {
    this.swipeAjax();
    this.cutAjax();
    this.newAjax();
    this.shopAjax();
  },
  methods: {
    onChange(){
        this.$router.push({
          path:"/cuts"
        })
    },
    swipeAjax() {
      this.$axios({
        url: "https://api.it120.cc/small4/banner/list"
      }).then(res => {
        if (res.code == 0) {
          this.swipeList = res.data;
        }
      });
    },
    cutAjax() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/kanjia/list"
      }).then(res => {
        if (res.code == 0) {
          let arrList = Object.keys(res.data.goodsMap).splice(-3);
          let tmp = [];
          arrList.forEach(item => {
            tmp.push(res.data.goodsMap[item]);
          });
          // console.log(tmp);
          this.cutList = tmp;
        }
      });
    },
    newAjax() {
      this.$axios({
        url: "https://api.it120.cc/small4/cms/news/list"
      }).then(res => {
        if (res.code == 0) {
          this.newList = res.data;
          // console.log(res.data);
        }
      });
    },
    // 获取商品
    shopAjax() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/list"
      }).then(res => {
        if (res.code == 0) {
          // this.shopList = res.data;
          let arr = Object.keys(res.data).splice(-8)
          let arrs =[]
          arr.forEach(item=>{
             arrs.push(res.data[item])
          })
          this.shopList = arrs
          // console.log(res.data);/
        }
      });
    }
  },
  components: {
    Banner,
    Cut,
    Good,
    User
  },
  computed: {}
};
</script>

<style scoped>
.l{
  margin-top: .2rem;
}
</style>