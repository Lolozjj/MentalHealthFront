<!-- 角色管理 -->
<template>
  <div class="panel-box">
    <el-dialog title="新建角色" :visible.sync="addPanelVisible">
      <el-row>
        <el-col :span="12">
          <el-input
            v-model="addName"
            class="add-input"
            placeholder="请输入角色名称,必填"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="addDes"
            type="textarea"
            class="add-input"
            placeholder="请输入描述,必填"
          ></el-input
        ></el-col>

        <el-button
          type="primary"
          style="float: right; margin: 3% 5% 0 0"
          @click="addAdminRole"
          >确认添加</el-button
        >
      </el-row>
    </el-dialog>
    <el-dialog title="编辑角色" :visible.sync="updatePanelVisible">
      <el-row>
        <el-col :span="12">
          <el-input
            v-model="updateName"
            class="add-input"
            placeholder="请输入角色名称,必填"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="updateDes"
            type="textarea"
            class="add-input"
            placeholder="请输入描述,必填"
          ></el-input
        ></el-col>
        <el-button
          type="primary"
          style="float: right; margin: 3% 5% 0 0"
          @click="updateAdminRole"
          >确认修改</el-button
        >
      </el-row>
    </el-dialog>
    <el-row>
      <el-col :span="6"
        ><el-input
          v-model="searchId"
          placeholder="输入编号搜索"
          size="mini"
          style="width: 80%"
          clearable
        ></el-input
      ></el-col>
      <el-col :span="6"
        ><el-input
          v-model="searchName"
          placeholder="输入角色名搜索"
          size="mini"
          style="width: 80%"
          clearable
        ></el-input
      ></el-col>
      <el-col :span="6"
        ><el-input
          v-model="searchDes"
          placeholder="输入描述搜索"
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
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  selectAdminRoleService,
  addAdminRoleService,
  updateAdminRoleService,
  deleteAdminRoleService,
} from "@/utils/server";
export default {
  name: "adminRoleManagerPanel",
  data() {
    return {
      searchId: "",
      searchName: "",
      searchDes: "",

      adminRoleData: [],

      addPanelVisible: false,
      addName: "",
      addDes: "",

      updatePanelVisible: false,
      updateId: "",
      updateName: "",
      updateDes: "",
    };
  },
  methods: {
    search() {
      selectAdminRoleService(
        [this.searchId, this.searchName, this.searchDes],
        (data) => {
          this.adminRoleData = data.data;
        }
      );
    },
    resetParam() {
      this.searchName = "";
      this.searchDes = "";
    },
    showAddPanel() {
      this.addPanelVisible = true;
      this.addName = "";
      this.addDes = "";
    },
    showUpdatePanel(index, row) {
      this.updatePanelVisible = true;
      this.updateId = row.id;
      this.updateName = row.name;
      this.updateDes = row.des;
    },
    addAdminRole() {
      addAdminRoleService(
        [this.addName, this.addDes],
        (data) => {
          this.$message({
            message: "添加成功",
            type: "success",
          });
          this.addPanelVisible = false;
          this.adminRoleData.push({
            id: "待刷新",
            name: this.addName,
            des: this.addDes,
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
    updateAdminRole() {
      updateAdminRoleService(
        [this.updateId, this.updateName, this.updateDes],
        (data) => {
          this.$message({
            message: "修改成功",
            type: "success",
          });
          this.updatePanelVisible = false;
          this.adminRoleData.forEach((item) => {
            if (item.id == this.updateId) {
              item.name = this.updateName;
              item.des = this.updateDes;
            }
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
    deleteAdminUser(index, id) {
      deleteAdminRoleService(
        id,
        [],
        (data) => {
          this.$message({
            message: "删除成功",
            type: "success",
          });
          this.adminRoleData.splice(index, 1);
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
    selectAdminRoleService([], (data) => {
      this.adminRoleData = data.data;

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
