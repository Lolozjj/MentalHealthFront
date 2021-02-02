<!-- 所有文章显示面板 -->
<template>
  <div class="all-article-box">
    <div class="categorys">
      <el-row>
        <el-col
          :class="['category-item', { active: -1 == activeIndex }]"
          :span="4"
          @click.native="activeItem(-1)"
        >
          <span>所有</span>
        </el-col>
        <el-col
          :class="['category-item', { active: item.id == activeIndex }]"
          :span="4"
          v-for="item in categorys"
          :key="item.id"
          @click.native="activeItem(item.id)"
        >
          <span>{{ item.name }}</span>
        </el-col>
      </el-row>
    </div>
    <el-divider class="divider"></el-divider>
    <div>
      <el-row v-for="(item,index) in articles" :key="index">
        <el-col :span="4" :offset="1" class="img"> <el-image :src="item.img"></el-image></el-col>
        <el-col :span="18" class="right-text"
          ><div class="title">{{ item.title }}</div>
          <div class="des">{{ item.des }}</div>
          <div class="other">
            <span>{{ item.author }}</span
            ><span class="ml">{{ item.createTime }}</span>
            <span class="ml"># {{item.tag}}</span>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "allArticlesPanel",
  data() {
    return {
      categorys: [
        {
          id: 0,
          name: "心理科普",
        },
        {
          id: 1,
          name: "婚恋情感",
        },
        {
          id: 2,
          name: "家庭关系",
        },
        {
          id: 3,
          name: "人机社交",
        },
        {
          id: 4,
          name: "自我察觉",
        },
        {
          id: 5,
          name: "成长学习",
        },
        {
          id: 6,
          name: "心理健康",
        },
        {
          id: 7,
          name: "职场技能",
        },
      ],
      activeIndex: -1,
      articles: [
        {
          img:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
          author: "十六辣欸",
          createTime: "2021-01-18",
        },
       {
          img:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
          author: "十六辣欸",
          createTime: "2021-01-18",
        },{
          img:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
          author: "十六辣欸",
          createTime: "2021-01-18",
        },{
          img:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
          author: "十六辣欸",
          createTime: "2021-01-18",
        },
      ],
    };
  },

  components: {},

  methods: {
    activeItem(val) {
      this.activeIndex = val;
    },
  },
};
</script>
<style scoped>
.all-article-box {
  background-color: white;
  border-radius: 5px;
}
.categorys {
  padding: 3% 0;
}
.category-item {
  text-align: center;
  color: #666;
  padding: 1%;
  cursor: pointer;
}
.ml{
margin-left: 6%;
}
.category-item:hover {
  color: #0b8bff;
}
.active {
  color: #0b8bff;
}
.divider {
  margin-top: -2%;
}
.title{
  font-size: 22px;
  font-weight: 600;
}
.des{
  color: #666;
  font-size: 14px;
  margin-top: 1%;
}
.img{
  padding: 2%;
}
.other{
  color: #999;
  margin-top: 5%;
  margin-left: 2%;
}
.right-text{
  margin-left:2%;
  margin-top: 1.5%;
}
</style>