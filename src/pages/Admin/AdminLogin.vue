<!-- 管理员登录  -->
<template>
  <div>
    <div class="title">心理健康系统后台登录</div>
    <el-card class="card">
      <div class="card-title">账号登录</div>
      <el-input
        class="card-input"
        v-model="loginAccount"
        placeholder="请输入登录账号"
      ></el-input>
      <el-input
        class="card-input"
        show-password
        v-model="loginPassword"
        placeholder="请输入登录密码"
      ></el-input>
      <el-row class="card-input">
        <el-col :span="12">
          <el-input
            class="card-input"
            v-model="verCode"
            placeholder="请输入验证码"
          ></el-input>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-image class="captcha" :src="captcha" @click="getCaptcha"></el-image>
        </el-col>
      </el-row>
      <el-button class="card-btn" @click="login">登录</el-button>
    </el-card>
  </div>
</template>

<script>
import { adminUserLoginService, captchaService } from "@/utils/server";
export default {
  name: "AdminLogin",
  data() {
    return {
      loginAccount: "ly",
      loginPassword: "wozhidao",
      verId: "",
      verCode: "",
      captcha: "",
    };
  },
  methods: {
    login() {
      adminUserLoginService(
        [this.loginAccount, this.loginPassword,this.verId,this.verCode],
        (data) => {
          localStorage.setItem("Authorization", data.data);
          this.$router.push("AdminPanel");
        },
        (fail) => {
          this.$message.error("账号或密码错误，若忘记密码可请超级管理员重置");
        }
      );
    },
    getCaptcha() {
      captchaService([], (msg) => {
        this.captcha = "data:image/jpeg;base64,";
        this.captcha += msg.data.captcha;
        this.verId = msg.data.uuid;
      });
    },
  },
  created() {
    this.getCaptcha();
  },
};
</script>
<style scoped>
.title {
  font-size: 30px;
  color: rgb(117, 117, 247);
  margin-left: 10%;
  line-height: 2em;
}
.card {
  margin: 6% 60%;
  width: 25%;
  height: 500px;
}
.card-title {
  font-size: 24px;
  text-align: center;
  color: rgb(47, 104, 104);
}
.card-input {
  margin-top: 5%;
}
.card-btn {
  margin-top: 5%;
  width: 100%;
  background-color: cadetblue;
  color: white;
  font-size: 17px;
}
.captcha{
  cursor: pointer;
}
</style>