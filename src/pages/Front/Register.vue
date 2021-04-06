<!-- 注册和登录页面  -->
<template>
  <div class="register-box">
    <div class="card">
      <div class="header">
        <el-row>
          <el-col
            :class="[{ 'is-active': activeIndex == 1 }]"
            :span="12"
            @click.native="activeItem(1)"
          >
            <span class="header-item">注册/登录</span>
          </el-col>
          <el-col
            :class="[{ 'is-active': activeIndex == 2 }]"
            :span="12"
            @click.native="activeItem(2)"
          >
            <span class="header-item">账号密码登录</span>
          </el-col>
        </el-row>
      </div>
      <div class="content">
        <div v-show="activeIndex == 1" class="phone-login">
          <el-input class="margin" v-model="phone" placeholder="11位手机号"></el-input>
          <el-row class="margin">
            <el-col :span="13">
              <el-input v-model="authCode" placeholder="6位验证码"></el-input>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-button plain>获取验证码</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">
              <el-checkbox class="agreement" size="mini" v-model="checked">同意《用户注册协议》</el-checkbox>
            </el-col>
          </el-row>
        </div>
        <div v-show="activeIndex == 2" class="account-login">
          <el-input class="margin" v-model="phone" placeholder="请输入账号"></el-input>
          <el-row class="margin">
            <el-col :span="13">
              <el-input v-model="authCode" placeholder="请输入密码"></el-input>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-button plain>忘记密码?</el-button>
            </el-col>
          </el-row>
        </div>
        <el-row>
          <el-col :span="24">
            <el-button class="margin login-btn">快捷登录</el-button>
          </el-col>
        </el-row>
        <el-divider>
          <span class="other-login-span">其他方式</span>
        </el-divider>
        <el-row>
          <el-col :span="8">
            <i class="el-icon-orange icon-size"></i>
          </el-col>
          <el-col :span="8">
            <i class="el-icon-orange icon-size"></i>
          </el-col>
          <el-col :span="8">
            <i class="el-icon-orange icon-size"></i>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <span class="other-text">微信</span>
          </el-col>
          <el-col :span="8">
            <span class="other-text">QQ</span>
          </el-col>
          <el-col :span="8">
            <span class="other-text">微博</span>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeIndex: 1,
      phone: "",
      authCode: "",
      checked: true,
    };
  },

  components: {},

  computed: {},

  methods: {
    activeItem(val) {
      this.activeIndex = val;
    },
  },
};
</script>
<style scoped>
.card {
  margin: 10% 40%;
  /* background-color: rgb(175, 173, 173); */
  border-radius: 3px;
  text-align: center;
  border: 1px solid rgb(224, 224, 224);
}
.header {
  height: 60px;
  line-height: 3.5em;
  cursor: pointer;
}
.header-item {
  font-size: 16px;
}
.is-active {
  border-bottom: 5px solid rgb(49, 105, 176);
  color: rgb(49, 105, 176);
}
.content {
  padding: 5% 7%;
}
.margin {
  margin: 3% 0;
}
.margin .el-checkbox__label {
  font-size: 12px;
}
.login-btn {
  width: 100%;
  margin-top: 10%;
}
.login-btn:focus,
.login-btn:hover {
  background: #48d1cc;
  border-color: #48d1cc;
  color: #fff;
}
.login-btn {
  color: #fff;
  background-color: #20b2aa;
  border-color: #20b2aa;
}
.other-login-span {
  font-size: 12px;
  letter-spacing: 1px;
}
.icon-size {
  font-size: 40px;
}
.other-text {
  font-size: 12px;
}
</style>