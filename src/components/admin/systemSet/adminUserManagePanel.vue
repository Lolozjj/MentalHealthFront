<!-- 管理员用户管理面板  -->
<template>
  <div class="panel-box">
    <el-dialog title="新建管理员用户" :visible.sync="addPanelVisible">
      <el-row>
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
            <el-option label="男" :value="1"> </el-option>
            <el-option label="女" :value="0"> </el-option> </el-select
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="updatePassword"
            class="add-input"
            placeholder="请输入登录密码,必填"
          ></el-input
        ></el-col>
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
          v-model="searchNo"
          placeholder="输入编号搜索"
          size="mini"
          style="width: 80%"
          clearable
        ></el-input
      ></el-col>
      <el-col :span="6"
        ><el-input
          v-model="searchUserName"
          placeholder="输入用户名搜索"
          size="mini"
          style="width: 80%"
          clearable
        ></el-input
      ></el-col>
      <el-col :span="6"
        ><el-input
          v-model="searchPhone"
          placeholder="输入手机号搜索"
          size="mini"
          style="width: 80%"
          clearable
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
            scope.row.roleNames == null ? "暂空" : scope.row.roleNames
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="220" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.crtTime == null ? "未知" : scope.row.crtTime
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
            @click="deleteAdminUser(scope.$index, scope.row.id)"
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
      searchUserName: null,
      searchNo: null,
      searchPhone: null,

      adminUserData: [],

      addPanelVisible: false,
      updatePanelVisible: false,

      addName: "",
      addPhone: "",
      addSex: "",
      addPassword: "",

      updateId: "",
      updateName: "",
      updatePhone: "",
      updateSex: "",
      updatePassword: "",

      allRoles: [],
    };
  },
  methods: {
    arrToString(arr) {
      let re = arr[0].roleName;
      arr.forEach((element, index) => {
        if (index != 0) {
          re += "," + element.roleName;
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
        [this.searchNo, this.searchUserName, this.searchPhone],
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
      this.updateName = row.username;
      this.updatePhone = row.phone;
      this.updateSex = row.sex;
      this.updateId = row.id;
    },
    addAdminUser() {
      addAdminUserService(
        [this.addName, this.addPassword, this.addSex, this.addPhone],
        (data) => {
          this.$message({
            message: "添加成功",
            type: "success",
          });
          this.addPanelVisible = false;
          this.adminUserData.push({
            no: "刷新后生成",
            username: this.addName,
            password: this.addPassword,
            sex: this.addSex,
            phone: this.addPhone,
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
    updateAdminUser() {
      updateAdminUserService(
        [
          this.updateId,
          this.updateName,
          this.updatePassword == "" ? null : this.updatePassword,
          this.updateSex,
          this.updatePhone,
        ],
        (data) => {
          this.adminUserData.forEach((item) => {
            console.log(this.updateSex);
            if (item.id == this.updateId) {
              item.username = this.updateName;
              item.sex = this.updateSex;
              item.phone = this.updatePhone;
            }
          });
          this.$message({
            message: "修改成功",
            type: "success",
          });
          this.updatePanelVisible = false;
        },
        (data) => {
          this.$message({
            message: data,
            type: "fail",
          });
        }
      );
    },
    deleteAdminUser(index, id) {
      deleteAdminUserService(
        id,
        [],
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
      console.log(data.data);
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

