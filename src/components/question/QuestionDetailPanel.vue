<!--  -->
<template>
  <div>
    <div class="question-detail-box">
      <el-row>
        <el-col :span="2">
          <el-avatar :src="question.imgUrl"></el-avatar>
        </el-col>
        <el-col :span="18">
          <b class="title">{{question.title}}</b>
        </el-col>
        <el-col :span="2" :offset="1">
          <span class="answer-sum">{{question.answerSum}}个回答</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="21" :offset="2">
          <span class="contetnt">{{question.content}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="2">
          <el-tag
            class="tag"
            size="mini"
            v-for="(item,index) in question.tags.split(',')"
            :key="index"
          >{{item}}</el-tag>
        </el-col>
      </el-row>
      <el-row class="other">
        <el-col :span="4" :offset="2">
          <span>{{question.crtTime.substring(0,10)}}</span>
        </el-col>
        <el-col :span="4" :offset="2">
          <span>阅读数{{question.lookSum}}</span>
        </el-col>
      </el-row>
    </div>
    <div class="center-box">
      <el-row>
        <el-col :span="8">
          <el-row style="margin-left:-15%">
            <el-col :span="12">
              <svg class="icon icon-size" aria-hidden="true" style="float:right">
                <use xlink:href="#lo-agreement" />
              </svg>
            </el-col>
            <el-col :span="12" class="po" @click.native="hug">
              <span class="center-text">给个抱抱</span>
              <span class="center-num">{{question.hugSum}}</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row style="margin-left:-15%">
            <el-col :span="12">
              <svg class="icon icon-size2" aria-hidden="true" style="float:right">
                <use xlink:href="#lo-shoucang" />
              </svg>
            </el-col>
            <el-col :span="12" class="po" @click.native="collect">
              <span class="center-text">{{haveCollect?"已收藏":"收藏问题"}}</span>
              <span class="center-num">{{question.collectSum}}</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row style="margin-left:-15%">
            <el-col :span="12">
              <svg class="icon icon-size2" aria-hidden="true" style="float:right">
                <use xlink:href="#lo-liaotian" />
              </svg>
            </el-col>
            <el-col :span="12" class="po" @click.native="displayWritePanel">
              <span class="center-text">我来回答</span>
              <span class="center-num">{{question.answerSum}}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div v-show="displayWrite" class="witer-answer-box">
      <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="writeAnswer"></el-input>
      <el-button class="send-answer" @click="sendAnswer">提交回答</el-button>
    </div>
    <div class="comment-box" v-for="item in answers" :key="item.id">
      <el-row>
        <el-col :span="2">
          <el-avatar class="comment-img" :src="item.imgUrl"></el-avatar>
        </el-col>
        <el-col :span="2">
          <span class="comment-name">{{item.crtName}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="2">
          <span class="comment-content">{{item.content}}</span>
        </el-col>
      </el-row>
      <el-row class="comment-other">
        <el-col :span="2" :offset="2">
          <div class="po">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#lo-guanzhu" />
            </svg>
            <span>关注</span>
          </div>
        </el-col>
        <el-col :span="2" :offset="2">
          <div class="po" @click="zanAnswer(item)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#lo-zan" />
            </svg>
            <span>有用{{item.likeSum}}</span>
          </div>
        </el-col>
        <el-col :span="4" :offset="2">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#lo-time" />
            </svg>
            <span>{{item.crtTime.substring(0,10)}}</span>
          </div>
        </el-col>
        <el-col :span="2" :offset="2">
          <div class="po">
            <span>举报</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {
  getQuestionByIdService,
  hugQuestionService,
  collectQuestionService,
  haveCollectQuestionService,
  getAnswerByQuestionIdService,
  writeAnswerService,
  zanAnswerService,
} from "@/utils/frontServer";
export default {
  name: "",
  props: {
    questionId: {
      type: String,
    },
  },
  data() {
    return {
      writeAnswer: "",
      displayWrite: false,
      haveCollect: false,
      question: {
        id: 1,
        title: "想脱单进阶当海王，一定需要改变回避型人格吗？",
        crtTime: "2020-06-11",
        lookSum: 60,
        likeSum: 23,
        collectSum: 2,
        answerSum: 16,
        imgUrl: "https://lapp.xinli001.com/images/website-mobile/unname.png",
        content:
          "我的主要目的就是脱单然后当海王，别问为什么，问就是马斯洛需求需要满足",
        tags: "爱情,金钱",
      },
      answers: [
        {
          id: 1,
          crtTime: "2020-06-30",
          imgUrl:
            "https://ossimg.xinli001.com/20210112/f870fd8d0ef5dddcebb9bcaf30367ac8.jpg!80",
          name: "董芬",
          crtUser: 1,
          content: "你说的对",
          likeSum: 1,
        },
      ],
    };
  },
  methods: {
    zanAnswer(answer) {
      zanAnswerService
        .setSucceed((msg) => {
          answer.likeSum++;
          this.$message({
            message: "点赞成功",
            type: "success",
          });
        })
        .setParam({
          id: answer.id,
        })
        .sendPostService();
    },
    displayWritePanel() {
      this.displayWrite = true;
    },
    hug() {
      hugQuestionService
        .setSucceed((msg) => {
          this.$message({
            message: "谢谢你",
            type: "success",
          });
          this.question.hugSum++;
        })
        .setParam({
          id: this.questionId,
        })
        .sendPostService();
    },
    getQuestionDetail() {
      getQuestionByIdService
        .setSucceed((msg) => {
          this.question = msg.data;
        })
        .setParam({
          id: this.questionId,
        })
        .sendGetService();
    },
    havaCollectQuestion() {
      if (this.utils.isLogin()) {
        haveCollectQuestionService
          .setSucceed((msg) => {
            this.haveCollect = true;
            console.log(11);
          })
          .setParam({
            id: this.questionId,
          })
          .sendPostService();
      }
    },
    collect() {
      if (!this.haveCollect) {
        collectQuestionService
          .setSucceed((msg) => {
            this.haveCollect = true;
            this.question.collectSum++;
          })
          .setParam({
            id: this.questionId,
          })
          .sendPostService();
      }
    },
    getAllAnswer() {
      getAnswerByQuestionIdService
        .setSucceed((msg) => {
          this.answers = msg.data;
        })
        .setParam({
          id: this.questionId,
        })
        .sendGetService();
    },
    sendAnswer() {
      writeAnswerService
        .setSucceed((msg) => {
          this.$message({
            message: "发送成功",
            type: "success",
          });
        })
        .setParam({
          questionId: this.questionId,
          content: this.writeAnswer,
        })
        .sendPostService();
    },
  },
  created() {
    this.getQuestionDetail();
    this.getAllAnswer();
  },
};
</script>
<style scoped>
.send-answer {
  margin: 5% 0 0 85%;
}
.witer-answer-box {
  background-color: white;
  padding: 5%;
  margin: 3% 0 0 0;
  border-radius: 15px;
}
.question-detail-box {
  background-color: white;
  border-radius: 10px;
  padding: 4% 3% 3% 3%;
}
.center-box {
  background-color: white;
  border-radius: 10px;
  margin-top: 2%;
  padding: 2% 0;
}
.comment-box {
  background-color: white;
  border-radius: 10px;
  margin-top: 2%;
  padding: 4% 0 4% 2%;
}
.title {
  font-size: 20px;
  color: rgb(51, 51, 51);
}
.answer-sum {
  font-size: 14px;
  color: rgb(102, 102, 102);
}
.tag {
  margin-top: 5%;
  margin-right: 1%;
}
.other {
  margin-top: 4%;
  font-size: 15px;
  color: rgb(102, 102, 102);
}
.icon-size {
  font-size: 60px;
}
.icon-size2 {
  font-size: 55px;
}
.po {
  cursor: pointer;
}
.po:hover {
  color: rgb(65, 163, 253);
}
.center-text {
  display: block;
  color: rgb(51, 51, 51);
  font-size: 20px;
  margin: 2% 0 0 5%;
}
.center-num {
  font-size: 16px;
  display: block;
  margin: 5% 0 0 25%;
  color: rgb(51, 51, 51);
}
.comment-img {
  display: block;
  margin-top: 0%;
}
.comment-name {
  display: block;
  margin: 15% 0 0 0;
  font-size: 16px;
}
.comment-content {
  margin: 4% 0 0 0;
}
.comment-other {
  font-size: 14px;
  color: rgb(153, 153, 153);
  margin: 5% 0 0 0;
}
</style>