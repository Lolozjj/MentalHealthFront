<!--  -->
<template>
  <div class="postcard-box">
    <el-row>
      <el-col :span="12">
        <el-avatar
          :size="80"
          class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar
      ></el-col>
      <el-col :span="12">
        <div class="info">
          <i class="el-icon-user-solid"></i> 昵 称 : {{ userInfo.name }}
        </div>
        <div class="margin">
          <i class="el-icon-male"></i> 性 别 : {{ userInfo.sex }}
        </div>
        <div class="margin">
          <i class="el-icon-edit"></i> 签 名 : {{ userInfo.signature }}
        </div>
      </el-col>
    </el-row>
    <el-row class="nums">
      <el-col :span="2" :offset="2" class="divider"
        ><div class="num">{{ nums.article }}</div>
        <div class="num">文章</div></el-col
      >
      <el-col :span="2" class="divider"
        ><div class="num">{{ nums.article }}</div>
        <div class="num">回答</div></el-col
      >
      <el-col :span="2" class="divider"
        ><div class="num">{{ nums.article }}</div>
        <div class="num">点赞</div></el-col
      >
      <el-col :span="2" 
        ><div class="num">{{ nums.article }}</div>
        <div class="num">收藏</div></el-col
      >
    </el-row>
    <el-row  class="attention">
      <el-col :span='14' :offset="2">0 关注</el-col>
      <el-col :span='8'>推荐到：</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "postcard",
  data() {
    return {
      userInfo: {
        name: "zjj",
        signature: "you must true",
        sex: "男",
      },
      nums: {
        article: 5,
        answer: 10,
        like: 12,
        enshrine: 3,
      },
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
.postcard-box {
  background-color: white;
  padding: 0 0 6% 0;
}
.avatar {
  margin: 10% 0 0 40%;
}
.info {
  margin-top: 10%;
}
.margin {
  margin-top: 2%;
}
.nums{
  margin-top: 4%;
}
.num {
  text-align: center;
}
.divider{
  border-right: 1px solid gainsboro;
}
.attention{
  margin-top: 8%;
  margin-left: 2%;
}
</style>