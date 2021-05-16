<!-- 所有文章页面 -->
<template>
  <div class="article-box">
    <head-menu></head-menu>
    <div class="content">
      <el-row>
        <el-col :span="13" :offset="2"><all-articles-panel></all-articles-panel></el-col>
        <el-col :span="6" style="margin-left:2%"><right-article-panel></right-article-panel></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import AllArticlesPanel from "../../components/articles/allArticlesPanel.vue";
import RightArticlePanel from '../../components/articles/rightArticlePanel.vue';
import HeadMenu from "../../components/home/headMenu.vue";
export default {
  name: "Articles",
  data() {
    return {};
  },

  components: { HeadMenu, AllArticlesPanel, RightArticlePanel },

  methods: {},
};
</script>
<style scoped>
.article-box{
    background-color: rgb(243,244,245);
}
.content {
  margin-top: 3%;
  padding: 3% 3%;
}
</style>