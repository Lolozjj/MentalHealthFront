<!-- 左侧菜单 -->
<template>
  <div>
    <el-menu
      default-active="1-1"
      background-color="#001529"
      text-color="#A0AAAE"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>仪表盘</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-s-platform"></i>工作台</el-menu-item
          >
          <el-menu-item index="1-2">
            <i class="el-icon-s-marketing"></i>分析台</el-menu-item
          >
          <el-menu-item index="1-3">
            <i class="el-icon-video-camera"></i>监控台</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><i class="el-icon-s-custom"></i>用户管理</el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-s-ticket"></i>角色管理</el-menu-item>
          <el-menu-item index="2-3"><i class="el-icon-menu"></i>菜单管理</el-menu-item>
          <el-menu-item index="2-4"><i class="el-icon-date"></i>登录日志</el-menu-item>
          <el-menu-item index="2-5"><i class="el-icon-document"></i>操作日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-warning-outline"></i>
          <span>个人中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1"><i class="el-icon-s-check"></i>个人资料</el-menu-item>
          <el-menu-item index="3-2"><i class="el-icon-bank-card"></i>我的消息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "adminLeftMenu",
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped>
</style>