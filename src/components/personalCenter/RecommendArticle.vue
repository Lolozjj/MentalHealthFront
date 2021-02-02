<!-- 推荐文章 -->
<template>
  <div class="recommend-box">
    <span class="recommend-text">推荐文章</span>
    <el-divider class="recommend-divider"></el-divider>
    <div class="article-box" v-for="(item, index) in articles" :key="index">
      <el-row class="article-item">
        <el-col :span="4">
          <el-avatar :size="60" :src="item.img"></el-avatar>
        </el-col>
        <el-col :span="18" :offset="2">
          <div>
            <span class="title-text">{{ item.title }}</span>
          </div>
          <div style="margin-top: 8%">
            <span class="tag-text"># {{ item.tag }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div class="more-article">
      <a>更多文章>></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendArticle",
  data() {
    return {
      articles: [
        {
          img:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des: "“拥有影响力的前提，是建立合作思维...",
          tag: "心态乐观",
        },
        {
          img:
            "https://ossimg.xinli001.com/20201223/17d54a03d198a1fc6831e0a3f5a7460c.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
        },
        {
          img:
            "https://ossimg.xinli001.com/20201222/16eee86072c48b7cda8848bca656b02a.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des: "“从你暂时的难受里，看到你内心的期待，你的渴望和你成长的愿望。",
          tag: "心态乐观",
        },
        {
          img:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des: "“拥有影响力的前提，是建立合作思维...",
          tag: "心态乐观",
        },
        {
          img:
            "https://ossimg.xinli001.com/20201223/17d54a03d198a1fc6831e0a3f5a7460c.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
        },
        {
          img:
            "https://ossimg.xinli001.com/20201222/16eee86072c48b7cda8848bca656b02a.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des: "“从你暂时的难受里，看到你内心的期待，你的渴望和你成长的愿望。",
          tag: "心态乐观",
        },
      ],
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
.recommend-box {
  background-color: white;
  padding: 0 5% 5% 5%;
}
.recommend-text {
  line-height: 3em;
  font-weight: 600;
}
.recommend-divider {
  margin-top: 0%;
}
.article-box {
  margin-top: 0%;
  padding: 0;
}
.article-item {
  margin-top: 6%;
}
.more-article{
  text-align: center;
  color: rgb(146,180,219);
}
.title-text {
  font-size: 14px;
}
.tag-text {
  font-size: 8px;
  color: rgb(113, 113, 243);
  float: right;
  margin-right: 10%;
}
</style>