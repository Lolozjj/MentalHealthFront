<!-- 首页文章栏  -->
<template>
  <div class="article-panel-box">
    <el-row>
      <el-col :span="3" v-for="(item, index) in headerMenus" :key="index">
        <div
          :class="['header-item', { 'is-active': index == activeIndex }]"
          @click="activeItem(index)"
        >
          <span>{{ item }}</span>
        </div>
      </el-col>
      <el-col :span="3" :offset="3">
        <div class="header-witer">
          <i class="el-icon-edit"></i>
          <span>写一篇</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col v-for="(item, index) in articles" :key="index" :span="12">
        <div class="article-item">
          <el-row>
            <el-col :span="6">
              <el-image class="article-img" :src="item.img"></el-image>
            </el-col>
            <el-col :span="18">
              <div class="article-title">{{ item.title }}</div>
              <div class="article-des">{{ item.des }}</div>
              <div class="article-tag">#{{ item.tag }}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "articlePanel",
  data() {
    return {
      activeIndex: 0,
      headerMenus: [
        "最新文章",
        "科普知识",
        "感情婚恋",
        "家庭关系",
        "人际社交",
        "自我察觉",
      ],
      articles: [
        {
          img:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
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
          des:
            "“从你暂时的难受里，看到你内心的期待，你的渴望和你成长的愿望。",
          tag: "心态乐观",
        },
        {
          img:
            "https://ossimg.xinli001.com/20201222/1546344025f457a9e17ee051bf947e4c.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“对方发来的“哈哈哈”究竟是想要缓解无话可接的尴尬还是自己的真情流露，她/他到底是不是真的开心？",
          tag: "心态乐观",
        },
      ],
    };
  },
  methods: {
    activeItem(val) {
      this.activeIndex = val;
    },
  },
};
</script>
<style scoped>
.article-panel-box {
  margin: 2% 12% 0 11%;
}
.header-item {
  height: 30px;
  line-height: 2.1em;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
}
.header-item:hover {
  line-height: 1.8em;
  border-radius: 15px;
  border: 2px solid rgb(117, 179, 238);
}
.is-active {
  line-height: 1.8em;
  border-radius: 15px;
  border: 2px solid rgb(11, 139, 255);
}
.header-witer {
  font-size: 20px;
  line-height: 2.5em;
  cursor: pointer;
  color: rgb(105, 104, 104);
}
.header-witer:hover {
  color: rgb(33, 131, 189);
}
.article-item {
  background-color: rgb(249, 249, 250);
  margin: 3% 4% 0 0;
  padding: 2%;
  border-radius: 8px;
}
.article-img{
    height: 80%;
    width: 80%;
}
.article-title {
  font-weight: 600;
  letter-spacing: 2px;
}
.article-des {
  margin-top: 2%;
  font-size: 12px;
  color: rgb(102,102,102);
}
.article-tag{
    margin-top: 10%;
    font-size: 13px;
    color: rgb(11,139,255);
}
</style>