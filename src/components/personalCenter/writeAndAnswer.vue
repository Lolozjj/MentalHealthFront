<!-- 写文章和回答盒子 -->
<template>
  <div class="wa-box">
    <el-row>
      <el-col class="left" :span="12"
        ><i class="el-icon-edit-outline icon"></i>  写文章</el-col
      >
      <el-col :span="12"><i class="el-icon-chat-line-round icon"></i>  问答</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "writeAndAnswer",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
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
}
.icon{
    font-size: 22px;
}
</style>