<!-- 阅读文章详情  -->
<template>
  <div class="article-box">
    <head-menu></head-menu>
    <div class="content">
      <el-row>
        <el-col :span="13" :offset="2">
          <ArticleDetailPanel :articleId="this.$route.query.id"></ArticleDetailPanel>
        </el-col>
        <el-col :span="6"  style="margin-left:2%"><RightArticlePanel></RightArticlePanel></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ArticleDetailPanel from '../../components/articles/articleDetailPanel.vue';
import HeadMenu from "../../components/home/headMenu.vue";
import RightArticlePanel from '../../components/articles/rightArticlePanel.vue';
export default {
  name: "",
  data() {
    return {};
  },
  components: { HeadMenu, ArticleDetailPanel,RightArticlePanel },
  methods: {},
  created() {
  },
};
</script>
<style scoped>
.article-box {
  background-color: rgb(243, 244, 245);
}
.content {
  margin-top: 3%;
  padding: 3% 3%;
}
</style>