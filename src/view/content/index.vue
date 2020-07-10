<template>
  <div class="box">
    <!-- 头部轮播 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" backgroundcolor="white">
        <van-swipe-item v-for="(item,index) in swipeList" :key="index">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>
      <!-- 礼券 -->
      <ul class="uls">
        <li v-for="(item,index) in arrs" :key="index">
          <p>
            <van-icon :name="item.like" size=".5rem" color="red" />
          </p>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>

    <h4>砍价列表→ →</h4>
    <!-- 砍价 -->
    <div class="cut">
      <dl v-for="(item) in cutList" :key="item.id">
        <dt>
          <img :src="item.pic" alt />
        </dt>
        <dd>
          <div class="top">
            <p>{{ item.name }}</p>
            <p>{{ item.characteristic }}</p>
          </div>

          <!-- 价格销量 -->
          <div class="price">
            <span>
              <p style="color:red">￥{{ item.minPrice }}</p>
              <p>低价</p>
            </span>
            <span>
              <p>￥{{ item.originalPrice }}</p>
              <p>原价</p>
            </span>
            <span>
              <p>{{ item.stores }}</p>
              <p>限量</p>
            </span>
          </div>
          <!-- 价格销量结束 -->
        </dd>
        <!--  -->
      </dl>
      <!-- 一条数据渲染循环 -->
    </div>
    <!--  -->

    <h4>精选专题→ →</h4>
    <!-- 精选轮播 -->
    <van-swipe
      backgroundcolor="white"
      :loop="false"
      :width="300"
      :height="150"
      class="swips"
      :show-indicators="false"
    >
      <van-swipe-item v-for="(item) in newList" :key="item.id" style="margin:0 10px;">
        <img :src="item.pic" alt />
        <p>{{ item.title }}</p>
        <p>{{ item.descript }}</p>
      </van-swipe-item>
    </van-swipe>

    <!--  -->
    <h4>人气推荐 →</h4>
    <div class="shop">
      <ul>
        <li v-for="(item) in shopList" :key="item.id">
          <img :src="item.pic" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeList: [],
      arrs: [
        { like: "like", title: "签到" },
        { like: "point-gift", title: "礼券" },
        { like: "send-gift", title: "礼物" },
        { like: "comment", title: "卡包" }
      ],
      cutList: [],
      newList: [],
      shopList:[]
    };
  },

  mounted() {
    this.swipeAjax();
    this.cutAjax();
    this.newAjax();
    this.shopAjax();
    
  },
  methods: {
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
          console.log(res.data);
        }
      });
    },
     shopAjax() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/list"
      }).then(res => {
        if (res.code == 0) {
          this.shopList = res.data;
          console.log(res.data);
        }
      });
     }
  },
  components: {},
  computed: {}
}
</script>

<style scoped>
img {
  width: 100%;
  height: 6rem;
}
.banner {
  width: 100%;
  position: relative;
}
h4 {
  width: 100%;
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #fff;
  text-align: center;
  border-bottom: 1px solid #dfdfdf;
}
.swips {
  background: #fff;
  width: 100%;
  height: 4.6rem;
}
.swips p {
  width: 80%;
  font-size: 0.2rem;
  overflow: hidden;
  line-height: 0.3rem;
}
.swips img {
  height: 100%;
  width: 100%;
  border-radius: 0.2rem;
}
.shop{
  width: 100%;
}
.shop ul{
  width: 100%;
    height: 4rem;
  display: flex;
  flex-wrap:  wrap;
  justify-content: space-around;
}
.shop ul li{
  width: 45%;
  height: 4rem;
}
</style>