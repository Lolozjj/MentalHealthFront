<template>
  <div class="question-right-box">
    <my-question-sum-info></my-question-sum-info>
  </div>
</template>

<script>
import MyQuestionSumInfo from './MyQuestionSumInfo.vue'
export default {
  components: { MyQuestionSumInfo },
    name:"QuestionRigthPanel",
    data(){
      return{

      }
    }
}
</script>

<style scoped>
.question-right-box{
  border-radius: 10px;
  background-color: white;
}
</style>