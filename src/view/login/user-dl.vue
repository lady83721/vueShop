<template>
  <div>
    <van-nav-bar title="用户登陆" left-arrow />
    <div id="login">
      <van-form>
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field class="inp" v-model="mobile" placeholder="手机号" right-icon="graphic" />
        <van-field
          :type="hidePwd?'password':'text'"
          :right-icon="hidePwd?'closed-eye':'eye-o'"
          @click="hidePwd=!hidePwd"
          placeholder="密码"
          v-model="pwd"
          class="inp"
        ></van-field>
        <van-button type="info" block class="btn" @click="checkLogin"> 立即登陆</van-button>
        <p id="a">
          <router-link to="/shop/user">没有账号?点击注册···</router-link>
        </p>
      </van-form>
    </div>
  </div>
</template>

<script>
import "@/assets/style/login.css";
import storage from "@/utils/storage";
export default {
  data() {
    return {
      hidePwd: false,
      mobile: "",
      pwd: ""
    };
  },

  mounted() {},
  // 组件守卫
  beforeRouteEnter(to, from, next) {
    // ...获取用户本地存储token值
    let data = storage.get("user", true);
    if (data != null) {
      next("/");
    } else {
      next();
    }
    // console.log(to,from)
    // next()
  },
  methods: {
    checkLogin() {
      if (this.mobile == "" || this.pwd == "") {
        this.$toast.fail("手机号或密码不能为空");
      }
       //   手机号验证
      var reg = /^1[34578]\d{9}$/;
      if (!reg.test(this.mobile)) {
        this.$toast.fail("手机号不合法");
        return false;
      }
      this.login();

    },
    login() {
      this.$axios({
        url:
          "https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",
        params: {
          mobile: this.mobile,
          pwd: this.pwd
        }
      }).then(res => {
        console.log(res)
        if (res.code != 0) {
          this.$toast.fail(res.msg);
          return false;
        }
        let user = new Object();
        user.uid = res.data.uid;
        user.token = res.data.token;
        user.account = this.mobile;
        storage.set("user", user,true);
        this.$toast.fail("登陆成功");
      });
    }
  },
  components: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
#login {
  width: 90%;
  margin: 0.2rem auto;
}
.inp {
  border: solid 1px #dfdfdf;
  margin-bottom: 0.3rem;
  border-radius: 0.1rem;
}
</style>