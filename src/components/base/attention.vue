<!-- 关注 -->
<template>
  <div class="attention-box" @click="attentionEvent">
    <svg
      ref="icon"
      aria-hidden="true"
      :class="['icon',{'praise-animation':isAnimation}]"
      @animationend="isAnimation = !canRepeat"
    >
      <use xlink:href="#lo-guanzhuS" />
    </svg>
    <span class="text">{{isAnimation?trueText:falseText}}</span>
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
      default: "已关注",
    },
    falseText: {
      type: String,
      default: "关注",
    },
  },
  data() {
    return {};
  },

  methods: {
    attentionEvent() {
      this.isAnimation = true;
    },
  },
};
</script>
<style scoped>
.icon {
  font-size: 30px;
}
.icon:hover {
  color: aquamarine;
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
  animation-timing-function: linear;
}
@keyframes runclock {
  12.5% {
    transform: translate(0px, -8px);
  }
  25% {
    transform: translate(0px, -14px);
  }
  37.5% {
    transform: translate(0px, -18px);
  }
  50% {
    transform: translate(0px, -20px);
  }
  62.5% {
    transform: translate(0px, -16px);
  }
  75% {
    transform: translate(0px, -10px);
  }
  87.5% {
    transform: translate(0px, -0px);
  }
}
</style>