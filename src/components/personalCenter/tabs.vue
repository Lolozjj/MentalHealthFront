<!-- 主页tabs组件 -->
<template>
  <div>
    <div class="header">
      <el-row>
        <el-col :span="2" :offset="2" v-for="(item, index) in headItems" :key="index">
          <span
            :class="['head-item', { active: index == headIndex }]"
            @click="menuActive(index)"
          >{{ item }}</span>
        </el-col>
      </el-row>
    </div>
    <div class="panel">
      <div class="home-page-panel">
        <div class="article-panel" v-if="headIndex==0">
          <el-row
            class="article-item"
            v-for="(item) in articles"
            :key="item.id"
            @click.native="lookArticle(item.id)"
          >
            <el-col :span="4" class="img">
              <el-image class="img-item" :src="item.imgUrl"></el-image>
            </el-col>
            <el-col :span="20" class="right-text">
              <div class="title">{{ item.title }}</div>
              <div class="other">
                <span class="ml">{{ item.crtTime.substring(0,10) }}</span>
                <el-tag class="ml" size="mini"># {{item.tag}}</el-tag>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="article-panel" v-if="headIndex==1">
          <el-row
            class="article-item"
            v-for="(item) in quesitons"
            :key="item.id"
            @click.native="lookQuestion(item.id)"
          >
            <el-col :span="4" class="img">
              <el-image
                class="img-item"
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F40%2F48%2F81573d01391b29c.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622991389&t=afe8a9f75bf6f268cba27c24e1cbb614"
              ></el-image>
            </el-col>
            <el-col :span="20" class="right-text">
              <div class="title">{{ item.title }}</div>
              <div class="other">
                <span class="ml">{{ item.crtTime.substring(0,10) }}</span>
                <el-tag class="ml" size="mini"># {{item.tag}}</el-tag>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="article-panel" v-if="headIndex==2">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文章" name="article">用户管理</el-tab-pane>
            <el-tab-pane label="问题" name="question">配置管理</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMyArticleService, getMyQuestionService } from "@/utils/frontServer";
export default {
  name: "tabs",
  data() {
    return {
      headIndex: 0,
      headItems: ["文章", "问题"],
      articles: [],
      quesitons: [],
      activeName:""
    };
  },
  methods: {
    lookArticle(id) {
      this.$router.push({ path: "/ArticleDetail", query: { id: id } });
    },
    lookQuestion() {
      this.$router.push({ path: "/QuestionDetail", query: { id: id } });
    },
    menuActive(index) {
      this.headIndex = index;
    },
    getArticle() {
      getMyArticleService
        .setSucceed((msg) => {
          this.articles = msg.data;
        })
        .sendGetService();
    },
    getQuestion() {
      getMyQuestionService
        .setSucceed((msg) => {
          this.quesitons = msg.data;
          console.log(this.quesitons);
        })
        .sendGetService();
    },
  },
  created() {
    this.getArticle();
    this.getQuestion();
  },
};
</script>
<style scoped>
.header {
  text-align: center;
  padding: 2% 0;
  letter-spacing: 2px;
}
.active {
  border-bottom: 3px solid rgb(56, 194, 201);
  color: rgb(49, 105, 183);
}
.head-item:hover {
  border-bottom: 3px solid rgb(56, 194, 201);
  color: rgb(49, 105, 183);
  cursor: pointer;
}
.home-page-panel {
  border-top: 1px solid gainsboro;
}
.article-panel {
  padding: 2% 5% 2% 5%;
}
.article-item {
  margin: 1% 0 0 0;
  cursor: pointer;
}

.img-item {
  width: 80px;
  height: 80px;
}
.other {
  color: #999;
  position: absolute;
  bottom: 10%;
}
.title {
  font-size: 20px;
}
</style>