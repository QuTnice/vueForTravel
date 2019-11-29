<template>
  <div class="main">
    <div class="space"></div>
    <!-- 上图1 -->
    <div class="bm-cms-pictures">
      <div class="pic1-1">
        <ht-pic1 :list="Pic1"></ht-pic1>
      </div>
      <div>
        <ht-pic1 :list="Pic2"></ht-pic1>
      </div>
    </div>

    <div class="space"></div>
    <!-- 产品展示四宫格1顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic3"></ht-pic1>
    </div>

    <div class="space2"></div>
    <!-- 产品展示四宫格1 -->
    <div class="product-box">
      <index-product :list="pro1[0]"></index-product>
    </div>

    <div class="space2"></div>
    <!-- 更多案例定制 -->
    <div class="morePic1">
      <a href>
        <img src="https://product-ssl-qiniu.bmtrip.com/product_5dad50ee7af42.jpg" alt />
      </a>
    </div>

    <div class="space"></div>

    <!-- 产品展示四宫格2顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic4"></ht-pic1>
    </div>

    <div class="space2"></div>
    <!-- 产品展示四宫格2 -->
    <div class="product-box">
      <index-product :list="pro1[1]"></index-product>
    </div>

    <div class="space2"></div>
    <!-- 更多案例定制 -->
    <div class="morePic1">
      <a href>
        <img src="https://product-ssl-qiniu.bmtrip.com/product_5dad50ee7af42.jpg" alt />
      </a>
    </div>

    <div class="space"></div>

    <!-- 产品展示四宫格3顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic5"></ht-pic1>
    </div>

    <div class="space2"></div>
    <!-- 产品展示四宫格3 -->
    <div class="product-box">
      <index-product :list="pro1[2]"></index-product>
    </div>

    <div class="space2"></div>
    <!-- 更多案例定制 -->
    <div class="morePic1">
      <a href>
        <img src="https://product-ssl-qiniu.bmtrip.com/product_5dad50ee7af42.jpg" alt />
      </a>
    </div>

    <!-- <div class="space"></div> -->
    <!-- 产品展示轮播图1顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic6"></ht-pic1>
    </div>

    <div class="space2"></div>
    <!-- 产品展示轮播图 -->
    <div class="swiperBox">
      <index-swiper :list="swiperPic7"></index-swiper>
    </div>

    <div class="space"></div>
    <!-- 联系方式 -->
    <div class="Ht-contact">
      <ht-pic1 :list="Pic8"></ht-pic1>
    </div>
    <div class="space2"></div>
  </div>
</template>

<script>
import { get } from "utils/http.js";
import _ from "lodash";
import htPic1 from "./huantao/HTpic1";
import indexProduct from "components/index/product/indexProduct";
import indexSwiper from "components/index/swiper/HTswiper";

export default {
  components: { 
    htPic1,
    indexProduct,
    indexSwiper
  },
  data() {
    return {
      List: [],
      Pic1: [],
      Pic2: [],
      Pic3: [],
      Pic4: [],
      Pic5: [],
      Pic6: [],
      swiperPic7: [],
      Pic8: [],
      pro1: [],


    };
  },
  async mounted() {
    let result = await get({
      url:
        "/api/v3/m1/cms/page/detail?pageId=5dad3f5cb896310d8260c6b5&platform=4"
    });
    let result1 = await get({
      url: "/data/huantaoProduct.json"
    });

    this.pro1 = result1.data.list;
    let cache = _.chunk(this.pro1, 4);
    this.pro1 = cache;

    this.list = result.data.data[1];
    this.Pic1 = result.data.data[1].data[0].img;
    this.Pic2 = result.data.data[1].data[1].img;
    this.Pic3 = result.data.data[3].data[0].img;
    this.Pic4 = result.data.data[7].data[0].img;
    this.Pic5 = result.data.data[11].data[0].img;
    this.Pic6 = result.data.data[14].data[0].img;
    this.swiperPic7 = result.data.data[15].data;
    this.Pic8 = result.data.data[17].data[0].img;
    // console.log(this.swiperPic7);

    // console.log(this.Pic1);
  }
};
</script>

<style lang="stylus" scoped>
.main
  overflow-y scroll
  padding 0 0.18rem
.space
  width 100% x
  height 0.57rem
  background #fff
.space2
  width 100%
  height 0.2rem
img
  width 100%
.pic1-1
  img
    width 100%
    height 2.34rem
// .Ht-pro-1
.swiperBox
  overflow-x hidden
  width 100%
  height 2.5rem
  .swiper-wrapper
    width 100%
  .swiper-container
    width 100% 
  .swiper-img
    width 3.05rem
  .swiper-slide
    width 3.05rem !important 
    margin-right 0.1rem
  img
    width 3.05rem
    height 100%
</style>