<!-- 后台右侧面板 -->
<template>
  <div>
    <el-tabs
      v-model="cur"
      type="card"
      editable
      @edit="handleTabsEdit"
      @tab-click="handleTabsClick"
    >
      <el-tab-pane
        :key="item.name"
        v-for="item in this.$store.state.adminTabs.allTabs"
        :label="item.title"
        :name="item.path"
        class="panel"
      >
        <router-view />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "adminRightPanel",
  data() {
    return {};
  },
  computed: {
    cur: {
      get() {
        return this.$store.state.adminTabs.curTabsValue;
      },
      set(value) {
        this.$store.commit("setCurTabsValue", value);
      },
    },
  },
  methods: {
    handleTabsEdit(path, action) {
      if (action === "remove") {
        this.$store.commit("removeTabs", path);
      }
    },
    handleTabsClick(tab) {
      this.$router.push(tab.paneName);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.panel{
}
</style>