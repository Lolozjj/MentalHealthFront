<!--  -->
<template>
  <div>
    <div class="panel-box">
      <el-row>
        <el-col :span="6">
          <el-input
            v-model="searchId"
            placeholder="输入编号搜索"
            size="mini"
            style="width: 80%"
            clearable
          ></el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="searchUser"
            placeholder="输入用户编号搜索"
            size="mini"
            style="width: 80%"
            clearable
          ></el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="searchTitle"
            placeholder="输入文章标题搜索"
            size="mini"
            style="width: 80%"
            clearable
          ></el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" size="mini" @click="search">搜索</el-button>
          <el-button size="mini" @click="resetParam">重置</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="articleData"
        :header-cell-style="{ textAlign: 'center' }"
        :cell-style="{ textAlign: 'center' }"
      >
        <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column label="编号" width="120" sortable>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="标题" width="300" sortable>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title.substring(0,15) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="标签" width="130" sortable>
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{
              scope.row.tag
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="作者" width="200" sortable>
          <template slot-scope="scope">
            <el-tag style="margin-left: 10px">
              {{
              scope.row.crtName
              }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="220" sortable>
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{
              scope.row.crtTime
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="deleteArticle(scope.$index, scope.row.id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  deleteArticleByIdService,
  getArticleBySelectiveService,
} from "@/utils/server";
export default {
  name: "",
  data() {
    return {
      searchId: "",
      searchUser: "",
      searchTitle: "",
      articleData: [],
    };
  },
  methods: {
    search() {},
    resetParam() {
      this.searchId = "";
      this.searchId = "";
      this.searchTitle = "";
    },
    deleteArticle(index, id) {
      deleteArticleByIdService(id, [], (data) => {
        this.$message({
          message: "删除成功",
          type: "success",
        });
        this.articleData.splice(index, 1);
      });
    },
  },
  created() {
    getArticleBySelectiveService([null, null, null], (data) => {
      this.articleData = data.data;
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