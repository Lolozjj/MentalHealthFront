<!-- 注册和登录页面  -->
<template>
  <div class="register-box">
    <el-dialog title="用户注册协议" :visible.sync="visibleAgreement" width="60%">
      <!-- 还没写 -->
    </el-dialog>
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
          <el-input class="margin" v-model="phone" maxlength="11" placeholder="11位手机号"></el-input>
          <div v-show="!phoneTrue&&phone!=''" class="error-tip">*手机号码格式有误</div>
          <el-row class="margin">
            <el-col :span="13">
              <el-input
                v-model="authCode"
                :disabled="!sendAuthCode"
                maxlength="4"
                placeholder="4位验证码"
              ></el-input>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-button plain @click="getChaptch" :disabled="!phoneTrue||authCodeWaitSecond!=0">
                <span v-if="authCodeWaitSecond!=0">{{authCodeWaitSecond}}后重获取</span>
                <span v-else>发送验证码</span>
              </el-button>
            </el-col>
          </el-row>
          <div v-show="!authCodeTrue" class="error-tip">*验证码格式有误</div>
          <el-checkbox class="agreement" size="mini" v-model="checked"></el-checkbox>
          <span class="agreement-span" @click="dispalyAgreement">同意《用户注册协议》</span>
        </div>
        <div v-show="activeIndex == 2" class="account-login">
          <el-input class="margin" v-model="account" placeholder="请输入账号"></el-input>
          <el-row class="margin">
            <el-col :span="13">
              <el-input v-model="password" show-password placeholder="请输入密码"></el-input>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-button plain>忘记密码?</el-button>
            </el-col>
          </el-row>
        </div>
        <el-row>
          <el-col :span="24">
            <el-button class="margin login-btn" @click="login">快捷登录</el-button>
          </el-col>
        </el-row>
        <el-divider>
          <span class="other-login-span">其他方式</span>
        </el-divider>
        <div class="other-login-div">
          <el-row>
            <el-col :span="8">
              <svg class="icon icon-size" aria-hidden="true">
                <use xlink:href="#lo-wechat" />
              </svg>
            </el-col>
            <el-col :span="8">
              <svg class="icon icon-size" aria-hidden="true">
                <use xlink:href="#lo-qq" />
              </svg>
            </el-col>
            <el-col :span="8">
              <svg class="icon icon-size" aria-hidden="true">
                <use xlink:href="#lo-weibo" />
              </svg>
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
  </div>
</template>

<script>
import {
  accountLoginService,
  getLoginVerCodeService,
  phoneLoginService,
} from "@/utils/frontServer";
export default {
  name: "",
  data() {
    return {
      activeIndex: 1,
      phone: "",
      authCode: "",
      account: "1",
      password: "wozhidao.",
      checked: true,

      visibleAgreement: false,
      phoneTrue: false,
      authCodeTrue: true,
      sendAuthCode: false,
      authCodeWaitSecond: 0,
    };
  },
  watch: {
    phone(val, oldVal) {
      var phoneRe = /^[1][3-9]\d{9}$|^([6|9])\d{7}$|^[0][9]\d{8}$|^[6]([8|6])\d{5}$/;
      var numRe = /^\d+$/;
      if (phoneRe.test(val)) {
        this.phoneTrue = true;
      } else {
        this.phoneTrue = false;
      }
      if (!numRe.test(val) && val != "") {
        this.phone = oldVal;
      }
    },
    authCode(val, oldVal) {
      if (val.length == 4) {
        this.authCodeTrue = true;
      } else {
        this.authCodeTrue = false;
      }
    },
  },
  methods: {
    activeItem(val) {
      this.activeIndex = val;
    },
    dispalyAgreement() {
      this.visibleAgreement = true;
    },
    getChaptch() {
      this.sendAuthCode = true;
      this.authCodeWaitSecond = 60;
      /**获取验证码 */
      getLoginVerCodeService
        .setSucceed((msg) => {
          this.authCode = msg.data;
        })
        .setParam({
          phone: this.phone,
        })
        .sendPostService();
    },
    login() {
      if (this.activeIndex == 1) {
        phoneLoginService
          .setParam({
            phone: this.phone,
            verCode: this.authCode,
          })
          .setSucceed((msg) => {
            localStorage.setItem("token", msg.data);
            this.$message({
              message: "登录成功,即将跳转",
              type: "success",
            });
            setTimeout(() => {
              this.$router.push("Home");
            }, 1500);
          })
          .setFail((msg) => {
            this.$message.error("验证码错误");
          })
          .sendPostService();
      }
      if (this.activeIndex == 2) {
        accountLoginService
          .setParam({
            account: this.account,
            password: this.password,
          })
          .setSucceed((msg) => {
            localStorage.setItem("token", msg.data);
            this.$message({
              message: "登录成功,即将跳转",
              type: "success",
            });
            setTimeout(() => {
              this.$router.push("Home");
            }, 1500);
          })
          .setFail((msg) => {
            this.$message.error("账号或密码错误");
          })
          .sendPostService();
      }
    },
  },
  created() {
    setInterval(() => {
      if (this.authCodeWaitSecond != 0) {
        if (this.sendAuthCode) {
          this.authCodeWaitSecond--;
        }
      } else {
        this.sendAuthCode = false;
      }
    }, 1000);
  },
};
</script>
<style scoped>
.register-box {
  /* background: #f7f7f7 url("../../../static/bk_login.jpg") no-repeat; */
  /* background-size: 100% 100%; */
  /* background-attachment: fixed; */
  /* height: 100vh; */
}
.card {
  margin: 10% 40%;
  /* background-color: rgb(175, 173, 173); */
  border-radius: 3px;
  border: 1px solid rgb(224, 224, 224);
}
.header {
  height: 60px;
  line-height: 3.5em;

  text-align: center;
  cursor: pointer;
  color: rgb(168, 180, 187);
}
.header:hover {
  color: rgb(111, 121, 126);
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
.login-btn:hover {
  background: #1a8f89;
  border-color: #1a8f89;
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
.other-login-div {
  text-align: center;
}
.icon-size {
  font-size: 30px;
  cursor: pointer;
}
.other-text {
  font-size: 12px;
}
.error-tip {
  color: red;
  font-size: 12px;
  text-align: left;
  margin-left: 5%;
}
.agreement-span {
  font-size: 14px;
  color: rgb(20, 31, 190);
  cursor: pointer;
  text-decoration: underline;
}
.agreement-span:hover {
  color: rgb(14, 23, 145);
}
</style>