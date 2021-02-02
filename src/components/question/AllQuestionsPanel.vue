<!-- 问题展示面板 -->
<template>
  <div class="all-question-box">
    <div class="questions-item" v-for="(item, index) in questions" :key="index">
      <el-row>
        <el-col :span="2"
          ><el-avatar :src="item.headImg" :size="40"></el-avatar
        ></el-col>
        <el-col :span="19" >
          <span class="title-text">{{ item.title }}</span></el-col
        >
        <el-col :span="3">
          <el-button class="go-answer-btn" size="mini"
            >去回答</el-button
          ></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="21" :offset="2" class="content-text">
          {{ item.content }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="21" :offset="2" style="margin-top:5%">
          <span>{{ item.createTime }}</span>
          <span>回答{{ item.answerNnum }}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          id: 0,
          headImg:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考试前太紧张、太焦虑，怎么学会自我调节？",
          content:
            "每次考试之前都很焦虑，可能因为心虚吧哈哈哈知道自己可能考的成绩不理想，但还是难以控制焦虑紧张的心情，越到考试越容易失眠，每次一想到自己达又不到自己的期望和目标就很急躁，不会自我调节情绪。特别有的时候做题越做错的越多，直接崩溃了……我甚至都能想象出考试时候的样子了，但还是很焦虑很紧张，我觉得这样太影响我考试了，希望得到大家的帮助，谢谢??",
          answerNnum: 0,
          createTime: "2021-1-31",
        },
        {
          id: 0,
          headImg:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考试前太紧张、太焦虑，怎么学会自我调节？",
          content:
            "每次考试之前都很焦虑，可能因为心虚吧哈哈哈知道自己可能考的成绩不理想，但还是难以控制焦虑紧张的心情，越到考试越容易失眠，每次一想到自己达又不到自己的期望和目标就很急躁，不会自我调节情绪。特别有的时候做题越做错的越多，直接崩溃了……我甚至都能想象出考试时候的样子了，但还是很焦虑很紧张，我觉得这样太影响我考试了，希望得到大家的帮助，谢谢??",
          answerNnum: 0,
          createTime: "2021-1-31",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style scoped>
.all-question-box {
  margin-top: 5%;
}
.questions-item {
  background-color: white;
  border-radius: 10px;
  padding: 2% 3%;
  margin-top: 3%;
}
.title-text {
  font-size: 20px;
  font-weight: 600;
  line-height: 3em;
}
.go-answer-btn {
  color: white;
  background-color: rgb(11, 139, 255);
  border-radius: 5px;
}
.content-text{
    color: rgb(153,153,153);
}
</style>