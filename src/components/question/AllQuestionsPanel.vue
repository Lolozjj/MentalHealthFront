<!-- 问题展示面板 -->
<template>
  <div class="all-question-box">
    <div class="question-head-box">
      <el-row>
        <el-col
          :class="['head-item',{ activeMenu: item.id == activeMenu }]"
          :span="6"
          v-for="(item,index) in menus"
          :key="index"
          @click.native="clickMenu(item.id)"
        >
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#'+item.icon" />
          </svg>
          <span>{{item.title}}</span>
        </el-col>
      </el-row>
    </div>
    <RecommendAnswerPanel  v-show="activeMenu==1"></RecommendAnswerPanel>
    <RecommendQuestionPanel :activeMenu='2' v-show="activeMenu==2"></RecommendQuestionPanel>
    <RecommendQuestionPanel :activeMenu='3' v-show="activeMenu==3"></RecommendQuestionPanel>
    <RecommendQuestionPanel :activeMenu='4' v-show="activeMenu==4"></RecommendQuestionPanel>
  </div>
</template>

<script>
import RecommendAnswerPanel from "../../components/question/RecommendAnswerPanel.vue";
import RecommendQuestionPanel from "./RecommendQuestionPanel.vue";

export default {
  data() {
    return {
      
      menus: [
        {
          id: 1,
          title: "推荐回答",
          icon: "lo-answer",
        },
        {
          id: 2,
          title: "推荐问题",
          icon: "lo-recommend",
        },
        {
          id: 3,
          title: "最新问题",
          icon: "lo-time",
        },
        {
          id: 4,
          title: "站内最火",
          icon: "lo-fire",
        },
      ],
      activeMenu: 2,
      recommendQuestion: [],
      newQuestion: [],
      hotQuestion: [],
    };
  },
  components: {
    RecommendAnswerPanel,
    RecommendQuestionPanel,
  },
  methods: {
    clickMenu(val) {
      this.activeMenu = val;
      this.curPage = 1;
    },
    
  },
};
</script>
<style scoped>
.all-question-box {
}
.question-head-box {
  background-color: white;
  border-radius: 10px;
  padding: 3% 0;
  text-align: center;
  color: rgb(51, 51, 51);
  font-weight: 500;
  font-size: 18px;
}
.head-item {
  cursor: pointer;
}
.head-item:hover {
  color: rgb(96, 174, 248);
}
.activeMenu {
  color: rgb(11, 139, 255);
}
</style>