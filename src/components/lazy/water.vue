<template>
  <div class="box">
    <div class="item" v-for="(item,index) in goodsList" :key="index"> 
        <img :src="item.pic" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        goodsList:[]
    };
  },

  mounted() {
      this.getGoods()
  },
  methods: {
    getGoods() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          console.log(res);
          this.goodsList = res.data;
          this.$nextTick(() => {
            this.waterfall();
          });
        });
    },
    waterfall(){
        let items = document.querySelectorAll(".item")
        let bodyWidth = document.documentElement.clientWidth;
        let itemWidth = items[0].clientWidth
        let columns = parseInt(bodyWidth/itemWidth)
        let columnArr = [];
        let space =  10;
        for(let i=0;i<items.length;i++){
             if(i<columns){
                 items[i].style.top = "0px"
                 items[i].style.left = (itemWidth+space)*i+"px"
                 columnArr.push(items[i].clientHeight)
             }else{
                 let minIndex = 0
                 let minHeight = columnArr[0]
                 for(var m =0;m<columnArr.length;m++){
                     if(columnArr[m]<minHeight){
                         minHeight = columnArr[m];
                         minIndex = m
                     }
                 }
                 items[i].style.left = items[minIndex].offsetLeft+"px"
                 items[i].style.top = minHeight+space+"px"
                 columnArr[minIndex] = minHeight + items[i].clientHeight+space
             }
        }
    }
  },
  components: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    position: relative;
    .item{
        position: absolute;
        width: 30%;
        img{
            width: 100%;
        }
    }
}
</style>