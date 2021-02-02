<!-- 问题页头部菜单  -->
<template>
  <div class="question-head-box">
      <el-row>
        <el-col :span='6' v-for="(item,index) in menus" :key="index">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name:'QuestionHeadPanel',
  data () {
    return {
        menus:[
            {
                title:"推荐回答",
                icon:"el-icon-chat-line-square"
            },{
                title:"推荐问题",
                icon:"el-icon-chat-dot-square"
            },{
                title:"最新问题",
                icon:"el-icon-time"
            },{
                title:"站内最火",
                icon:"el-icon-sunny"
            },
        ]
    };
  },
  components: {},

  methods: {}
}

</script>
<style scoped>
.question-head-box{
    background-color: white;
    border-radius: 10px;
    padding: 3% 0;
    text-align: center;
    color: rgb(51,51,51);
    font-weight: 500;
    font-size: 18px;
}
</style>