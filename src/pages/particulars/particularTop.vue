<template>
  <div ref="container" class="container">
    <van-sticky :container="container">
      <div class="backShareBox">
        <span @click="handleClick">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQgMTcuNjZMOC4zNCAxMiAxNCA2LjM0Ii8+PC9nPjwvc3ZnPg=="
            alt
          />
        </span>
        <span>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYgNikiIHN0cm9rZT0iI0ZGRiI+PGNpcmNsZSBjeD0iMiIgY3k9IjYiIHI9IjIiLz48Y2lyY2xlIGN4PSI5IiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiLz48cGF0aCBkPSJNMy44MyA1LjI3bDMuNDYtMi4xMU0zLjcyIDYuOThsNC4zNyAyLjM5Ii8+PC9nPjwvZz48L3N2Zz4="
            alt
          />
        </span>
      </div>
    </van-sticky>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list.product_img_www">
        <img
          :src="item.url"
          alt
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import "vant/lib/index.css";
Vue.use(Swipe).use(SwipeItem);
export default {
  props: ["list"],
  data() {
    return { container: null };
  },
  methods: {
    handleClick() {
      this.$router.back();
    }
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
</script>

<style lang="stylus" scoped>
.van-swipe__track, .van-swipe
  height 2.32rem
img
  width 100%
  height 100%
span
  display inline-block
  width 0.24rem
  height 0.24rem
  color #333
  opacity 0.5
  background #333
  border-radius 50%
.container
  position relative
.backShareBox
  width 100%
  position absolute
  z-index 999
  padding 0.1rem 0.2rem 0
  display flex
  justify-content space-between
</style>