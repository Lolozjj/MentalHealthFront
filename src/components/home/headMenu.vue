<!-- 首页头部菜单 -->
<template>
  <div class="head-menu-box">
    <el-row>
      <el-col class="col" :span="9" :offset="4">
        <el-row>
          <el-col :span="3">
            <el-image :src="require('@/assets/logo.png')" class="logo-img"></el-image>
          </el-col>
          <el-col class="items" :span="20" :offset="1">
            <span class="blue-text click" @click="goRouter('Home')">首页</span>
            <el-divider direction="vertical"></el-divider>&nbsp;
            <span class="click" @click="goRouter('Articles')">阅读</span> &nbsp;
            <span class="click" @click="goRouter('Questions')">问答</span>&nbsp;
            <el-divider direction="vertical"></el-divider>&nbsp;
            <!-- <a class="click" @click="goRouter('TestPapers')">测试</a>&nbsp; &nbsp; -->
            <a class="click" @click="goRouter('Chatbot')">闲聊</a>&nbsp;&nbsp;
            <!-- <a class="click">心理咨询</a> -->
          </el-col>
        </el-row>
      </el-col>
      <el-col class="col" :span="6">
        <el-row>
          <el-col :span="6">
            <el-dropdown>
              <span class="el-dropdown-link">
                更多
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="dropdown">
                <el-dropdown-item icon="el-icon-star-off">精选主题</el-dropdown-item>
                <el-dropdown-item icon="el-icon-orange">了解更多</el-dropdown-item>
                <el-dropdown-item icon="el-icon-mobile-phone">APP</el-dropdown-item>
                <el-dropdown-item icon="el-icon-user">加入我们</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="12">
            <el-input
              class="search-input"
              v-model="searchKey"
              placeholder="请输入搜索"
              size="medium"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-button size="medium" type icon plain class="search-btn" @click="searchEvent">搜索</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="col" :span="2" :offset="2">
        <div v-if="!isLogin">
          <a class="login" href="/#/Register">登录</a>
        </div>
        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-bell"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown">
              <el-dropdown-item icon="el-icon-star-off">私信（{{ msgNum }}）</el-dropdown-item>
              <el-dropdown-item icon="el-icon-edit">回复（{{ replyNum }}）</el-dropdown-item>
              <el-dropdown-item icon="el-icon-warning-outline">通知（{{ noticeNum }}）</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar
                class="avatar"
                :src="userInfo.headImgUrl"
              ></el-avatar>
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown">
              <el-dropdown-item icon="el-icon-star-off" @click.native="goPersonalCenter">个人主页</el-dropdown-item>
              <el-dropdown-item icon="el-icon-warning-outline" @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { tokenVerifyService, userInfoService } from "@/utils/frontServer";
export default {
  name: "headMenu",
  data() {
    return {
      searchKey: "",
      isLogin: false,
      msgNum: 0,
      replyNum: 0,
      noticeNum: 0,
      userInfo: {},
    };
  },
  methods: {
    searchEvent() {
      console.log(this.$store.state); // -> 1
    },
    logout() {
      this.isLogin = false;
      localStorage.removeItem("token");
      this.$message("成功退出登录");
    },
    goPersonalCenter() {
      this.$router.push("/PersonalCenter");
    },
    goArticles() {
      this.$router.push("/Articles");
    },
    goHome() {
      this.$router.push("/Home");
    },
    goQuestions() {
      this.$router.push("/Questions");
    },
    goRouter(path) {
      this.$router.push("/" + path);
    },
    getUserInfo() {
      userInfoService
        .setSucceed((msg) => {
          this.userInfo = msg.data;
          console.log(this.userInfo);
        })
        .sendGetService();
    },
  },
  created() {
    this.getUserInfo();
    tokenVerifyService
      .setSucceed((msg) => {
        this.isLogin = true;
      })
      .setFail((msg) => {
        console.log("token 失效");
        localStorage.removeItem("token");
      })
      .setError((msg) => {})
      .sendPostService();
  },
};
</script>
<style scoped>
.head-menu-box {
  height: 10%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  line-height: 4em;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100%;
  color: rgb(109, 105, 105);
  background-color: white;
  border-bottom: 1px solid rgb(221, 221, 221);
  z-index: 20;
}
.blue-text {
  color: #0b8bff;
  font-size: 16px;
  font-weight: 400;
}
.logo-img {
  width: 80%;
}
.click {
  cursor: pointer;
  text-decoration: none;
}
.items .click:hover {
  color: rgb(24, 22, 22);
}
.items .click:first-child:hover {
  color: #095aa5;
}
.dropdown {
  margin-top: -1%;
}
.search-btn:focus,
.search-btn:hover {
  background: #48d1cc;
  border-color: #48d1cc;
  color: #fff;
}
.search-btn {
  color: #fff;
  background-color: #20b2aa;
  border-color: #20b2aa;
}
.login {
  color: #0b8bff;
  text-decoration: none;
}
.avatar {
  margin-left: 20%;
  margin-top: 30%;
}
</style>