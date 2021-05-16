<!-- l留言板 -->
<template>
  <div class="borad-box">
    <span class="title">留言</span>
    <div class="wirte-panel">
      <div>
        <el-row>
          <el-col :span="2">
            <el-avatar
              :size="50"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </el-col>
          <el-col :span="22">
            <el-input
              class="input-message"
              type="textarea"
              placeholder="请输入内容"
              v-model="message"
              maxlength="100"
              show-word-limit
              rows="5"
            ></el-input>
          </el-col>
        </el-row>
        <div>
          <el-button class="send-btn" type="info" plain size="small" @click="sendComment">发送</el-button>
        </div>
      </div>
      <div v-for="(item) in comments" :key="item.id">
        <el-divider></el-divider>
        <el-row>
          <el-col :span="2">
            <el-avatar :size="45" :src="item.imgUrl"></el-avatar>
          </el-col>
          <el-col :span="18">
            <span class="reply-name">{{item.crtName}}  :</span>
          </el-col>
          <el-col :span="2">
            <span class="right-other" @click="zanComment(item)">
              <svg class="icon icon-size" aria-hidden="true">
                <use xlink:href="#lo-zan" />
              </svg>
              赞 {{item.likeSum}}
            </span>
          </el-col>
          <el-col :span="2">
            <span class="right-other" @click="handleShowReplyPanel(item.id)">
              <svg class="icon icon-size" aria-hidden="true">
                <use xlink:href="#lo-pinglun" />
              </svg>评论
            </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="2">
            <span class="reply-content">{{item.content}}</span>
          </el-col>
        </el-row>
        <el-row class="bottom-other">
          <el-col :span="20" :offset="2">
            <span>{{item.crtTime.substring(0,10)}}·</span>
            <span class="pointer" @click="handleLookReply(item.id)">查看回复</span>
          </el-col>
        </el-row>
        <el-collapse-transition>
          <div class="look-reply" v-show="chooseLookReplyId==item.id">
            <el-row v-for="item in replys" :key="item.id" class="reply-item">
              <el-col :span="2">
                <el-avatar :size="40" :src="item.imgUrl"></el-avatar>
              </el-col>
              <el-col :span="18">
                <span class="reply-name-small">{{item.crtName}}->{{item.replyUserName}}:</span>
              </el-col>
              <el-col :span="4">
                <span class="right-other" @click="handleShowReplyPanel(item.attr1)">
                  <svg class="icon icon-size" aria-hidden="true">
                    <use xlink:href="#lo-pinglun" />
                  </svg>评论
                </span>
              </el-col>
              <el-col :span="22" :offset="2">
                <span class="reply-content-small">{{item.content}}</span>
              </el-col>
              <el-col :span="4" :offset="2" class="reply-other">
                <span>{{item.crtTime.substring(0,10)}}</span>
              </el-col>
              <el-col :span="4" :offset="2" class="reply-other">
                <span class="zan" @click="zanComment(item)">
                  <svg class="icon icon-size" aria-hidden="true">
                    <use xlink:href="#lo-zan" />
                  </svg>
                  赞 {{item.likeSum}}
                </span>
              </el-col>
              <el-col :span="24">
                <el-divider></el-divider>
              </el-col>
            </el-row>
          </div>
        </el-collapse-transition>
        <transition name="el-zoom-in-center">
          <el-row class="reply-panel" v-show="item.id==chooseReplyId">
            <el-col :span="18" :offset="2">
              <el-input
                class="input-message"
                type="textarea"
                placeholder="请输入内容"
                v-model="replyMessage"
                maxlength="100"
                show-word-limit
                rows="5"
              ></el-input>
            </el-col>
            <el-col :span="3" :offset="1">
              <el-button class="reply-btn" size="mini" @click="replyComment">回复</el-button>
            </el-col>
          </el-row>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {
  writeCommentService,
  replyCommentService,
  getRootCommentService,
  getSonCommentService,
  zanCommentService,
} from "@/utils/frontServer";
export default {
  name: "",
  props: {
    articleId: {
      type: String,
    },
  },
  data() {
    return {
      message: "",
      replyMessage: "",
      chooseReplyId: 0,
      chooseLookReplyId: -1,
      comments: [
        {
          id: 1,
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "匿名",
          crtTime: "2021-04-11",
          content:
            "这是一个测试评论,所以我尽量写的长一点,但是我页只能写道这里了,你会发现里面这既然还有很多错别字,甚至读认真还都不通顺",
          likeSum: 1,
        },
        {
          id: 2,
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "匿名",
          crtTime: "2021-04-11",
          content:
            "这是一个测试评论,所以我尽量写的长一点,但是我页只能写道这里了,你会发现里面这既然还有很多错别字,甚至读认真还都不通顺",
          likeSum: 10,
        },
      ],
      replys: [
        {
          id: 3,
          articleId: 1,
          parentId: 1,
          name: "无敌寂寞",
          replyName: "有人不寂寞",
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          crtTime: "2020-11-13",
          content: "你说的对",
          likeSum: 1,
        },
        {
          id: 4,
          articleId: 1,
          parentId: 2,
          name: "无敌寂寞",
          replyName: "有人不寂寞",
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          crtTime: "2020-11-13",
          content: "你说的对",
          likeSum: 1,
        },
      ],
    };
  },
  methods: {
    handleShowReplyPanel(id) {
      if (id !== this.chooseReplyId) {
        this.chooseReplyId = id;
      } else {
        this.chooseReplyId = -1;
      }
    },
    handleLookReply(commentId) {
      this.chooseLookReplyId = commentId;
      console.log(commentId);
      this.getReply(commentId);
    },
    getReply(commentId) {
      getSonCommentService
        .setSucceed((msg) => {
          this.replys = msg.data;
        })
        .setParam({
          id: commentId,
        })
        .sendGetService();
    },
    getRootComment() {
      getRootCommentService
        .setSucceed((msg) => {
          console.log(msg);
          this.comments = msg.data;
        })
        .setParam({
          articleId: this.articleId,
        })
        .sendGetService();
    },
    sendComment() {
      if (!this.utils.isFrontLogin()) {
        this.$message("请先登录");
      } else {
        writeCommentService
          .setSucceed((msg) => {
            this.message = "";
            this.getRootComment();
            this.$message({
              message: "发送成功",
              type: "success",
            });
          })
          .setParam({
            articleId: this.articleId,
            content: this.message,
          })
          .sendPostService();
      }
    },
    zanComment(item) {
      if (!this.utils.isFrontLogin()) {
        this.$message("请先登录");
      } else {
        zanCommentService
          .setSucceed((msg) => {
            this.$message({
              message: "点赞成功",
              type: "success",
            });
            item.likeSum++;
          })
          .setParam({
            id: item.id,
          })
          .sendPostService();
      }
    },
    replyComment() {
      if (!this.utils.isFrontLogin()) {
        this.$message("请先登录");
      } else {
        this.getReply(this.chooseReplyId);
        replyCommentService
          .setSucceed((msg) => {
            this.$message({
              message: "发送成功",
              type: "success",
            });
            this.chooseReplyId = -1;
          })
          .setParam({
            articleId: this.articleId,
            parentId: this.chooseReplyId,
            content: this.replyMessage,
            attr1: this.chooseReplyId,
          })
          .sendPostService();
      }
    },
  },
  created() {
    this.getRootComment();
  },
};
</script>
<style scoped>
.borad-box {
  background-color: white;
  border-radius: 10px;
  padding: 4% 3% 10% 3%;
}
.title {
  font-size: 18px;
  font-weight: 600;
}
.wirte-panel {
  margin-top: 5%;
}
.input-message {
  width: 100%;
  margin-top: 2%;
}
.send-btn {
  margin-top: 2%;
  margin-left: 92%;
}
.reply-name {
  line-height: 3em;
  font-weight: 600;
}
.reply-name-small {
  color: rgb(51, 51, 51);
  line-height: 4em;
  font-weight: 600;
  font-size: 12px;
}
.right-other {
  line-height: 3em;
  color: rgb(77, 76, 76);
  font-size: 12px;
  cursor: pointer;
}
.right-other:hover {
  color: rgb(0, 0, 0);
}
.reply-content {
  font-size: 14px;
  color: rgb(77, 76, 76);
}
.reply-content-small {
  font-size: 14px;
  color: rgb(77, 76, 76);
}
.reply-btn {
  position: absolute;
  bottom: 0px;
}
.reply-panel {
  margin: 5% 0 0 0;
}
.bottom-other {
  font-size: 12px;
  color: grey;
  margin-top: 3%;
}
.pointer {
  cursor: pointer;
}
.look-reply {
  width: 80%;
  margin: 5% 0 0 8%;
  background-color: rgb(235, 235, 235);
  border-radius: 15px;
  padding: 2% 2% 2% 5%;
}
.reply-item {
  margin-top: 2%;
}
.reply-other {
  font-size: 10px;
  color: rgb(170, 173, 173);
  margin-top: 5%;
}
.zan:hover {
  color: black;
  cursor: pointer;
}
</style>