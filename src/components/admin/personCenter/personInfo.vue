<!--  -->
<template>
  <div>
    <el-row >
      <el-col :span="8" >
        <el-card class="card">
          <el-avatar
            class="head"
            :size="120"
            :src="info.staffHeadimgUurl"
          ></el-avatar>
          <div class="name">{{ updateName }}</div>
          <div class="first card-text">员工号：{{ info.no }}</div>
          <div class="card-text">
            账号权限：
            <el-tag
              size="mini"
              v-for="(item, index) in roles"
              :key="index"
              style="margin-right: 3%"
              >{{ item }}</el-tag
            >
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-tabs type="border-card" v-model="activeName" class="tabs">
          <el-tab-pane label="基本信息" name="info">
            <el-row class="margin-three">
              <el-col :span="2" :offset="2"
                ><span class="red">*</span
                ><span class="label-text">名称:</span></el-col
              >
              <el-col :span="10">
                <el-input
                  size="mini"
                  v-model="updateName"
                  placeholder="请输入名称"
                ></el-input
              ></el-col>
            </el-row>
            <el-row class="margin-three">
              <el-col :span="2" :offset="2"
                ><span class="red">*</span
                ><span class="label-text">性别:</span></el-col
              >
              <el-col :span="10">
                <el-select v-model="updateSex" size="mini" placeholder="请选择">
                  <el-option label="男" value="1"> </el-option>
                  <el-option label="女" value="0"> </el-option></el-select
              ></el-col>
            </el-row>
            <el-row class="margin-three">
              <el-col :span="2" :offset="2"
                ><span class="red">*</span
                ><span class="label-text">手机:</span></el-col
              >
              <el-col :span="10">
                <el-input
                  size="mini"
                  v-model="updatePhone"
                  placeholder="请输入手机"
                ></el-input
              ></el-col>
            </el-row>
            <el-button
              type="primary"
              style="float: right; margin: 15% 15% 0 0"
              @click="updateMyInfo"
              >确认修改</el-button
            >
          </el-tab-pane>
          <el-tab-pane label="账号绑定" name="accountBind"
            >暂未开发</el-tab-pane
          >
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getLoginAdminUserInfo, updateAdminUserService } from "@/utils/server";
export default {
  name: "personInfo",
  data() {
    return {
      activeName: "info",
      info: {},
      roles: [],
      updateName: "",
      updateSex: "1",
      updatePhone: "",
    };
  },
  methods: {
    arrToString(arr) {
      console.log(arr);
      let re = arr[0].roleName;
      arr.forEach((element, index) => {
        if (index != 0) {
          re += "、" + element.roleName;
        }
      });
      return re;
    },
    updateMyInfo() {
      updateAdminUserService(
        [this.info.id, this.updateName, "", this.updateSex, this.updatePhone],
        (msg) => {
          this.$message({
            message: "修改成功",
            type: "success",
          });
        }
      );
    },
  },
  created() {
    getLoginAdminUserInfo([], (data) => {
      this.info = data.data;
      this.updateName = this.info.username;
      this.updateSex = this.info.sex + "";
      this.updatePhone = this.info.phone;
      this.roles = this.info.roleNames.split(",");
    });
  },
};
</script>
<style scoped>
.card {
  height: 550px;
  margin-left: 10%;
  margin-right: 5%;
}
.head {
  margin-left: 35%;
}
.name {
  font-size: 24px;
  margin-top: 5%;
  text-align: center;
}
.card-text {
  margin-top: 2%;
  margin-left: 5%;
}
.first {
  margin-top: 10%;
}
.tabs {
  margin-right: 5%;
  height: 600px;
}
.red {
  color: red;
}
.label-text {
  font-size: 14px;
}
.margin-three {
  margin-top: 3%;
}
</style>