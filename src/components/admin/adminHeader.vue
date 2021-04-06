<!--头部组件  -->
<template>
  <div class="admin-header-box">
    <el-row>
      <el-col :span="4"> <span class="logo">心理健康后台管理系统</span></el-col>
      <el-col :span="1"><i class="el-icon-s-fold icon"></i></el-col>
      <el-col :span="3" :offset="16">
        <div class="headimg">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown style="height: 35px">
            <i
              class="el-icon-caret-bottom"
              style="color: white; cursor: pointer"
            ></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="goPersonCenter">个人中心</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logout">推出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "adminHeader",
  data() {
    return {};
  },
  methods: {
    goPersonCenter(){
      this.$router.push("/admin/System/personCenter/myInfo");
    },
    logout(){
      localStorage.removeItem('Authorization');
      this.$router.push("AdminLogin")
    }
  },
};
</script>
<style scoped>
.admin-header-box {
  background-color: rgb(0, 21, 41);
  height: 5%;
  line-height: 3.5em;
}
.logo {
  color: rgb(247, 244, 248);
  font-size: 24px;
}
.icon {
  color: rgb(247, 244, 248);
  font-size: 28px;
  line-height: 2.1em;
}
.headimg {
  margin-top: 10%;
}
</style>