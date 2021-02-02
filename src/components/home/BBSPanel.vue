<!-- 首页论坛模块 -->
<template>
  <div class="bbs-panel-box">
    <el-row>
      <el-col :span="1" :offset="4"> <span class="BBS">论坛</span></el-col>
      <el-col :span="8"> <span class="BBS-des">只讲给爱你的人听</span></el-col>
      <el-col :span="4">
        <span class="BBS-say"><i class="el-icon-chat-square"></i>说一说</span>
      </el-col>
      <el-col :span="5">
        <div class="BBS-sum">
          现已有<span class="blue-text">100+</span>个讨论 >
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 1%">
      <el-col :span="10" :offset="4">
        <div class="bbs-panle">
          <div class="more-bbs">更多</div>
          <div class="topics" v-for="(item, index) in topics" :key="index">
            <span>{{ item.title }}</span>
            <el-tag class="tag" size="mini">{{ item.anwserNum }}个回答</el-tag>
            <el-tag class="tag" size="mini"
              >有用 {{ item.feelUsefulNum }}</el-tag
            >
            <el-row style="margin-top: 3%">
              <el-col :span="3">
                <el-avatar
                  size="large"
                  :src="item.firstAnswerUserHeadImgUrl"
                ></el-avatar>
              </el-col>
              <el-col :span="20">
                <div class="triangle"></div>
                <div class="topic-content">
                  {{ item.firstAnswerContent }}
                </div>
              </el-col>
            </el-row>
            <div class="tags-box">
              <span class="tags" v-for="tag in item.tags" :key="tag">
                #{{ tag }}
              </span>
            </div>
            <el-divider></el-divider>
          </div>
        </div>
      </el-col>
      <el-col :span="5" :offset="1">
        <div class="hot-panle">
          <span class="hot-header"> 最近30天精华问答</span>
          <span class="more-hot">更多</span>
          <div class="hots">
            <div v-for="(item, index) in hots" :key="index">
              <div class="hot-title">{{ item.title }}</div>
              <el-tag size='mini'>{{item.answerNum}}回答</el-tag>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "BBSPanel",
  data() {
    return {
      topics: [
        {
          title: "对待朋友习惯性撒谎，爱讲小说情节，该怎么办?",
          anwserNum: 7,
          feelUsefulNum: 30,
          firstAnswerUserHeadImgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          firstAnswerContent:
            "你好啊，我是咨询师导哥，很愿意与你探讨你的困惑。你说有个朋友喜欢习惯性撒谎。最近发现越来越严重。",
          tags: ["同情心", "朋友", "欺骗与信任"],
        },
        {
          title: "对待朋友习惯性撒谎，爱讲小说情节，该怎么办?",
          anwserNum: 36,
          feelUsefulNum: 320,
          firstAnswerUserHeadImgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          firstAnswerContent:
            "你好啊，我是咨询师小郑，很高兴能够在这里认识你，并和你分享我的故事，我出生在一个贫苦的家庭，家里给不了我平常小孩能拥有的一切，嫉妒和羡慕使我走向了一条不归路。",
          tags: ["感恩", "友情", "爱情"],
        },
        {
          title: "对待朋友习惯性撒谎，爱讲小说情节，该怎么办?",
          anwserNum: 7,
          feelUsefulNum: 30,
          firstAnswerUserHeadImgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          firstAnswerContent:
            "你好啊，我是咨询师导哥，很愿意与你探讨你的困惑。你说有个朋友喜欢习惯性撒谎。最近发现越来越严重。",
          tags: ["遗憾", "感动"],
        },
      ],
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

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
.bbs-panel-box {
  background-color: rgb(243, 244, 245);
  padding: 3% 0 0 0;
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
.triangle {
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
}
.hot-title{
  font-size: 14px;
  margin-top: 2%;
  margin-bottom: 1%;
  color: rgb(85, 86, 87);
}
</style>