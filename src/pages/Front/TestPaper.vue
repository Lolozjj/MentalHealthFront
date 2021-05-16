<!-- 测试卷主面板 -->
<template>
  <div class="paper-box">
    <HeadMenu></HeadMenu>
    <el-row style="margin:5% 0 0 0;padding-top:2%">
      <el-col :span="12" :offset="3">
        <el-carousel class="carousel">
          <el-carousel-item v-for="item in recommend" :key="item.id">
            <el-image :src="item.imgUrl" fit="scale-down"></el-image>
          </el-carousel-item>
        </el-carousel>
        <div class="all-paper">
          <div class="paper-item" v-for="item in papers" :key="item.id">
            <el-row>
              <el-col :span="8">
                <el-image class="img" :src="item.imgUrl"></el-image>
              </el-col>
              <el-col :span="16">
                <div class="title">{{item.title}}</div>
                <div class="des">{{item.des}}</div>
                <div class="other">
                  <span class="sum">{{item.testSum}}人已测 ·</span>
                  <span class="time">{{item.crtTime}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="6" :offset="1">
        <div class="right-panel">
          <b class="hot-text">火热</b>
          <span class="test-text">测试</span>
          <div class="title-item" v-for="item in hots" :key="item.id">{{item.title}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeadMenu from "../../components/home/headMenu.vue";
export default {
  name: "",
  data() {
    return {
      recommend: [
        {
          id: 1,
          imgUrl:
            "https://imgco.xinli001.com/ceping/lingxi/scalePool/64d32e5039b542d28d297b0da65bffed.png?x-oss-process=image/quality,q_80",
        },
        {
          id: 2,
          imgUrl:
            "https://imgco.xinli001.com/ceping/lingxi/scalePool/6a61cec24cf942e8aa01b44ab474be70.png?x-oss-process=image/quality,q_80",
        },
        {
          id: 3,
          imgUrl:
            "https://imgco.xinli001.com/ceping/lingxi/scalePool/5a258ab148094d8db69e0ec350ee914b.png?x-oss-process=image/quality,q_80",
        },
      ],
      hots: [
        {
          id: 1,
          title: "爱情潜在危机测试",
        },
        {
          id: 1,
          title: "潜意识投射测试",
        },
        {
          id: 1,
          title: "人格原型测试",
        },
        {
          id: 1,
          title: "潜意识画像测试",
        },
        {
          id: 1,
          title: "原生家庭伤痛评估",
        },
      ],
      papers: [
        {
          id: 1,
          title: "爱情潜在危机测试11111111111111111111111",
          des: "测测你的爱情值",
          imgUrl:
            "https://imgco.xinli001.com/ceping/lingxi/scalePool/d874a16e86404d1ebbd5876334950296.png?x-oss-process=image/resize,p_60/quality,Q_80",
          testSum: 1052,
          crtTime: "2020-05-16",
        },
        {
          id: 2,
          title: "爱情潜在危机测试",
          des: "测测你的爱情值",
          testSum: 1052,
          crtTime: "2020-05-16",
          imgUrl:
            "https://imgco.xinli001.com/ceping/lingxi/scalePool/d874a16e86404d1ebbd5876334950296.png?x-oss-process=image/resize,p_60/quality,Q_80",
        },
        {
          id: 3,
          title: "爱情潜在危机测试",
          des: "测测你的爱情值",
          testSum: 1052,
          crtTime: "2020-05-16",
          imgUrl:
            "https://imgco.xinli001.com/ceping/lingxi/scalePool/d874a16e86404d1ebbd5876334950296.png?x-oss-process=image/resize,p_60/quality,Q_80",
        },
      ],
    };
  },
  components: { HeadMenu },
  methods: {},
};
</script>
<style scoped>

.other {
  position: absolute;
  bottom: 0;
  color: rgb(153, 166, 196);
  font-size: 14px;
}
.title {
  font-size: 20px;
  font-weight: 600;
}
.des {
  color: gray;
  margin: 3% 0 0 0;
}
.img {
  height: 150px;
  width: 200px;
  border-radius: 10px;
}
.all-paper {
  margin: 5% 0 0 0;
  border-radius: 10px;
}
.paper-item {
  padding: 1%;
}
.paper-box {
  background-color: rgb(243, 244, 245);
}
.carousel {
  background-color: white;
  padding: 2%;
  border-radius: 15px;
}
.right-panel {
  background-color: white;
  padding: 5%;
  border-radius: 15px;
}
.hot-text {
  color: #ff3d3d;
  font-size: 18px;
}
.test-text {
  color: rgb(153, 175, 209);
  font-size: 16px;
}
.title-item {
  margin-top: 5%;
}
.all-paper {
  background-color: white;
  padding: 3%;
}

.type {
  background-color: white;
  margin: 2% 0 0 0;
  border-radius: 5px;
  text-align: center;
}
.type-panel :hover {
  background-color: rgb(11, 139, 255);
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
}
</style>