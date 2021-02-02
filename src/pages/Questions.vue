<!-- 所有提问页面  -->
<template>
  <div class="question-box">
    <head-menu></head-menu>
    <div class="content">
      <el-row>
        <el-col :span="13" :offset="2">
          <question-head-panel></question-head-panel>
          <all-questions-panel></all-questions-panel>
        </el-col>
        <el-col :span="6" :offset="1">
          <question-rigth-panel></question-rigth-panel>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeadMenu from "../components/home/headMenu.vue";
import AllQuestionsPanel from '../components/question/AllQuestionsPanel.vue';
import QuestionHeadPanel from '../components/question/QuestionHeadPanel.vue';
import QuestionRigthPanel from '../components/question/QuestionRigthPanel.vue';
export default {
  name: "Questions",
  data() {
    return {};
  },
  components: { HeadMenu, QuestionRigthPanel, QuestionHeadPanel, AllQuestionsPanel },
  methods: {},
};
</script>
<style scoped>
.question-box {
    
    background-color: rgb(243,244,245);
}
.content {
  margin-top: 4.7%;
  padding: 3% 3%;
}
</style>