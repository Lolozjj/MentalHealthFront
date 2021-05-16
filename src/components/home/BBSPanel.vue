<!-- 首页论坛模块 -->
<template>
  <div class="bbs-panel-box">
    <el-row>
      <el-col :span="1" :offset="4">
        <span class="BBS">论坛</span>
      </el-col>
      <el-col :span="8">
        <span class="BBS-des">只讲给爱你的人听</span>
      </el-col>
      <el-col :span="4">
        <div @click="goWrite" style="cursor: pointer;">
          <span class="BBS-say">
            <i class="el-icon-chat-square"></i>说一说
          </span>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="BBS-sum" @click="goAll">
          现已有
          <span class="blue-text">100+</span>个讨论 >
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 1%">
      <el-col :span="10" :offset="4">
        <div class="bbs-panle">
          <div class="more-bbs" @click="goAll">更多</div>
          <div class="topics" v-for="(item, index) in topics" :key="index">
            <span>{{ item.title }}</span>
            <el-tag class="tag" size="mini">{{ item.answerSum }}个回答</el-tag>
            <el-tag class="tag" size="mini">有用 {{ item.hugSum }}</el-tag>
            <el-row style="margin-top: 3%">
              <el-col :span="3">
                <el-avatar size="large" :src="item.imgUrl"></el-avatar>
              </el-col>
              <el-col :span="20">
                <div class="triangle"></div>
                <div class="topic-content">{{ item.content.substring(0,100) }}...</div>
              </el-col>
            </el-row>
            <div class="tags-box">
              <span class="tags" v-for="tag in item.tags.split(',')" :key="tag">#{{ tag }}</span>
            </div>
            <el-divider></el-divider>
          </div>
        </div>
      </el-col>
      <el-col :span="5" :offset="1">
        <div class="hot-panle">
          <span class="hot-header">最近30天精华问答</span>
          <span class="more-hot">更多</span>
          <div class="hots">
            <div v-for="(item, index) in hots" :key="index">
              <div class="hot-title">
                {{ item.title }}
                <el-tag size="mini">{{item.answerSum}}回答</el-tag>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getNewestQuestion, homeQuestionService } from "@/utils/frontServer";
export default {
  name: "BBSPanel",
  data() {
    return {
      topics: [],
      hots: [
        {
          title: "对待朋友习惯性撒谎，爱讲小说情...",
          answerNum: 14,
        },
        {
          title: "对待朋友习惯性撒谎，爱讲小说情...",
          answerNum: 14,
        },
        {
          title: "对待朋友习惯性撒谎，爱讲小说情...",
          answerNum: 14,
        },
        {
          title: "对待朋友习惯性撒谎，爱讲小说情...",
          answerNum: 14,
        },
        {
          title: "对待朋友习惯性撒谎，爱讲小说情...",
          answerNum: 14,
        },
        {
          title: "对待朋友习惯性撒谎，爱讲小说情...",
          answerNum: 14,
        },
      ],
    };
  },
  methods: {
    goWrite() {
      this.$router.push("/WriteQuestion");
    },
    goAll() {
      this.$router.push("/Questions");
    },
    getHots() {
      homeQuestionService
        .setSucceed((msg) => {
          this.hots = msg.data;
          console.log(this.hots);
        })
        .sendGetService();
    },
    getQuestion() {
      getNewestQuestion
        .setSucceed((msg) => {
          this.topics = msg.data.list;
        })
        .setParam({
          curPage: 1,
          pageSize: 5,
        })
        .sendGetService();
    },
  },
  created() {
    this.getQuestion();
    this.getHots();
  },
};
</script> 
<style scoped>
.bbs-panel-box {
  background-color: rgb(243, 244, 245);
  padding: 3% 0 3% 0;
}
.BBS {
  font-size: 28px;
  color: rgb(11, 139, 253);
}
.BBS-des {
  font-size: 16px;
  line-height: 2.9em;
  margin: 0 0 0 5%;
  color: rgb(85, 86, 87);
  font-weight: 400;
}
.BBS-say {
  font-size: 16px;
  color: rgb(85, 86, 87);
  line-height: 1.5em;
  font-weight: 600;
}
.BBS-sum {
  font-size: 15px;
  line-height: 1.5em;
  color: rgb(85, 86, 87);
  cursor: pointer;
}
.blue-text {
  color: rgb(168, 154, 255);
}
.bbs-panle {
  border-radius: 15px;
  background-color: white;
  height: 600px;
}
.more-bbs {
  margin: 2% 4% 0 90%;
  color: rgb(85, 86, 87);
  text-decoration: none;
  line-height: 3em;
  cursor: pointer;
}
.more-hot {
  margin-left: 25%;
  color: rgb(85, 86, 87);
  line-height: 3em;
}
.topics {
  margin: 3% 0 0 5%;
}
.tag {
  margin: 0 0 0 2%;
}
.topic-content {
  background-color: rgb(243, 244, 245);
  font-size: 13px;
  padding: 1%;
  color: rgb(85, 86, 87);
}
.hot-panle {
  border-radius: 15px;
  background-color: white;
  height: 600px;
  margin-top: 4%;
}
.tags {
  font-size: 12px;
  line-height: 3.8em;
  margin: 2% 0 0 3%;
  color: rgb(85, 86, 87);
}
.tags-box {
  margin-left: 10%;
}
.hot-header {
  font-size: 18px;
  margin-left: 10%;
  line-height: 3em;
}
.hots {
  margin-top: 3%;
  padding-left: 10%;
  padding-right: 10%;
}
.hot-title {
  font-size: 14px;
  margin-top: 2%;
  margin-bottom: 1%;
  color: rgb(85, 86, 87);
}
</style>