<!-- 个人主页 -->
<template>
  <div>
    <HeadMenu></HeadMenu>
    <div class="personal-center-box">
      <el-row>
        <el-col :span="11" :offset="4">
          <div class="left-box">
            <Postcard></Postcard>
            <Tabs class="tabs"></Tabs>
          </div>
        </el-col>
        <el-col :span="5" :offset="1">
          <div class="right-box">
            <WriteAndAnswer></WriteAndAnswer>
            <RecommendArticle class="recommend-article"></RecommendArticle>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Tabs from "../../components/personalCenter/tabs.vue";
import WriteAndAnswer from "../../components/personalCenter/writeAndAnswer.vue";
import RecommendArticle from '../../components/personalCenter/RecommendArticle.vue';
import Postcard from '../../components/personalCenter/postcard.vue';
import HeadMenu from '../../components/home/headMenu.vue';
export default {
  name: "PersonalCenter",
  data() {
    return {};
  },

  components: {
    Tabs,
    WriteAndAnswer,
    RecommendArticle,
    Postcard,
    HeadMenu,
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