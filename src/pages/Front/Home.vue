<!-- 首页 -->
<template>
  <div>
    <HeadMenu></HeadMenu>
    <div class="content">
      <el-carousel class="carousel">
        <el-carousel-item v-for="item in carouselImgs" :key="item">
          <el-image class="car-img" :src="item" fit="cover"></el-image>
        </el-carousel-item>
      </el-carousel>
      <ArticlePanel></ArticlePanel>
      <BBSPanel></BBSPanel>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>

import Footer from "../../components/home/footer.vue";
import ArticlePanel from "../../components/home/articlePanel.vue";
import BBSPanel from "../../components/home/BBSPanel.vue";
import HeadMenu from '../../components/home/headMenu.vue';
export default {
  name: "Home",
  data() {
    return {
      carouselImgs: [
        "https://ossimg.xinli001.com/202114/1609757373313uKvikbbLDnXLqfJ7W3Btb3KFain00H7x.png?x-oss-process=image/quality,Q_80",
        "https://ossimg.xinli001.com/20191028/69c90fc8584f568365521ee029cdbade.png?x-oss-process=image/quality,Q_80",
      ],
    };
  },
  components: {
    Footer,
    ArticlePanel,
    BBSPanel,
    HeadMenu,
  },
};
</script>
<style scoped>
.content {
  height: 1000px;
  margin: 4% 0 0 0;
}
.carousel {
  border-bottom: 1px solid rgb(221, 221, 221);
}
.car-img {
  height: 100%;
}
</style>