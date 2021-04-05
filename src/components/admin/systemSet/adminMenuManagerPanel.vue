<!--  -->
<template>
  <div class="panel-box">
    <el-dialog title="新建菜单" :visible.sync="addPanelVisible">
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
          @click="addAdminMenu"
          >确认添加</el-button
        >
      </el-row>
    </el-dialog>
    <el-dialog title="编辑菜单" :visible.sync="updatePanelVisible">
      <el-row>
        <el-col :span="12">
          <el-input
            v-model="updateName"
            class="add-input"
            placeholder="请输入菜单名称,必填"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="updateTitle"
            class="add-input"
            placeholder="请输入标题,必填"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="updateDes"
            type="textarea"
            class="add-input"
            placeholder="请输入菜单描述"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="updateType"
            class="add-input"
            placeholder="请输入类型,必填"
          ></el-input
        ></el-col>
        <el-col :span="12">
          <el-input
            v-model="updateIcon"
            class="add-input"
            placeholder="请选择图标,必填"
          ></el-input
        ></el-col>
        <el-button
          type="primary"
          style="float: right; margin: 3% 5% 0 0"
          @click="updateAdminMenu"
          >确认修改</el-button
        >
      </el-row>
    </el-dialog>
    <el-row>
      <el-col :span="5"
        ><el-input
          v-model="searchId"
          placeholder="输入编号搜索"
          size="mini"
          style="width: 80%"
          clearable
        ></el-input
      ></el-col>
      <el-col :span="5"
        ><el-input
          v-model="searchName"
          placeholder="输入菜单名称搜索"
          size="mini"
          style="width: 80%"
          clearable
        ></el-input
      ></el-col>
      <el-col :span="5"
        ><el-input
          v-model="searchTitle"
          placeholder="输入标题搜索"
          size="mini"
          style="width: 80%"
          clearable
        ></el-input
      ></el-col>
      <el-col :span="5"
        ><el-input
          v-model="searchType"
          placeholder="输入类型搜索"
          size="mini"
          style="width: 80%"
          clearable
        ></el-input
      ></el-col>
      <el-col :span="4"
        ><el-button type="primary" size="mini" @click="search">搜索</el-button
        ><el-button size="mini" @click="resetParam">重置</el-button></el-col
      >
    </el-row>
    <div style="margin-top: 2%">
      <el-button type="primary" size="small" class="btn" @click="showAddPanel" disabled
        >新建</el-button
      >
      <el-button type="danger" size="small" class="btn" disabled>删除</el-button>
      <el-button type="info" size="small" class="btn" disabled>导入</el-button>
    </div>
    <el-table
      :data="adminMenuData"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column type="selection" width="45"> </el-table-column>
      <el-table-column label="编号" width="80" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="菜单名称" width="140" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="120" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="描述" width="150" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.des }}</span>
        </template>
      </el-table-column>
      <el-table-column label="展示图标" width="100" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            <i :class="scope.row.icon"></i>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="菜单类型" width="100" sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.type }}</span>
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
            disabled
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  selectAdminMenuService,
  addAdminMenuService,
  updateAdminMenuService,
  deleteAdminMenuService,
} from "@/utils/server";
export default {
  name: "adminMenuManagerPanel",
  data() {
    return {
      searchId: "",
      searchName: "",
      searchTitle: "",
      searchType: "",

      adminMenuData: [],

      addPanelVisible: false,
      addName: "",
      addDes:"",
      addTitle: "",
      addType:"",
      addIcon:"",

      updatePanelVisible: false,
      updateId: "",
      updateName: "",
      updateDes: "",
      updateTitle:"",
      updateType:"",
      updateIcon:"",
    };
  },
  methods: {
    search() {
      selectAdminMenuService(
        [this.searchId, this.searchName, this.searchTitle, this.searchType],
        (msg) => {
          this.adminMenuData = msg.data;
        }
      );
    },
    resetParam() {
      this.searchId = "";
      this.searchName = "";
      this.searchTitle = "";
      this.searchType = "";
    },
    showUpdatePanel(index, row) {
      this.updatePanelVisible = true;
      this.updateId = row.id;
      this.updateName = row.name;
      this.updateDes = row.des;
      this.updateTitle = row.title;
      this.updateType = row.type;
      this.updateIcon = row.icon;
    },
    updateAdminMenu() {
      
      updateAdminMenuService(
        [this.updateId, this.updateName, this.updateDes,this.updateTitle,this.updateType,this.updateIcon],
        (data) => {
          this.$message({
            message: "修改成功",
            type: "success",
          });
          this.updatePanelVisible = false;
          this.adminMenuData.forEach((item) => {
            if (item.id == this.updateId) {
              item.name = this.updateName;
              item.des = this.updateDes;
              item.title=this.updateTitle;
              item.type=this.updateType;
              item.icon=this.updateIcon;
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
    deleteAdminUser(index,id){

    },
    addAdminMenu(){

    },
    showAddPanel(){

    }
  },
  created() {
    selectAdminMenuService([], (msg) => {
      this.adminMenuData = msg.data;
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