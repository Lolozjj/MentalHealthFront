<!-- 问题获赞数、提问数、点赞数信息面板  -->
<template>
  <div class="sum-info-box">
    <el-row class="sum">
      <el-col :span="8">
        <div class="sum-text">{{ questionSum }}</div>提问数
      </el-col>
      <el-col :span="8">
        <div class="sum-text">{{ answerSum }}</div>回答数
      </el-col>
      <el-col :span="8">
        <div class="sum-text">{{ hugSum }}</div>关爱数
      </el-col>
    </el-row>
    <el-row class="sum-btn-group">
      <el-col :span="12">
        <el-button type="primary" class="sum-btn" @click="goWriteQuestion">我要提问</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" class="sum-btn" @click="goAllQuestion">全部问题</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getUserQuestionService } from "@/utils/frontServer";
export default {
  name: "MyQuestionSumInfo",
  data() {
    return {
      questionSum: 0,
      answerSum: 0,
      hugSum: 0,
    };
  },
  methods: {
    goWriteQuestion() {
      this.$router.push("WriteQuestion");
    },
    goAllQuestion(){
      this.$router.push("Questions");
    }
  },
  created() {
    getUserQuestionService
      .setSucceed((msg) => {
        this.questionSum = msg.data.questionTotal;
        this.hugSum = msg.data.hugTotal;
      })
      .sendGetService();
  },
};
</script>
<style scoped>
.sum {
  text-align: center;
  font-size: 15px;
  color: rgb(153, 153, 153);
}
.sum-info-box {
  padding: 15% 5%;
}
.sum-text {
  font-size: 30px;
  color: rgb(11, 139, 255);
  margin-bottom: 5%;
}
.sum-btn-group {
  margin-top: 15%;
}
.sum-btn {
  width: 80%;
  margin: 0 auto;
  display: block;
}
</style>