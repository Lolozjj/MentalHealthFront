<!-- 问题详情页面 -->
<template>
  <div class="question-box">
      <head-menu></head-menu>
      <div class="content">
      <el-row>
        <el-col :span="13" :offset="2">
            <question-detail-panel :questionId="this.$route.query.id"></question-detail-panel>
        </el-col>
        <el-col :span="6" :offset="1"><question-rigth-panel></question-rigth-panel></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeadMenu from '../../components/home/headMenu.vue';
import QuestionDetailPanel from '../../components/question/QuestionDetailPanel.vue';
import QuestionRigthPanel from '../../components/question/QuestionRigthPanel.vue';
export default {
  name:'',
  data () {
    return {
    };
  },

  components: {HeadMenu, QuestionDetailPanel, QuestionRigthPanel},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.question-box {
  background-color: rgb(243, 244, 245);
}
.content {
  margin-top: 3%;
  padding: 3% 3%;
}
</style>