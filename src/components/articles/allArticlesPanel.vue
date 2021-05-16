<!-- 所有文章显示面板 -->
<template>
  <div>
    <div class="all-article-box">
      <div class="categorys">
        <el-row>
          <el-col
            :class="['category-item', { active: -1 == activeType }]"
            :span="3"
            @click.native="activeItem(-1)"
          >
            <span>所有</span>
          </el-col>
          <el-col
            :class="['category-item', { active: item.value == activeType }]"
            :span="3"
            v-for="item in categorys"
            :key="item.value"
            @click.native="activeItem(item.value)"
          >
            <span>{{ item.des }}</span>
          </el-col>
        </el-row>
      </div>
      <el-divider class="divider"></el-divider>
      <el-row
        class="article-item-card"
        v-for="(item) in articles"
        :key="item.id"
        @click.native="lookArticle(item.id)"
      >
        <el-col :span="5" class="img">
          <el-image class="img-item" :src="item.imgUrl"></el-image>
        </el-col>
        <el-col :span="19" class="right-text">
          <el-row>
            <el-col :span="20">
              <div class="title">{{ item.title }}</div>
            </el-col>
            <el-col :span="4">
              <div class="look-num">阅读数{{item.lookSum}}</div>
            </el-col>
          </el-row>
          <div class="des">{{ item.des }}</div>
          <div class="other">
            <span>{{ item.author }}</span>
            <span class="ml">{{ item.crtTime.substring(0,10) }}</span>
            <el-tag class="ml" size="mini"># {{item.tag}}</el-tag>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="pageSizes"
        :total="total"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import {
  getAllArticleTypeService,
  getArticleByTypeService,
} from "@/utils/frontServer";

export default {
  name: "allArticlesPanel",
  data() {
    return {
      categorys: [
        {
          value: 1,
          des: "心理咨询",
        },
        {
          value: 2,
          des: "家庭问题",
        },
        {
          value: 3,
          des: "工作心事",
        },
        {
          value: 4,
          des: "社交难题",
        },
        {
          value: 5,
          des: "人生感悟",
        },
        {
          value: 6,
          des: "其他",
        },
      ],
      articles: [
        {
          id: 0,
          imgUrl:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
          author: "十六辣欸",
          crtTime: "2021-01-18",
          lookSum: 3,
        },
        {
          id: 1,
          imgUrl:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维要时代的红利属于倾听者。”——《不要时代的红利属于倾听者。”——《不要时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
          author: "十六辣欸",
          crtTime: "2021-01-18",
          lookSum: 10,
        },
        {
          id: 2,
          imgUrl:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
          author: "十六辣欸",
          crtTime: "2021-01-18",
          lookSum: 5555,
        },
        {
          id: 3,
          imgUrl:
            "https://ossimg.xinli001.com/20201228/d63c90e4adcc6530b4d9659dbbd95684.jpeg!120x120",
          title: "《不要沮丧》:一切都会好起来的",
          des:
            "“拥有影响力的前提，是建立合作思维，时代的红利属于倾听者。”——《不要沮丧》",
          tag: "心态乐观",
          author: "十六辣欸",
          crtTime: "2021-01-18",
          lookSum: 15613,
        },
      ],
      activeType: -1,
      pageSizes: [10, 20, 25, 50],
      pageSize: 10,
      curPage: 1,
      total: 400,
    };
  },

  methods: {
    activeItem(val) {
      this.activeType = val;
      getArticleByTypeService.setSucceed((msg) => {
        this.articles = msg.data.list;
        this.total = msg.data.total;
      });
      getArticleByTypeService.setParam({
        type: val,
        curPage: this.curPage,
        pageSize: this.pageSize,
      });
      getArticleByTypeService.sendGetService();
    },
    lookArticle(id) {
      this.$router.push({ path: "/ArticleDetail", query: { id: id } });
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.activeItem(this.activeType);
    },
    handleCurrentChange(curPage) {
      this.curPage = curPage;
      this.activeItem(this.activeType);
    },
  },
  created() {
    getAllArticleTypeService
      .setSucceed((msg) => {
        this.categorys = msg.data;
      })
      .sendGetService();
    this.activeItem(this.activeType);
  },
};
</script>
<style scoped>
.all-article-box {
  background-color: white;
  border-radius: 10px;
  padding-bottom: 1%;
}
.categorys {
  padding: 3% 0;
}
.category-item {
  text-align: center;
  color: #666;
  padding: 0.7%;
  cursor: pointer;
}
.ml {
  margin-left: 20px;
}
.category-item:hover {
  color: #0b8bff;
}
.active {
  color: #0b8bff;
}
.divider {
  margin: -1% auto;
}
.title {
  font-size: 18px;
  font-weight: 600;
}
.des {
  color: #666;
  font-size: 14px;
  margin-top: 2%;
}
.img {
  padding: 2%;
}
.other {
  color: #999;
  position: absolute;
  bottom: 10%;
  font-size: 14px;
}
.right-text {
  margin-left: 0%;
  margin-top: 1.5%;
}
.article-item-card {
  margin: 2% 3%;
  padding: 0 2%;
  border-radius: 15px;
  cursor: pointer;
}
.article-item-card:hover {
  background-color: rgb(231, 246, 253);
}
.look-num {
  font-size: 13px;
  color: rgb(11, 146, 67);
  margin-top: 5%;
  float: right;
}
.pagination {
  margin: 5% 0 0 0;
  padding: 0 8%;
}
.img-item{
  width: 120px;
  height: 120px;
}
</style>