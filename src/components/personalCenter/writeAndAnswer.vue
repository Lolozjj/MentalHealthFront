<!-- 写文章和回答盒子 -->
<template>
  <div class="wa-box">
    <el-row>
      <el-col class="left" :span="12" @click.native="goWriteArticle">
        <i class="el-icon-edit-outline icon"></i> 写文章
      </el-col>
      <el-col class="right" :span="12" @click.native="goWriteQuestion">
        <i class="el-icon-chat-line-round icon"></i> 提问
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "writeAndAnswer",
  data() {
    return {};
  },
  methods: {
    goWriteArticle(){
      this.$router.push("/WriteArticle");
    },
    goWriteQuestion(){
      this.$router.push("/WriteQuestion");
    }
  },
};
</script>
<style scoped>
.wa-box {
  background-color: white;
  text-align: center;
  padding: 6% 0;
  color: rgb(62, 196, 164);
  font-size: 16px;
}
.left {
  border-right: 1px solid gold;
  cursor: pointer;
}
.right{
  cursor: pointer;
}
.icon {
  font-size: 22px;
}
</style>