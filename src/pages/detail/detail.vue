<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast } from "vant";
// import "vant/lib/index.css";
Vue.use(NavBar).use(Toast);
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  mounted() {
    // console.log(this.$route.params.keyword);
    this.title = this.$route.params.keyword;
  }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar__left, .van-nav-bar__right, .van-nav-bar__title, .van-icon, .van-nav-bar__text
  color #333 !important
  font-weight normal  !important
</style>