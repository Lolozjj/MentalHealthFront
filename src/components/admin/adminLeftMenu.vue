<!-- 左侧菜单 -->
<template>
  <div>
    <el-menu
      default-active="2-2"
      background-color="#001529"
      text-color="#A0AAAE"
      active-text-color="#ffd04b"
    >
      <el-submenu  v-for="(item, index) in menus" :index="item.node.id+''" :key="index">
        <template slot="title">
          <i :class="item.node.icon"></i>
          <span>{{ item.node.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(item2, index2) in item.children"
            :key="index2"
            :index="item2.node.id+''"
            @click="addTab(item2.node.title, item2.node.id, item2.node.path)"
          >
            <i :class="item2.node.icon"></i>{{ item2.node.title }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { selectMenuTreeByUserId } from "@/utils/server";
export default {
  name: "adminLeftMenu",
  data() {
    return {
      menus: [],
    };
  },

  methods: {
    addTab(title, name, path) {
      this.$store.commit("addTabs", {
        title: title,
        name: name,
        path: path,
      });
    },
  },
  created() {
    selectMenuTreeByUserId([], (msg) => {
      this.menus = msg.data;
    });
  },
};
</script>
<style scoped>
</style>