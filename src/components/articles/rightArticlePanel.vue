<!-- 右侧文章相关面板  -->
<template>
  <div class="article-box">
    <div class="head-title">推荐文章</div>
    <el-divider></el-divider>
    <el-row>
      <div class="article-item" v-for="item in articles" :key="item.id" @click="goDetail(item.id)">
        <el-row>
          <el-col :span="1">#</el-col>
          <el-col :span="23">{{item.title.length>15?item.title.substring(0,21):item.title}}...</el-col>
        </el-row>
      </div>
      <el-col :span="12">
        <el-button class="btn" type="primary" @click="goWirteArticle">写文章</el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="btn" type="primary" @click="goAllArticle">全部主题</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getRecommendArticleService } from "@/utils/frontServer";
export default {
  name: "",
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "你看起来很不错",
        },
        {
          id: 1,
          title: "不要灰心，你是最棒的！",
        },
        {
          id: 1,
          title: "你看起来很不错",
        },
        {
          id: 1,
          title: "不要灰心，你是最棒的！",
        },
        {
          id: 1,
          title: "你看起来很不错",
        },
        {
          id: 1,
          title: "不要灰心，你是最棒的！",
        },
      ],
    };
  },
  methods: {
    goDetail(id) {
      this.$router.push({ path: "/ArticleDetail", query: { id: id } });
    },
    goWirteArticle() {
      this.$router.push("WriteArticle");
    },
    goAllArticle(){
      this.$router.push("Articles");
    },
    getRecommend() {
      getRecommendArticleService
        .setSucceed((msg) => {
          this.articles = msg.data;
        })
        .sendGetService();
    },
  },
  created() {
    this.getRecommend();
  },
};
</script>
<style scoped>
.article-box {
  background-color: white;
  border-radius: 15px;
  padding: 1% 0;
}
.head-title {
  font-size: 20px;
  font-weight: 600;
  margin: 5% 5% 0 5%;
}
.article-item {
  margin: 5% 5%;
  cursor: pointer;
  color: rgb(117, 116, 116);
  font-size: 14px;
}
.article-item:first-child {
  margin: 0% 5%;
  cursor: pointer;
  color: rgb(117, 116, 116);
}
.article-item:hover {
  color: rgb(0, 0, 0);
}
.btn {
  margin: 5% auto;
  display: block;
  width: 80%;
}
</style>