<!-- 管理员用户管理面板  -->
<template>
  <div class="panel-box">
    <el-dialog title="新建管理员用户" :visible.sync="addPanelVisible">
      <el-row>
        <el-col :span="12">
          <el-input
            v-model="addAccount"
            class="add-input"
            placeholder="请输入账号,必填"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="addName"
            class="add-input"
            placeholder="请输入用户名,必填"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="addPhone"
            class="add-input"
            placeholder="请输入手机号"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-select
            class="add-input"
            v-model="addSex"
            placeholder="请选择性别"
          >
            <el-option label="男" value="1"> </el-option>
            <el-option label="女" value="0"> </el-option> </el-select
        ></el-col>
        <el-col :span="12">
          <el-select
            class="add-input"
            v-model="addRoles"
            multiple
            placeholder="请选择角色"
          >
            <el-option
              v-for="item in allRoles"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            >
            </el-option> </el-select
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="addPassword"
            class="add-input"
            placeholder="请输入登录密码,必填"
          ></el-input
        ></el-col>
        <el-button
          type="primary"
          style="float: right; margin: 3% 5% 0 0"
          @click="addAdminUser"
          >确认添加</el-button
        >
      </el-row>
    </el-dialog>
    <el-dialog title="编辑管理员用户" :visible.sync="updatePanelVisible">
      <el-row>
        <el-col :span="12">
          <el-input
            v-model="updateAccount"
            class="add-input"
            placeholder="请输入账号,必填"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="updateName"
            class="add-input"
            placeholder="请输入用户名,必填"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="updatePhone"
            class="add-input"
            placeholder="请输入手机号"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-select
            class="add-input"
            v-model="updateSex"
            placeholder="请选择性别"
          >
            <el-option label="男" value="1"> </el-option>
            <el-option label="女" value="0"> </el-option> </el-select
        ></el-col>
        <el-col :span="12">
          <el-select
            class="add-input"
            v-model="updateRoles"
            multiple
            placeholder="请选择角色"
          >
            <el-option
              v-for="item in allRoles"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-button
          type="primary"
          style="float: right; margin: 3% 5% 0 0"
          @click="updateAdminUser"
          >确认修改</el-button
        >
      </el-row>
    </el-dialog>
    <el-row>
      <el-col :span="6"
        ><el-input
          v-model="searchAccount"
          placeholder="输入账号搜索"
          size="mini"
          style="width: 80%"
        ></el-input
      ></el-col>
      <el-col :span="6"
        ><el-input
          v-model="searchName"
          placeholder="输入名称搜索"
          size="mini"
          style="width: 80%"
        ></el-input
      ></el-col>
      <el-col :span="6"
        ><el-input
          v-model="searchSex"
          placeholder="输入性别搜索"
          size="mini"
          style="width: 80%"
        ></el-input
      ></el-col>
      <el-col :span="6"
        ><el-button type="primary" size="mini" @click="search">搜索</el-button
        ><el-button size="mini" @click="resetParam">重置</el-button></el-col
      >
    </el-row>
    <div style="margin-top: 2%">
      <el-button type="primary" size="small" class="btn" @click="showAddPanel"
        >新建</el-button
      >
      <el-button type="danger" size="small" class="btn">删除</el-button>
      <el-button type="info" size="small" class="btn">导入</el-button>
    </div>
    <el-table
      :data="adminUserData"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column type="selection" width="45"> </el-table-column>
      <el-table-column label="用户账号" width="120" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.loginAccount }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户名" width="120" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.staffName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="80" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.staffSex == 0 ? "女" : "男"
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
            scope.row.roles.length == 0 ? "暂空" : arrToString(scope.row.roles)
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="120" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.createTime.substring(0, 10)
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="80" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.staffStatus == 1 ? "启用" : "禁用"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="showUpdatePanel(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="deleteAdminUser(scope.$index, scope.row.loginAccount)"
            >删除</el-button
          >
          <el-button
            size="mini"
            type="warning"
            @click="resetPassword(scope.row.loginAccount)"
            >重置密码</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  selectAllAdminUserService,
  selectAdminUserService,
  selectAdminRoleService,
  addAdminUserService,
  deleteAdminUserService,
  updateAdminUserService,
  adminUserResetPasswordService,
} from "@/utils/server";
export default {
  name: "adminUserManagePanel",
  data() {
    return {
      searchAccount: null,
      searchName: null,
      searchSex: null,
      adminUserData: [],
      addPanelVisible: false,
      updatePanelVisible: false,

      addAccount: "",
      addName: "",
      addPhone: "",
      addSex: "",
      addRoles: "",
      addPassword: "",

      updateAccount: "",
      updateName: "",
      updatePhone: "",
      updateSex: "",
      updateRoles: "",
      updatePassword: "",

      allRoles: [],
    };
  },
  methods: {
    arrToString(arr) {
      let re = arr[0].roleName;
      arr.forEach((element, index) => {
        if (index != 0) {
          re += "、" + element.roleName;
        }
      });
      return re;
    },
    resetParam() {
      this.searchAccount = "";
      this.searchName = "";
      this.searchSex = "";
    },
    search() {
      selectAdminUserService(
        [this.searchAccount, this.searchName, this.searchSex],
        (data) => {
          this.adminUserData = data.data;
        }
      );
    },
    showAddPanel() {
      this.addPanelVisible = true;
      this.addAccount = "";
      this.addName = "";
      this.addPhone = "";
      this.addSex = "";
      this.addRoles = "";
      selectAdminRoleService([], (data) => {
        this.allRoles = data.data;
      });
    },
    showUpdatePanel(index, row) {
      this.updatePanelVisible = true;
      this.updateAccount = row.loginAccount;
      this.updateName = row.staffName;
      this.updatePhone = row.phone;
      this.updateSex = row.staffSex;
      this.updateRoles = row.roles.map((role) => {
        return role.id;
      });
      selectAdminRoleService([], (data) => {
        this.allRoles = data.data;
      });
    },
    addAdminUser() {
      addAdminUserService(
        [
          this.addAccount,
          this.addPassword,
          this.addName,
          this.addSex,
          this.addPhone,
          this.addRoles,
        ],
        (data) => {
          this.$message({
            message: "添加成功",
            type: "success",
          });
          this.addPanelVisible = false;
          this.$router.go(0);
        },
        (data) => {
          this.$message({
            message: data,
            type: "fail",
          });
        }
      );
    },
    updateAdminUser() {
      updateAdminUserService(
        [
          this.updateAccount,
          this.updateName,
          this.updateSex,
          this.updatePhone,
          this.updateRoles,
        ],
        (data) => {
          this.$message({
            message: "修改成功",
            type: "success",
          });
          this.addPanelVisible = false;
          this.$router.go(0);
        },
        (data) => {
          this.$message({
            message: data,
            type: "fail",
          });
        }
      );
    },
    deleteAdminUser(index, account) {
      deleteAdminUserService(
        [account],
        (data) => {
          this.$message({
            message: "删除成功",
            type: "success",
          });
          this.adminUserData.splice(index, 1);
        },
        (data) => {
          this.$message({
            message: data,
            type: "fail",
          });
        }
      );
    },
    resetPassword(account) {
      adminUserResetPasswordService(
        [account],
        (data) => {
          this.$message({
            message: "重置成功",
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
  },
  created() {
    selectAllAdminUserService([], (data) => {
      this.adminUserData = data.data;
    });
  },
};
</script>
<style scoped>
.btn {
  width: 10%;
}
.panel-box {
  padding: 2%;
}
.add-input {
  width: 80%;
  margin: 3%;
}
</style>

