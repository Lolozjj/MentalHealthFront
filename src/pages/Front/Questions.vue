<!-- 所有提问页面  -->
<template>
  <div class="question-box">
    <HeadMenu></HeadMenu>
    <div class="content">
      <el-row>
        <el-col :span="13" :offset="2">
          <AllQuestionsPanel></AllQuestionsPanel>
        </el-col>
        <el-col :span="6" :offset="1">
          <QuestionRigthPanel></QuestionRigthPanel>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeadMenu from "../../components/home/headMenu.vue";
import AllQuestionsPanel from '../../components/question/AllQuestionsPanel.vue';
import QuestionRigthPanel from '../../components/question/QuestionRigthPanel.vue';
export default {
  name: "Questions",
  data() {
    return {};
  },
  components: { HeadMenu, QuestionRigthPanel, AllQuestionsPanel },
  methods: {},
};
</script>
<style scoped>
.question-box {
    
    background-color: rgb(243,244,245);
}
.content {
  margin-top: 3%;
  padding: 3% 3%;
}
</style>