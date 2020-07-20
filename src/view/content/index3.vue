<template>
  <div>

    <van-nav-bar title="我的购物车" left-arrow @click-left="back" />
    <div class="item" v-for="(item,index) in cartList" :key="index">
      <van-checkbox v-model="item.checked"/>
      <van-card class="cart" :price="item.price" :title="item.name" :thumb="item.pic">
        <template #num>
          <van-stepper v-model="item.nums"></van-stepper>
        </template>
      </van-card>
    </div>

    <van-submit-bar :price="totalAmounts" button-text="提交订单" @submit="submitOrder">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      cartList:[],
    };
  },

  mounted() {
    this.cartList = this.$store.state.cartList
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    submitOrder(){
        this.$toast.loading({
            // duration:0,
            message:"商品准备中",
            overlay:true
        })
        this.$store.commit("setOrderList")
        setTimeout(() => {
            this.$router.push("/order")
        }, 3000);
    }
  },
  components: {

  },
  computed: {
      totalAmounts(){
          let amounts = 0
          this.cartList.forEach(item=>{
              if(item.checked == true){
                amounts += item.nums*item.price
              }
          })
          return amounts * 100
      }
  },
  watch:{
     cartList:{
         handler(value){
             this.$store.commit("addCart",value);
             this.$store.commit("countCarts")
             let arr = value.filter(item=>{
                 return item.checked == true
             })
             if(value.length == arr.length){
                 this.checked = true
             }else{
                 this.checked = false
             }
         },
         deep:true
     }
  },

};
</script>
<style scoped>
.item {
  display: flex;
  padding: 0.1rem;
  box-sizing: border-box;
}
.cart {
  flex: 1;
}
</style>