<!-- 主页tabs组件 -->
<template>
  <div>
    <div class="header">
      <el-row>
        <el-col
          :span="2"
          :offset="2"
          v-for="(item, index) in headItems"
          :key="index"
          ><span
            :class="['head-item', { active: index == headIndex }]"
            @click="menuActive(index)"
            >{{ item }}</span
          ></el-col
        >
      </el-row>
    </div>
    <div class="panel">
      <div class="home-page-panel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {
      headIndex: 0,
      headItems: ["主页", "文章", "回答", "收藏"],
    };
  },

  components: {},

  computed: {},

  methods: {
    menuActive(index) {
      this.headIndex = index;
    },
  },
};
</script>
<style scoped>
.header {
  text-align: center;
  padding: 2% 0;
  letter-spacing: 2px;
}
.active {
  border-bottom: 3px solid rgb(56, 194, 201);
  color: rgb(49, 105, 183);
}
.head-item:hover {
  border-bottom: 3px solid rgb(56, 194, 201);
  color: rgb(49, 105, 183);
  cursor: pointer;
}
.home-page-panel {
  height: 400px;
  border-top: 1px solid gainsboro;
}
</style>