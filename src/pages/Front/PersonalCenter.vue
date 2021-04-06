<!-- 个人主页 -->
<template>
  <div>
    <head-menu></head-menu>
    <div class="personal-center-box">
      <el-row>
        <el-col :span="11" :offset="4">
          <div class="left-box">
            <postcard></postcard>
            <tabs class="tabs"></tabs>
          </div>
        </el-col>
        <el-col :span="5" :offset="1">
          <div class="right-box">
            <write-and-answer></write-and-answer>
            <recommend-article class="recommend-article"></recommend-article>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import headMenu from "@/components/home/headMenu";
import postcard from "@/components/personalCenter/postcard";
import Tabs from "../../components/personalCenter/tabs.vue";
import WriteAndAnswer from "../../components/personalCenter/writeAndAnswer.vue";
import RecommendArticle from '../../components/personalCenter/RecommendArticle.vue';
export default {
  name: "PersonalCenter",
  data() {
    return {};
  },

  components: {
    "head-menu": headMenu,
    postcard: postcard,
    Tabs,
    WriteAndAnswer,
    RecommendArticle,
  },
  methods: {},
};
</script>
<style scoped>
.personal-center-box {
  background-color: rgb(238, 238, 238);
}
.left-box {
  margin-top: 15%;
  padding-bottom: 5%;
}
.right-box {
  margin-top: 33%;
  padding-bottom: 5%;
}
.tabs {
  margin-top: 5%;
  background-color: white;
}
.recommend-article{
  margin-top: 7%;
}
</style>