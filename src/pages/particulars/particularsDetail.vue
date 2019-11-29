<template>
  <div class="par-detail">
    <Top class="top" :list="list"></Top>
    <div class="sticky" :z-index="9999">
      <van-sticky>
        <div class="navBar">
          <van-nav-bar
            :title="title"
            left-text
            right-text
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
          >
            <van-icon slot="right">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNCAxMC41YTMuNDcgMy40NyAwIDAwLTMuMSAxLjkybC0zLjYxLTIuMjZBMy40MSAzLjQxIDAgMDA3LjUgOWEzLjYgMy42IDAgMDAtLjI5LTEuMzlsMi4xMi0xLjM3QTMuNDggMy40OCAwIDEwOC41IDRjLjAwMi40ODEuMTAxLjk1Ny4yOSAxLjRMNi42NyA2Ljc3QTMuNDYgMy40NiAwIDAwNCA1LjVhMy41IDMuNSAwIDEwMi44MiA1LjU1bDMuNzQgMi4zNGE0LjA3IDQuMDcgMCAwMC0uMDYuNjEgMy41IDMuNSAwIDEwMy41LTMuNXptLTItOWEyLjUgMi41IDAgMTEwIDUgMi41IDIuNSAwIDAxMC01em0tOCAxMGEyLjUgMi41IDAgMTEwLTUgMi41IDIuNSAwIDAxMCA1em0xMCA1YTIuNSAyLjUgMCAxMTAtNSAyLjUgMi41IDAgMDEwIDV6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
                alt
              />
            </van-icon>
          </van-nav-bar>
        </div>
      </van-sticky>
      <Top2 class="top2" :list="list"></Top2>
      <Comment class="comment" :list="list"></Comment>
      <City class="city" :list="list"></City>
      <Content class="content" :list="list"></Content>
    </div>
  </div>
</template>

<script>
import Top from "./particularTop";
import Top2 from "./particularTop2";
import Comment from "./particulatComment";
import City from "./particularCity";
import Content from "./particularContent";
import { get } from "utils/http.js";
import Vue from "vue";
import { NavBar, Toast, Sticky, Icon } from "vant";
Vue.use(NavBar)
  .use(Toast)
  .use(Sticky)
  .use(Icon);

export default {
  components: {
    Top,
    Comment,
    City,
    Content,
    Top2
  },
  data() {
    return {
      list: [],
      title: "",
      id: ""
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

  async mounted() {
    let result = await get({
      url: "/api/v3/m1/product/detail",
      params: {
        product_id: this.$route.params.keyword,
        platform: 4
      }
    });
    this.list = result.data;
    this.title = this.list.title
    this.id = this.$route.params.keyword;
    
  }
};
</script>

<style lang="stylus" scoped>
.par-detail
  // background #fff
  overflow-y scroll
  position relative
  z-index 9
  height 100%
  .top2
    margin-bottom 0.1rem
  .comment
    background #fff
    padding 0.12rem 0.18rem 0.09rem
  .city
    background #fff
    margin 0.09rem 0
  .navBar
    position absolute
    width 100%
    z-index -99
    .van-nav-bar__left, .van-nav-bar__right, .van-nav-bar__title, .van-icon, .van-nav-bar__text
      color #333 !important
      font-weight normal !important
</style>