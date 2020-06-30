<template>
  <div>
    <van-nav-bar title="用户登陆" left-arrow @click-left="back"/>
    <div id="login">
      <van-field class="inp" placeholder="用户" right-icon="user-o" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field class="inp" placeholder="手机号" right-icon="graphic" />
      <van-field class="inp" placeholder="手机号" right-icon="graphic" />

      <van-button type="info" block class="btn">立即登陆</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},
  methods: {
      back(){
          console.log(111)
          this.$router.push({
              path:"/shop/user"
          })
      }
  },
  components: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
#login{
     width: 90%;
     margin: .2rem auto;
}
.inp{
    border: solid 1px #dfdfdf;
    margin-bottom: .3rem;
    border-radius: .1rem;
}
</style>