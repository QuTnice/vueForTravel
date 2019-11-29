<template>
  <div class="main">

    <div class="space2"></div>

    <div class="proBox">
      <div class="product-box">
        <index-product :list="pro1"></index-product>
      </div>
    </div>

    <div class="space2"></div>
  </div>
</template>

<script>
import { get } from "utils/http.js";
import _ from "lodash";

import indexProduct from "components/index/product/indexProduct";

export default {
  components: {
    indexProduct
  },
  data() {
    return {
      Pic1: [],
      pro1: []
    };
  },
  async mounted() {
    let result = await get({
      url:
        "/api/v3/m1/cms/page/detail?pageId=5da95cd6b896310ceb4a61a0&platform=4"
    });
    let result1 = await get({
      url: "/data/eastProduct.json"
    });
    
    this.Pic1 = result.data.data[0].data[0].img;
    this.pro1 = result1.data.list
    console.log(this.pro1[0]);
  }
};
</script>

<style lang="stylus" scoped>
.main
  overflow-y scroll
  padding 0 0.18rem
.Ht-pro-1
  img
    width 100%
.space
  width 100%
  height 0.57rem
  background #fff
.space2
  width 100%
  height 0.2rem
</style>