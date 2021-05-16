<!-- 推荐回答组件 -->
<template>
  <div>
    <div class="questions-item" v-for="(item) in questions" :key="item.id">
      <el-row>
        <el-col :span="2">
          <el-avatar :src="item.imgUrl" :size="50"></el-avatar>
        </el-col>
        <el-col :span="4">
          <div class="name-text">{{item.name}}</div>
          <div class="time-text">{{timeParsing(item.crtTime)}} 回答了</div>
        </el-col>
        <el-col :span="3" :offset="15">
          <el-button class="go-answer-btn" size="mini">去回答</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="19" :offset="2">
          <span class="title-text">{{ item.title }}</span>
        </el-col>
        <el-col :span="21" :offset="2" class="content-text">{{ item.content }}</el-col>
      </el-row>
      <el-row class="other">
        <el-col :span="3" :offset="2" class="other-item">
          <attention :isAnimation="item.attentionAnimation"></attention>
        </el-col>
        <el-col :span="3" :offset="2" class="other-item">
          <praise text="赞一赞" :isAnimation="item.praiseAnimation"></praise>
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
import { getRecommendAnswerService } from "@/utils/frontServer";
import Attention from "../base/attention.vue";
import praise from "../base/praise.vue";
export default {
  name: "",
  data() {
    return {
      questions: [
        {
          id: 0,
          name: "林东",
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考试前太紧张、太焦虑，怎么学会自我调节？",
          content:
            "每次考试之前都很焦虑，可能因为心虚吧哈哈哈知道自己可能考的成绩不理想，但还是难以控制焦虑紧张的心情，越到考试越容易失眠，每次一想到自己达又不到自己的期望和目标就很急躁，不会自我调节情绪。特别有的时候做题越做错的越多，直接崩溃了……我甚至都能想象出考试时候的样子了，但还是很焦虑很紧张，我觉得这样太影响我考试了，希望得到大家的帮助，谢谢??",
          crtTime: "2021-1-31",
          praise: 20,
          praiseAnimation: false,
          attentionAnimation: false,
        },
        {
          id: 0,
          name: "张三",
          headImg:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考试前太紧张、太焦虑，怎么学会自我调节？",
          answer:
            "每次考试之前都很焦虑，可能因为心虚吧哈哈哈知道自己可能考的成绩不理想，但还是难以控制焦虑紧张的心情，越到考试越容易失眠，每次一想到自己达又不到自己的期望和目标就很急躁，不会自我调节情绪。特别有的时候做题越做错的越多，直接崩溃了……我甚至都能想象出考试时候的样子了，但还是很焦虑很紧张，我觉得这样太影响我考试了，希望得到大家的帮助，谢谢??",
          praise: 29,
          crtTime: "2021-1-31",

          praiseAnimation: false,
          attentionAnimation: false,
        },
      ],
      pageSizes: [10, 20, 25, 50],
      pageSize: 10,
      curPage: 1,
      total: 400,
    };
  },
  components: { praise, Attention },
  methods: {
    handleSizeChange(size) {
      this.pageSize = size;
      this.getRecommendAnswer();
    },
    handleCurrentChange(curPage) {
      this.getRecommendAnswer();
      this.curPage = curPage;
    },
    timeParsing(time) {
      var now = new Date();
      return "1小时前";
    },
    getRecommendAnswer() {
      getRecommendAnswerService
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
  },
  created() {
    this.getRecommendAnswer();
  },
};
</script>
<style scoped>
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
.content-text {
  color: rgb(153, 153, 153);
}
.name-text {
  font-size: 13px;
  line-height: 4em;
  font-weight: 600;
}
.time-text {
  font-size: 13px;
  color: rgb(153, 153, 153);
}
.other {
  margin: 3% 0;
  color: rgb(188, 194, 207);
}
.icon-size {
  font-size: 30px;
}
.other-item {
  cursor: pointer;
}
.pagination{
  margin: 5% 0 0 25%;
}
</style>