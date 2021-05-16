<!-- 赞一赞 -->
<template>
  <div class="praise-box" @click="praiseEvent">
    <svg
      aria-hidden="true"
      :class="['icon','icon-size',{'praise-animation':isA}]"
      @animationend="isA = !canRepeat"
      :style="'font-size: '+size+'px;'"
    >
      <use :xlink:href="'#'+icon" />
    </svg>
    <span class="text">{{isA?trueText:falseText}}</span>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    //   控制是否能播放动画
    isAnimation: Boolean,
    //   是否能多次点击
    canRepeat: {
      type: Boolean,
      default: false,
    },
    //
    trueText: {
      type: String,
      default: "已赞",
    },
    falseText: {
      type: String,
      default: "赞一赞",
    },
    /**图标大小 */
    size: {
      type: Number,
      default: 30,
    },
    /**图标 */
    icon: {
      type: String,
      default: "lo-dianzan",
    },
    endEvent: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      isA:false,
    };
  },
  methods: {
    praiseEvent() {
      if (!this.isA) {
        this.endEvent();
      }
      this.isA = true;
    },
  },
  created() {
    this.isA=this.isAnimation;
  },
};
</script>
<style scoped>
.icon {
}
.icon:hover {
  color: rgb(67, 92, 233);
}
.text {
  font-size: 13px;
  color: grey;
}
.praise-box {
  cursor: pointer;
  /* position:absolute; */
}
.praise-animation {
  animation-name: runclock;
  animation-duration: 1s;
}
@keyframes runclock {
  50% {
    transform: rotateZ(-60deg);
  }
}
</style>