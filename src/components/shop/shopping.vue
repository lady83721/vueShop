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

    <!-- 购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        @click="shopClick"
        :badge="this.$store.state.nums"
        text="购物车"
      />
      <van-goods-action-icon icon="star-o" text="收藏" />
      <van-goods-action-button type="warning" text="立即购买" />
      <van-goods-action-button type="danger" text="加入购物车" @click="show=true" />
    </van-goods-action>
    <van-sku
      v-model="show"
      :sku="sku"
      :custom-stepper-config="customStepperConfig"
      @add-cart="addCart"
      :goods="goods"
      @sku-selected="selectedSku"
    />

    <div class="arrow" @click="back">
      <van-icon name="arrow-left" size="25" color="red" />
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
      content: null,
      show: false,
      goods: [],
      sku: {
        tree: [
          {
            k: "颜色",
            k_s: "c1",
            v: [
              { id: 1, name: "白色" },
              { id: 2, name: "红色" },
              { id: 3, name: "绿色" }
            ]
          }
        ],
        list: [
          { id: 1000, c1: 1, price: 2000, stock_num: 12 },
          { id: 1000, c1: 2, price: 3000, stock_num: 15 },
          { id: 1000, c1: 3, price: 5000, stock_num: 18 }
        ],
        price: 1000,
        stock_num: 100
      },
      goods: {
        picture: ""
      },
      //自定义步进器
      customStepperConfig: {
        // 步进器变化的回调
        handleStepperChange: currentValue => {
          console.log(currentValue);
          //把点击步进器的值，给nums，记录数量
          this.nums = currentValue;
        }
      },
      nums: 1,
      properties:"",
    };
  },

  mounted() {
    this.pid = this.$route.params.id;
    this.shopAjax();
    this.$store.commit("countCarts");
  },
  methods: {
    shopAjax() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/detail",
        params: {
          id: this.pid
        }
      }).then(res => {
        // console.log(res)
        this.banners = res.data.pics;
        this.content = res.data.content;
        this.goods = res.data.basicInfo;
        this.setSku(res.data.properties);
        this.goods.picture = this.banners[0].pic;
      });
    },
    shopClick() {
      this.$router.push({
        path: "/index3"
      });
    },
    setSku(property) {
      if (property == undefined) {
        return false;
      }

      let tree = [];
      let list = [];
      property.forEach(el => {
        let obj = new Object();
        obj.c = el.name;
        obj.c_s = `c_${el.id}`;
        obj.v = el.childsCurGoods;
        tree.push(obj);
        // console.log(obj)
      });

      tree.forEach(item => {
        item.v.forEach(ele => {
          console.log(ele);
          let objs = new Object();
          // objs.id = item.k_s.split("_")[1];
          objs[item.k_s] = ele.id;
          objs.price = 1000;
          objs.stock_num = 120;
          list.push(objs);
          console.log(list);
        });
      });

      this.sku.tree = tree;
      this.sku.list = list;
    },
    selectedSku(data){
      console.log(data);
      this.properties = `${data.skuValue.propertyId}:${data.skuValue.id}`;
    },
    addCart() {
      console.log(111);
      let data = localStorage.getItem("user");
      if (data == null) {
        this.$toast.fail("请先登录");
        this.$router.push("/shop/deng");
        return false;
      }

      let cartList = this.$store.state.cartList;
      let index = cartList.findIndex(item => {
        return item.good_id == this.pid;
      });
      console.log(index);
      // return false;
      if (index == -1) {
        let object = new Object();
        object.good_id = this.pid;
        object.name = this.goods.name;
        object.price = this.goods.originalPrice;
        object.nums = this.nums;
        object.properties = this.properties;
        object.checked = true;
        cartList.push(object);
        object.pic = this.goods.picture;
      } else {
        cartList[index].nums += this.nums;
      }
      this.show = false;
      this.$store.commit("addCart", cartList);
      this.$store.commit("countCarts");
      this.$toast.success("加入购物车成功");
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
    padding: 0.15rem;
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
.van-button {
  width: 40%;
}
</style>