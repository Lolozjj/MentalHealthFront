<!--  -->
<template>
  <div class="panel-box">
    <el-dialog title="分配权限" :visible.sync="menuAssPanelVisible">
      <el-tree
        :data="allMenu"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps"
      >
      </el-tree>

      <el-button @click="menuAss" class="sure-btn" type="primary"
        >确定</el-button
      >
    </el-dialog>
    <el-table
      :data="adminRoleData"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column type="selection" width="45"> </el-table-column>
      <el-table-column label="编号" width="100" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色名" width="240" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="描述" width="240" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.des }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="200" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.crtTime }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="showAssPanel(scope.$index, scope.row)"
            >分配权限</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="deleteMenus(scope.$index, scope.row)"
            >清空权限</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  selectAdminRoleService,
  selectAdminMenuByRoleIdService,
  selectAllMenuTree2,
  updateAdminMenuByRoleService,
} from "@/utils/server";
export default {
  data() {
    return {
      adminRoleData: [],
      menuAssPanelVisible: false,
      allMenu: [],
      updateId: "",
      defaultProps: {
        children: "children",
        label: (data, node) => {
          return data.title;
        },
      },
    };
  },
  methods: {
    openDialog() {},
    showAssPanel(inedx, row) {
      this.menuAssPanelVisible = true;
      selectAllMenuTree2([], (msg) => {
        this.allMenu = msg.data;
      });
      this.updateId = row.id;
      this.$nextTick(function () {
        selectAdminMenuByRoleIdService([row.id], (msg) => {
          var select = msg.data.map((item) => {
            return item.id;
          });
          this.$refs.tree.setCheckedKeys(select);
        });
      });
    },
    deleteMenus(index, row) {
      console.log(row.id);
      updateAdminMenuByRoleService(
        [row.id, []],
        (msg) => {
          this.$message({
            message: "设置成功，更改当前用户权限刷新后生效",
            type: "success",
          });
        }
      );
    },
    menuAss() {
      updateAdminMenuByRoleService(
        [this.updateId, this.$refs.tree.getCheckedKeys()],
        (msg) => {
          this.$message({
            message: "设置成功，更改当前用户权限刷新后生效",
            type: "success",
          });
          this.menuAssPanelVisible=false;
        }
      );
    },
    setCheck(keys, leafOnly) {},
  },
  created() {
    selectAdminRoleService([], (data) => {
      this.adminRoleData = data.data;
    });
  },
};
</script>
<style scoped>
.panel-box {
  padding: 2%;
}

.sure-btn {
  margin: 10% 0 0 90%;
}
</style>