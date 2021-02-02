<!-- 写文章 -->
<template>
  <div>
    <head-menu></head-menu>
    <div class="markdown">
      <el-row>
        <el-col :span="12"
          ><el-input v-model="title" placeholder="点击输入文章标题"></el-input>
        </el-col>
        <el-col :span="5">
          <lo-tags :dynamicTags="tags" class="tags"></lo-tags
        ></el-col>
        <el-col :span="4"
          ><el-select class="select-type" v-model="selectType" size="small" placeholder="请选择文章归类">
            <el-option
              v-for="item in types"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option> </el-select
        ></el-col>
        <el-col :span="3"
          ><span class="upload-article"
            ><i class="el-icon-upload"></i> 发布文章</span
          ></el-col
        >
      </el-row>
      <mavon-editor class="editor"></mavon-editor>
    </div>
  </div>
</template>

<script>
import HeadMenu from "../components/home/headMenu.vue";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import LoTags from "../components/self/lo-tags.vue";
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
      selectType:"",
      inputVisible: false,
      inputValue: "",
    };
  },

  components: { HeadMenu, mavonEditor, LoTags },
};
</script>
<style scoped>
.markdown {
  margin-top: 4.9%;
  padding-top: 0.2%;
}
.editor {
  height: 500px;
  margin-top: 0.2%;
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
.select-type{
  margin-top: 0.5%;
}
</style>