<template>
  <div>
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <item :shopList="shopList" v-if="shopList.length>0"></item>
    <van-empty description="描述文字" v-else/>
  </div>
</template>

<script>
import item from "@/components/content/user";
export default {
  data() {
    return {
      shopList: []
    };
  },

  mounted() {
    this.tab();
  },
  methods: {
    tab() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/list"
      }).then(res => {
        if (res.code == 0) {
          let arr = res.data;
          console.log(res.data);
          this.shopList = arr.filter(item => {
            return item.categoryId == this.$route.query.id;
          });
        }
      });
    },
    onClickLeft(){
        this.$router.push({
            path:"/index2"
        })
    }
  },
  components: {
    item
  },
  computed: {}
};
</script>
<style scoped>
</style>