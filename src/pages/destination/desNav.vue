<template>
  <div class="main">
    <van-tree-select :items="items" :main-active-index.sync="activeIndex">
      <template slot="content" v-for="item,index in list">
        <des-pro v-if="activeIndex === index" :list="item"></des-pro>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import Vue from "vue";
import { TreeSelect, Image } from "vant";
import { get } from "utils/http.js";
import _ from "lodash";
import "vant/lib/index.css";
import desPro from "components/index/product/destinationProduct";
Vue.use(TreeSelect);
Vue.use(Image);

export default {
  components: {
    desPro
  },
  data() {
    return {
      activeIndex: 0,
      items: [],
      list: [],
      pro: []
    };
  },
  async mounted() {
    let result = await get({
      url: "/api/v3/m1/area/group?scene=6&platform=4"
    });
    let list = result.data.list;
    this.list = list;
    for (let i = 0; i < list.length; i++) {
      this.items.push({ text: list[i].label });
    }
    // console.log(this.list);
  }
};
</script>

<style lang="stylus" scoped>
.main
  height 100%!important
  // overflow-y scroll
.van-sidebar-item--select
  border-color #C04374!important
  // overflow-y scroll
.van-tree-select
  height auto !important

.van-tree-select__content
  padding 0.2rem
  height 5.1rem
  overflow-y scroll !important
.van-sidebar-item
  text-align center !important
  font-size 0.13rem
  color #333
  font-weight 300 !important
</style>