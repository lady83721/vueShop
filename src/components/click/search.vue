<template>
  <div>
    <van-search placeholder="输入搜索的商品" v-model="keywords" @keydown.enter="setHistroy">
      <template #left>
           <van-icon name="arrow-left" size="25" color="aqua" @click="goBack"/>
      </template>
    </van-search>
    <div class="histroy" v-show="isShow">
      <p>
        历史记录
        <van-icon name="delete" @click="removeHis" />
      </p>
      <ul class="items">
        <li class="h-item" v-for="(item,index) in hisList" :key="index">{{ item }}</li>
      </ul>
    </div>
    <user :shopList="getGoods" v-show="!isShow"></user>
  </div>
</template>

<script>
import user from "@/components/content/user";
import storage from "@/utils/storage";
export default {
  data() {
    return {
      cateList: [],
      keywords: "",
      isShow: true,
      hisList: []
    };
  },

  mounted() {
    this.searchList();
    this.getHistroy();
    // this.setHistroy()
  },
  methods: {
    searchList() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/list"
      }).then(res => {
        this.cateList = res.data;
      });
    },
    getHistroy() {
      let data = storage.get("yx-history", true);
      this.hisList = data == null ? [] : data;
    },
    setHistroy() {
      if (this.keywords == "") {
        return false;
      }
      this.hisList.unshift(this.keywords);
      if (this.hisList.length > 8) {
        this.hisList.pop();
      }
      storage.set("yx-history", this.hisList, true);
    },
    removeHis() {
      storage.remove("yx-history");
      this.getHistroy();
    },
    goBack(){
        this.$router.go(-1)
    }
  },
  components: {
    user
  },
  computed: {
    getGoods() {
      if (this.keywords == "") {
        this.isShow = true;
        return [];
      }
      this.isShow = false;
      return this.cateList.filter(item => {
        return item.name.indexOf(this.keywords) > -1;
      });
    }
  }
};
</script>
<style scoped>
.histroy {
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
}
p {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
  line-height: 0.4rem;
  margin-bottom: 0.2rem;
}
.items {
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
.items li {
  margin: 0.1rem;
  padding: 0.2rem;
  box-sizing: border-box;
  width: 20%;
  text-align: center;
  /* line-height: .6rem;/ */
  border-radius: 0.1rem;
  background: #f0f0f0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>