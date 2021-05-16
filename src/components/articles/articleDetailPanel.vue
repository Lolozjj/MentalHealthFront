<!-- 阅读文章详情面板  -->
<template>
  <div>
    <div class="article-box">
      <div class="title">{{article.title}}</div>
      <el-row class="tags">
        <el-col :span="2" v-for="(item,index) in tags" :key="index">
          <el-tag size="small ">{{item}}</el-tag>
        </el-col>
      </el-row>
      <el-row class="other">
        <el-col :span="5">
          <span>发布于：{{article.crtTime.substring(0,10)}}</span>
        </el-col>
        <el-col :span="4" :offset="7">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#lo-zan" />
          </svg>
          <span>赞 {{article.likeSum}}</span>
        </el-col>
        <el-col :span="4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#lo-yuedu" />
          </svg>
          <span>阅读 {{article.lookSum}}</span>
        </el-col>
        <el-col :span="4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#lo-pinglun" />
          </svg>
          <span>评论 {{article.commentSum}}</span>
        </el-col>
      </el-row>
      <div class="image">
        <el-image class="image-item" :src="article.imgUrl" fit="fill"></el-image>
      </div>
      <div class="content" v-html="article.content"></div>

      <div class="like" >
        <praise trueText falseText :size="60" :isAnimation="zan" :endEvent="clickZan"></praise>
        {{article.likeSum}}
      </div>
      <div>
        <el-button class="collect" @click="collectArticle">{{haveColllect?"已收藏":"马上收藏"}}</el-button>
      </div>
    </div>
    <div class="comment-box">
      <message-board :articleId="articleId"></message-board>
    </div>
  </div>
</template>

<script>
import MessageBoard from "../base/messageBoard.vue";
import praise from "../base/praise.vue";
import {
  getArticleByIdService,
  collectArticleService,
  haveCollectArticleService,
  likeArticleService,
  lookArticleService,
} from "@/utils/frontServer";
export default {
  components: { praise, MessageBoard },
  props: {
    articleId: {
      type: String,
    },
  },
  name: "",
  data() {
    return {
      article: {
        title: "“你总说自己没有安全感？”安全感，究竟是什么玄学？",
        tag: "科普,热爱",
        imgUrl:
          "https://ossimg.xinli001.com/20210325/9d29491f86a4e3150476a4dd3c7e8483.jpeg?x-oss-process=image/quality,Q_80",
        crtTime: "2020-07-11",
        likeSum: 100,
        lookSum: 2081,
        commentSum: 32,
        content: "nothing",
      },
      tags: [],
      haveColllect: false,
      zan: false,
    };
  },
  methods: {
      /**收藏文章 */
    collectArticle() {
      if (!this.utils.isFrontLogin()) {
        this.$message("请先登录");
      } else if (!this.haveColllect) {
        collectArticleService
          .setSucceed((msg) => {
            this.haveColllect = true;
            this.$message({
              message: "收藏成功",
              type: "success",
            });
          })
          .setParam({
            articleId: this.articleId,
          })
          .sendPostService();
      }
    },
    clickZan() {
        /**文章点赞 */
      likeArticleService
        .setSucceed((msg) => {
          this.article.likeSum++;
          this.$message({
            message: "点赞成功",
            type: "success",
          });
        })
        .setFail((msg) => {
          this.$message.error("系统出错了");
        })
        .setParam({
          id: this.articleId,
        })
        .sendPostService();
    },
  },
  created() {
    /**获取文章数据 */
    getArticleByIdService
      .setSucceed((msg) => {
        this.article = msg.data;
        this.tags = this.article.tag.split(",");
      })
      .setParam({
        id: this.articleId,
      })
      .sendGetService();
    /**初始化收藏状态 */
    if (this.utils.isFrontLogin()) {
      haveCollectArticleService
        .setSucceed((msg) => {
          this.haveColllect = true;
        })
        .setFail((msg) => {
          this.haveColllect = false;
        })
        .setParam({
          articleId: this.articleId,
        })
        .sendPostService();
    }
    /**增加文章阅读量 */
    lookArticleService
      .setSucceed((msg) => {
        this.article.lookSum++;
      })
      .setParam({
        id: this.articleId,
      })
      .sendPostService();
  },
};
</script>
<style scoped>
.article-box {
  background-color: white;
  border-radius: 10px;
  padding: 4% 3% 3% 3%;
}
.title {
  font-size: 24px;
  font-weight: 600;
}
.tags {
  margin-top: 2%;
}
.other {
  margin-top: 2%;
  color: rgb(153, 153, 153);
  font-size: 14px;
}
.image {
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
}
.content {
  margin-top: 5%;
}
.like {
  margin: 5% 40%;
  text-align: center;
}
.icon-size {
  font-size: 60px;
}
.collect {
  margin: 0 auto;
  display: block;
}
.comment-box {
  margin-top: 5%;
}
.image-item {
  width: 580px;
  height: 450px;
}
</style>