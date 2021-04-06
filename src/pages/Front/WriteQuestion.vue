<!-- 提问界面 -->
<template>
  <div class="question-box">
    <head-menu></head-menu>
    <el-row>
      <el-col :span="13" :offset="2">
        <div class="wirte-question-panel">
          <div>
            <span class="head-text">发布问题:</span>
            <el-radio-group
              v-model="is_anonymous"
              size="mini"
              style="margin-left: 5%"
            >
              <el-radio-button label="匿名"></el-radio-button>
              <el-radio-button label="实名"></el-radio-button>
            </el-radio-group>
          </div>
          <el-input
            class="title-input"
            placeholder="问题标题，5-20字，必填"
          ></el-input>
          <p>举例：</p>
          <ul>
            <li>大二学生，无法和室友相处，很容易受影响怎么办？</li>
            <li>情绪低落，很丧，怎么确认我是否患有抑郁症呢？3个月了</li>
          </ul>
          <el-input
            type="textarea"
            :rows="10"
            placeholder="描述问题（50~500字之间，必填）
建议：
【年龄-性别】
【大致经过】
【内心感受】
【经历了多长时间】"
            v-model="content"
          >
          </el-input>
          <div style="color:rgb(153,153,153);margin-top:3%">创建几个标签，可以让大家更容易看到你的问题哦</div>
          <lo-tags :dynamicTags="tags"  style="margin-top:3%"></lo-tags>
          <el-button class="sure-btn">发布问题</el-button>
        </div>
      </el-col>
      <el-col :span="6" :offset="1">
        <question-rigth-panel></question-rigth-panel>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import headMenu from "../../components/home/headMenu.vue";
import QuestionRigthPanel from '../../components/question/QuestionRigthPanel.vue';
import LoTags from '../../components/self/lo-tags.vue';
export default {
  components: { headMenu, LoTags, QuestionRigthPanel },
  name: "WriteQuestion",
  data() {
    return {
      is_anonymous: "匿名",
      content: "",
      tags:[],
    };
  },
  methods: {},
};
</script>
<style scoped>
.wirte-question-panel {
  background-color: white;
  border-radius: 15px;
  padding: 5%;
}
.question-box {
  background-color: rgb(243, 244, 245);
  padding-top: 8%;
  height: 100vh;
}
.head-text {
  font-weight: 600;
  font-size: 20px;
}
.title-input {
  margin-top: 2%;
}
.sure-btn{
  margin-top: 10%;
  background-color: rgb(11,139,255);
  color: white;
  width: 100%;
}
</style>