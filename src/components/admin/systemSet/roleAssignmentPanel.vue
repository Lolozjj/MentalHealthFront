<!-- 设置超级管理员和制空角色还没写  -->
<template>
  <div class="panel-box">
    <el-dialog title="分配角色" :visible.sync="roleAssPanelVisible">
      <el-transfer
        filterable
        filter-placeholder="请输入角色名称"
        v-model="hasRole"
        :data="allRole"
        :titles="['可选角色', '已拥有角色']"
        class="transfer"
      >
      </el-transfer>
      <el-button @click="roleAss" class="sure-btn" type="primary"
        >确定</el-button
      >
    </el-dialog>
    <el-table
      :data="adminUserTableData"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column type="selection" width="45"> </el-table-column>
      <el-table-column label="编号" width="120" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.no }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户名" width="120" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="80" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.sex == 0 ? "女" : "男"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机号" width="130" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.phone == null ? "暂空" : scope.row.phone
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色" width="200" sortable>
        <template slot-scope="scope">
          <el-tag style="margin-left: 10px">{{
            scope.row.roleNames == "" || scope.row.roleNames == null
              ? "暂空"
              : scope.row.roleNames
          }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="shwoRoleAssPanel(scope.$index, scope.row)"
            >分配角色</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="setSuperRole(scope.$index, scope.row)"
            >设置超级管理员</el-button
          >
          <el-button
            size="mini"
            type="warning"
            @click="setNullRole(scope.$index, scope.row)"
            >角色置空</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  selectAdminUserService,
  selectAdminRoleService,
  selectAdminRoleByUserIdService,
  updateAdminRoleByUserService,
} from "@/utils/server";
export default {
  name: "",
  data() {
    return {
      adminUserTableData: [],
      roleAssPanelVisible: false,

      hasRole: [],
      allRole: [],

      updateId: "",
    };
  },

  methods: {
    shwoRoleAssPanel(index, row) {
      this.roleAssPanelVisible = true;
      this.updateId = row.id;
      selectAdminRoleByUserIdService([row.id], (msg) => {
        this.hasRole = msg.data.map((item) => {
          return item.id;
        });
      });
    },
    setSuperRole(index, row) {},
    setNullRole(index, row) {
      updateAdminRoleByUserService(
        [row.id, []],
        (data) => {
          this.$message({
            message: "修改成功",
            type: "success",
          });
        },
        (data) => {
          this.$message({
            message: data,
            type: "fail",
          });
        }
      );
    },
    roleAss() {
      updateAdminRoleByUserService(
        [this.updateId, this.hasRole],
        (data) => {
          this.$message({
            message: "修改成功",
            type: "success",
          });
          this.roleAssPanelVisible = false;
        },
        (data) => {
          this.$message({
            message: data,
            type: "fail",
          });
        }
      );
    },
  },
  created() {
    selectAdminUserService([], (msg) => {
      this.adminUserTableData = msg.data;
    });
    selectAdminRoleService([], (msg) => {
      msg.data.forEach((element) => {
        let item = {
          key: element.id,
          label: element.name,
        };
        this.allRole.push(item);
      });
    });
  },
};
</script>
<style scoped>
.panel-box {
  padding: 2%;
}
.transfer {
  padding-left: 10%;
}
.sure-btn {
  margin: 10% 0 0 90%;
}
</style>