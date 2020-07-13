<template>
  <div>
    <van-search placeholder="输入搜索的商品" @focus="search"/>
    <van-tree-select
      height="55vw"
      :items="items"
      :main-active-index.sync="activeIndex"
    >
      <template #content>
        <div class="cate-item">
          <div class="item" v-for="(item) in subCate" :key="item.id" @click="tab(item)">
            <img :src="item.icon" alt />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [{ text: "所有分类" }],
      cateId: [0],
      cateList: []
    };
  },

  mounted() {
    this.tabList();
  },
  methods: {
    tabList() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/category/all"
      }).then(res => {
        this.cateList = res.data;
        console.log(res.data);
        res.data.forEach(item => {
          if (item.pid == 0) {
            this.items.push({ text: item.name });
            this.cateId.push(item.id);
          }
        });
      });
    },
    search(){
      this.$router.push("/search")
    },
    tab(item) {
        console.log(item)
        this.$router.push({
            path:"/item",
            query:{
                id:item.id
            }
        })
    }
  },
  components: {},
  computed: {
    subCate() {
      let arr = this.cateList;
      if (this.activeIndex == 0) {
        return arr;
      }
      return arr.filter(item => {
        return (item.pid == this.cateId[this.activeIndex]);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.cate-item {
  max-height: 90%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  /* justify-content: space-around; */
  /* align-items: center; */
}
.item {
  width: 30%;
  margin: 1%;
}
.item img {
  width: 90%;
}
.item p {
  line-height: 0.6rem;
  width: 90%;
  text-align: center;
}
</style>
