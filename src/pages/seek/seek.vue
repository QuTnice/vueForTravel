<template>
  <div class="box">
    <form action="/">
      <van-search
        v-model="keyword"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch(keyword)"
        @cancel="onCancel"
      />
    </form>

    <router-view :list="list" :keyword="keyword"></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { Search, Tab, Tabs } from "vant";
import { get } from "utils/http.js";
import BScroll from "better-scroll";

Vue.use(Search);
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      keyword: "",
      list: []
    };
  },
  components: {
    Search
    // seekPro
  },
  methods: {
    onCancel() {
      this.$router.push({
        path: "/layout"
      });
    },
    async onSearch(keyword) {
      // console.log(keyword)
      this.$router.push({
        name: "seekKeyword",
        params: { keyword }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.box
  width 100%
  height 100%
  background #fff
.srcoBox
  height 5.1rem
  overflow hidden
</style>