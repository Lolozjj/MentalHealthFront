<!-- 聊天机器人  -->
<template>
  <div class="box">
    <head-menu></head-menu>
    <div class="chat-box">
      <div class="content-box">
        <div class="content-item" v-for="(item,index) in contents" :key="index">
          <div v-if="item.isRobot">
            <el-row>
              <el-col :span="2">
                <el-avatar
                  class="left-avatar"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </el-col>
              <el-col :span="10">
                <div class="left-item">
                  <span class="left-text">{{item.content}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-else>
            <el-col :span="10" :offset="12">
              <div class="right-item">
                <span class="right-text">{{item.content}}</span>
              </div>
            </el-col>
            <el-col :span="2">
              <el-avatar
                class="right-avatar"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </el-col>
          </div>
        </div>
      </div>
      <div class="input-box">
        <el-input
          type="textarea"
          :rows="6"
          placeholder="请输入内容,回车发送"
          v-model="text"
          @keyup.enter.native="handleSubmit"
        ></el-input>
        <el-button size="mini" class="send-btn">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import headMenu from "../../components/home/headMenu.vue";
import { chatbotService } from "@/utils/robotServer.js";
export default {
  components: { headMenu },
  name: "",
  data() {
    return {
      text: "",
      contents: [],
    };
  },
  methods: {
    handleSubmit() {
      this.contents.push({
        isRobot: 0,
        content: this.text,
        date: "2021-04-11 15:48:42",
      });
      chatbotService(this.text, (msg) => {
        this.contents.push({
          isRobot: 1,
          content: msg.data.results[0].values.text,
          date: "2021-04-11 15:48:42",
        });
        this.text = "";
        this.$nextTick(() => {
          var container = this.$el.querySelector(".content-box");
          container.scrollTop = container.scrollHeight;
        });
      });
    },
  },
  created() {
    this.contents.push({
      isRobot: 1,
      content: "你好呀！有什么烦恼都可以和我说哦~",
      date: "2021-04-11 15:48:42",
    });
    this.contents.push({
      isRobot: 1,
      content: "但是我如果说的不好，你也一定不要生气呀~",
      date: "2021-04-11 15:48:42",
    });
    this.contents.push({
      isRobot: 1,
      content: "毕竟人家也还在学习中呢~",
      date: "2021-04-11 15:48:42",
    });
  },
};
</script>
<style scoped>
.left-avatar {
  float: left;
}
.right-avatar {
  float: right;
}
.left-item {
  text-align: left;
  margin-top: 4%;
}
.right-item {
  text-align: right;
  margin-top: 4%;
}
.left-text {
  background-color: aliceblue;
  border: 1px solid rgb(179, 231, 252);
  border-radius: 5px;
  font-size: 14px;
  color: rgb(110, 110, 110);
  padding: 2%;
}
.right-text {
  background-color: aliceblue;
  border: 1px solid rgb(179, 231, 252);
  border-radius: 5px;
  font-size: 14px;
  color: rgb(110, 110, 110);
  padding: 2%;
}
.content-box::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.content-box::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: skyblue;
}
.content-box::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  background: #ededed;
  border-radius: 10px;
}
.chat-box {
  position: absolute;
  margin: 6% 0 0 25%;
  height: 80%;
  width: 50%;
  border-radius: 15px;
  background-color: rgb(41, 158, 212);
}
.content-box {
  margin: 1% 1% 0 1%;
  height: 68%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  max-height: 90%;
  padding: 1%;
  overflow-y: auto;
}
.input-box {
  margin: 1% 1% 0 1%;
  height: 40%;
  border-radius: 10px;
}
.send-btn {
  margin: 0.6% 0 0 92%;
  display: none;
}
.content-item {
  margin: 2% 0 0 2%;
}
</style>