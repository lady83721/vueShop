<template>
  <div>
    <van-nav-bar title="新用户注册" left-arrow />
    <div id="login">
      <van-form>
        <!-- 用户 -->
        <van-field v-model="user" class="inp" placeholder="用户" right-icon="user-o" />
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field v-model="tel" class="inp" placeholder="手机号" right-icon="graphic" />
        <!-- 输入密码 -->
        <van-field
          class="inp"
          v-model="password"
          placeholder="密码"
          :right-icon="hide?'closed-eye':'eye-o'"
          @click-right-icon="hide=!hide"
          :type="hide?'password':'text'"
        />
        <!-- 确认密码 -->
        <van-field
          class="inp"
          v-model="passw"
          placeholder="确认密码"
          :right-icon="hides?'closed-eye':'eye-o'"
          @click-right-icon="hides=!hides"
          :type="hides?'password':'text'"
        />
        <!-- 图形验证码 -->
        <van-field class="inp" placeholder="图形验证码" v-model="picCode">
          <template #right-icon>
            <img :src="imgUrl" alt @click="createImg" />
            <!-- <van-button plain size="small">获取验证码</van-button> -->
          </template>
        </van-field>
        <!-- 城市 -->
        <van-field
          v-model="city"
          placeholder="城市"
          class="inp"
          right-icon="location-o"
          @click-right-icon="cityShow=true"
        />
        <!-- 城市选择 -->
        <van-popup v-model="cityShow" position="bottom">
          <van-area title="标题" :area-list="areaList" @cancel="cityShow=false" @confirm="seleCity" />
        </van-popup>
        <!-- 手机验证码 -->
        <van-field class="inp" placeholder="手机验证码" v-model="code">
          <template #button>
            <van-button plain size="small" :disabled="btnDis" @click="sendCode">{{ msg }}</van-button>
          </template>
        </van-field>
        <van-button type="info" block class="btn" @click="checkForm">立即注册</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import "../../assets/style/reset.css";
import areaList from "@/utils/area";
export default {
  data() {
    return {
      user: "", //用户
      tel: "", //手机号
      password: "", //密码
      passw: "", //确认密码
      picCode: "", //图形验证
      city: "", //城市
      code: "", //手机验证码

      hide: true, //密码显示
      hides: true, //确认密码显示

      imgUrl: "",  //图形验证码图片地址
      picKey: "",  //图片值

      cityShow: false,  //城市选项出现
      areaList: areaList,  //获取城市
      city: "",   //城市
      province: "", //省份
      msg: "发送验证码",
      btnDis: false  //发送验证码按钮
    };
  },

  mounted() {
    this.createImg();
  },
  methods: {
    checkForm() {
      //   验证表单信息不为空
      if (this.user == "" || this.password == "") {
        this.$toast.fail("信息不能为空");
        return false;
      }
      //   手机号验证
      var reg = /^1[34578]\d{9}$/;
      if (!reg.test(this.tel)) {
        this.$toast.fail("手机号不合法");
        return false;
      }
      // 密码
      if (this.passw != this.password) {
        this.$toast.fail("密码不一致");
      }

       this.$axios({
        url: "https://api.it120.cc/small4/user/m/register",
        params: {
          mobile: this.tel,
          pwd:this.password,
          code:this.code,
          nick:this.user,
          province:this.province,
          city:this.city
        }
      }).then(res => {
        console.log(res);
        this.$toast.fail("注册成功");
        this.$router.push({
            path:"/shop/deng"
        })
        // if (res.code != 0) {
        //   this.$toast.fail();
        //   return false;
        // }
      });
    },
    //   生成图形验证码
    createImg() {
      this.picKey = new Date().getTime();
      let apiUrl = "https://api.it120.cc/small4/verification/pic/get";
      this.imgUrl = `${apiUrl}?key=${this.picKey}`;
    },
    seleCity(arr) {
      this.cityShow = false;
      let a = arr.map(item => {
        return item.name;
      });
      console.log(a);
    //   this.province = a[0];
      // this.province = a[0]
      // this.province = a[0]
      this.city = a.join(" ");
    },
    countSeconds() {
      this.btnDis = true;
      let timeout = 60;
      let timer = setInterval(() => {
        if (timeout < 1) {
          this.btnDis = false;
          clearInterval(timer);
          this.msg = ` 重新发送 `;
          return false;
        }
        this.msg = ` 倒计时${timeout}s `;
        timeout--;
      }, 1000);
    },

    // 发送验证码
    sendCode() {
      this.$axios({
        url: "https://api.it120.cc/small4/verification/sms/get",
        params: {
          mobile: this.tel,
          key: this.picKey,
          picCode: this.picCode
        }
      }).then(res => {
        console.log(res);
        if (res.code != 0) {
          this.$toast.fail(res.msg);
          return false;
        }
      });
      this.countSeconds()
    }
  },
  components: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
#login {
  margin: 0.2rem 0.3rem;
  font-size: 0.2rem;
  border: 1px solid #dfdfdf;
}
// p {
//   line-height: 0.3rem;
//   text-align: center;
// }
.inp {
  border: 1px solid #dfdfdf;
  border-radius: 0.2rem;
  width: 95%;
  margin: 0.2rem auto;
}
.btn {
  width: 90%;
  margin: .2rem auto;
  background: red;
  border: none;
}
</style>