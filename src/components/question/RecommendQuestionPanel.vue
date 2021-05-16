<<!-- 推荐回答  -->
<template>
  <div>
    <div class="questions-item" v-for="(item) in questions" :key="item.id" @click="goQuestionDetail(item.id)">
      <el-row>
        <el-col :span="2">
          <el-avatar :src="item.imgUrl" :size="50"></el-avatar>
        </el-col>
        <el-col :span="17">
          <div class="title-text">{{item.title}}</div>
        </el-col>
        <el-col :span="3" :offset="2">
          <el-button class="go-answer-btn" size="mini">去回答</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="21" :offset="2" class="content-text">{{ item.content }}</el-col>
      </el-row>
      <el-row class="footer-item">
        <el-col :span="3" :offset="2">
          <span>{{timeParsing(item.crtTime)}}</span>
        </el-col>
        <el-col :span="5">
          <span>{{item.answerSum}}</span>人回答
        </el-col>
        <el-col :span="5">
          有
          <span>{{item.hugSum}}</span>人觉得问题很有意义
        </el-col>
      </el-row>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="pageSizes"
        :total="total"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import {
  getRecommendQuestion,
  getNewestQuestion,
  getHotQuestion,
} from "@/utils/frontServer";
export default {
  name: "",
  props: {
    questions: {
      type: Array,
      default: [
        {
          id: 0,
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "已婚，被身边亲戚背后议论，排挤怎么办？",
          des:
            "每次考试之前都很焦虑，可能因为心虚吧哈哈哈知道自己可能考的成绩不理想，但还是难以控制焦虑紧张的心情，越到考试越容易失眠，每次一想到自己达又不到自己的期望和目标就很急躁，不会自我调节情绪。特别有的时候做题越做错的越多，直接崩溃了……我甚至都能想象出考试时候的样子了，但还是很焦虑很紧张，我觉得这样太影响我考试了，希望得到大家的帮助，谢谢??",
          crtTime: "2021-1-31",
          answerNum: 20,
          niceNum: 1,
        },
        {
          id: 1,
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考试前太紧张、太焦虑，怎么学会自我调节？",
          des:
            "每次考试之前都很焦虑，可能因为心虚吧哈哈哈知道自己可能考的成绩不理想，但还是难以控制焦虑紧张的心情，越到考试越容易失眠，每次一想到自己达又不到自己的期望和目标就很急躁，不会自我调节情绪。特别有的时候做题越做错的越多，直接崩溃了……我甚至都能想象出考试时候的样子了，但还是很焦虑很紧张，我觉得这样太影响我考试了，希望得到大家的帮助，谢谢??",
          answerNum: 29,
          crtTime: "2021-1-31",
          niceNum: 1,
        },
        {
          id: 2,
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "已婚，被身边亲戚背后议论，排挤怎么办？",
          des:
            "每次考试之前都很焦虑，可能因为心虚吧哈哈哈知道自己可能考的成绩不理想，但还是难以控制焦虑紧张的心情，越到考试越容易失眠，每次一想到自己达又不到自己的期望和目标就很急躁，不会自我调节情绪。特别有的时候做题越做错的越多，直接崩溃了……我甚至都能想象出考试时候的样子了，但还是很焦虑很紧张，我觉得这样太影响我考试了，希望得到大家的帮助，谢谢??",
          crtTime: "2021-1-31",
          answerNum: 20,
          niceNum: 1,
        },
        {
          id: 3,
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考试前太紧张、太焦虑，怎么学会自我调节？",
          des:
            "每次考试之前都很焦虑，可能因为心虚吧哈哈哈知道自己可能考的成绩不理想，但还是难以控制焦虑紧张的心情，越到考试越容易失眠，每次一想到自己达又不到自己的期望和目标就很急躁，不会自我调节情绪。特别有的时候做题越做错的越多，直接崩溃了……我甚至都能想象出考试时候的样子了，但还是很焦虑很紧张，我觉得这样太影响我考试了，希望得到大家的帮助，谢谢??",
          answerNum: 29,
          crtTime: "2021-1-31",
          niceNum: 1,
        },
      ],
    },
    activeMenu: {
      type: Number,
    },
  },
  data() {
    return {
      pageSizes: [10, 20, 25, 50],
      pageSize: 10,
      curPage: 1,
      total: 400,
    };
  },
  methods: {
    timeParsing(time) {
      var now = new Date();
      return "1小时前";
    },
    goQuestionDetail(id){
        this.$router.push({ path: "QuestionDetail", query: { id: id } });
    },
    activeItem(val) {
      if (val === 2) {
        this.getRecommendQuestion();
      } else if (val === 3) {
        this.getNewestQuestion();
      } else if (val === 4) {
        this.getHotQuestion();
      }
    },
    getRecommendQuestion() {
      getRecommendQuestion
        .setSucceed((msg) => {
          console.log(msg.data);
          this.questions = msg.data.list;
          this.total = msg.data.total;
        })
        .setParam({
          curPage: this.curPage,
          pageSize: this.pageSize,
        })
        .sendGetService();
    },
    getNewestQuestion() {
      getNewestQuestion
        .setSucceed((msg) => {
          this.questions = msg.data.list;
          this.total = msg.data.total;
        })
        .setParam({
          curPage: this.curPage,
          pageSize: this.pageSize,
        })
        .sendGetService();
    },
    getHotQuestion() {
      getHotQuestion
        .setSucceed((msg) => {
          this.questions = msg.data.list;
          this.total=msg.data.total
        })
        .setParam({
          curPage: this.curPage,
          pageSize: this.pageSize,
        })
        .sendGetService();
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.activeItem(this.activeMenu);
    },
    handleCurrentChange(curPage) {
      this.curPage = curPage;
      this.activeItem(this.activeMenu);
    },
  },
  created() {
    this.activeItem(this.activeMenu);
  },
};
</script>
<style scoped>
.questions-item {
  background-color: white;
  border-radius: 10px;
  padding: 2% 3%;
  margin-top: 3%;
  cursor: pointer;
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
.content-text {
  color: rgb(153, 153, 153);
}
.footer-item {
  margin-top: 3%;
  font-size: 13px;
  color: rgb(153, 153, 153);
}
.pagination{
  margin: 5% 0 0 25%;
}
</style>