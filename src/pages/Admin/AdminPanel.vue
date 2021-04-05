<!--  -->
<template>
  <div>
    <admin-header></admin-header>
    <el-row>
      <el-col :span='4'><admin-left-menu></admin-left-menu></el-col>
      <el-col :span='20'><admin-right-panel></admin-right-panel></el-col>
    </el-row>
  </div>
</template>

<script>
import adminHeader from "../../components/admin/adminHeader.vue";
import AdminLeftMenu from "../../components/admin/adminLeftMenu.vue";
import AdminRightPanel from '../../components/admin/adminRightPanel.vue';
import AdminUserManagePanel from '../../components/admin/systemSet/adminUserManagePanel.vue';
export default {
  components: { adminHeader, AdminLeftMenu, AdminUserManagePanel, AdminRightPanel },
  name: "AdminPanel",
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped>
</style>