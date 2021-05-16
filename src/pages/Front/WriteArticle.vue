<!-- 写文章 -->
<template>
  <div>
    <head-menu></head-menu>
    <div class="markdown">
      <el-row>
        <el-col :span="10">
          <el-input v-model="title" placeholder="点击输入文章标题"></el-input>
        </el-col>
        <el-col :span="2">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8756/article/image"
            :show-file-list="false"
            name="file"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
        <el-col :span="5">
          <lo-tags :dynamicTags="tags" class="tags"></lo-tags>
        </el-col>
        <el-col :span="4">
          <el-select class="select-type" v-model="selectType" size="small" placeholder="请选择文章归类">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.des"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <span class="upload-article" @click="sendArticle">
            <i class="el-icon-upload"></i> 发布文章
          </span>
        </el-col>
      </el-row>
      <mavon-editor ref="md" class="editor" v-model="content" :value="content"></mavon-editor>
    </div>
  </div>
</template>

<script>
import HeadMenu from "../../components/home/headMenu.vue";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import LoTags from "../../components/self/lo-tags.vue";
import {
  writeArticleService,
  getAllArticleTypeService,
} from "@/utils/frontServer";
export default {
  name: "WriteArticle",
  data() {
    return {
      title: "",
      tags: [],
      types: [
        {
          id: 1,
          name: "心理科普",
        },
      ],
      selectType: "",
      content: "",
      image:"",
    };
  },
  components: { HeadMenu, mavonEditor, LoTags },
  methods: {
    handleAvatarSuccess(res, file, files){
      this.image=res.data;
      console.log(res);
    },
    getArticleType() {
      getAllArticleTypeService
        .setSucceed((msg) => {
          this.types = msg.data;
        })
        .sendGetService();
    },
    sendArticle() {
      var tag = this.tags[0];
      for (var i = 0; i < this.tags.length; i++) {
        tag += "," + this.tags[i];
      }
      writeArticleService
        .setSucceed((msg) => {
          this.$message({
            showClose: true,
            message: "发布成功",
            type: "success",
          });
        })
        .setParam({
          title: this.title,
          type: this.selectType,
          tag: tag,
          content: this.$refs.md.d_render,
          imgUrl:this.image,
        })
        .sendPostService();
    },
  },
  created() {
    this.getArticleType();
  },
};
</script>
<style scoped>
.markdown {
  margin-top: 4.9%;
  padding: 1%;
}
.editor {
  height: 550px;
  margin-top: 1%;
}
.tags {
  margin: 0.5%;
}
.upload-article {
  color: rgb(153, 153, 153);
  font-size: 18px;
  line-height: 2em;
  cursor: pointer;
  float: right;
  margin-right: 15%;
}
.upload-article:hover {
  color: rgb(11, 139, 255);
}
.select-type {
  margin-top: 0.5%;
}
.avatar-uploader{
  margin-left: 5%;
  margin-top: 5%;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 20px;
  height: 20px;
  text-align: center;
}
.avatar {
  width: 20px;
  height: 20px;
  display: block;
}
</style>