<template>
  <div class="main">
    <div class="space2"></div>
    <div class="tenpx"></div>
    <!-- 上图1 -->
    <div class="bm-cms-pictures">
      <div class="pic1-1">
        <ht-pic1 :list="Pic0"></ht-pic1>
      </div>
    </div>

    <div class="space2"></div>

    <!-- 顶轮播图1 -->
    <div class="swiperBox">
      <index-swiper :list="swiperPic1"></index-swiper>
    </div>

    <div class="space2"></div>

    <!-- 轮播图2顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic1"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图2 -->
    <div class="swiperBox-2">
      <index-pro-swiper :list="pro1"></index-pro-swiper>
    </div>

    <div class="space2"></div>

    <!-- 获得更多方案 -->
    <div class="morePic1">
      <a href>
        <img src="https://product-ssl-qiniu.bmtrip.com/product_5daa78525d2d2.jpg" alt />
      </a>
    </div>

    <div class="space2"></div>

    <!-- 产品展示四宫格1顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic2"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 产品展示四宫格1 -->
    <div class="product-box">
      <index-product :list="pro2"></index-product>
    </div>

    <div class="space2"></div>

    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic3"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图2顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic4"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图2 -->
    <div class="swiperBox-2">
      <index-pro-swiper :list="pro3[0]"></index-pro-swiper>
    </div>

    <div class="space2"></div>

    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic3"></ht-pic1>
    </div>

    <!-- 轮播图2顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic5"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图3 -->
    <div class="swiperBox-2">
      <index-pro-swiper :list="pro3[1]"></index-pro-swiper>
    </div>

    <!-- 获取更多 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic6"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 静态图1 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic8"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 静态图2 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic9"></ht-pic1>
    </div>

    <!-- <div class="space2"></div> -->
    <div class="swiperBox-2">
      <single-pro :list="pro4[0]"></single-pro>
    </div>

    <!-- 静态图3 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic10"></ht-pic1>
    </div>

    <!-- 轮播图3 -->
    <div class="swiperBox-2">
      <single-pro :list="pro4[1]"></single-pro>
    </div>

    <div class="space2"></div>

    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic11"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图3 -->
    <div class="swiperBox-2">
      <single-pro :list="pro5[0]"></single-pro>
    </div>

    <div class="space2"></div>

    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic12"></ht-pic1>
    </div>
  </div>
</template>

<script>
import { get } from "utils/http.js";
import _ from "lodash";
import htPic1 from "./huantao/HTpic1";
import singlePro from "./super/singleProduct";
import indexProduct from "components/index/product/indexProduct";
import indexSwiper from "components/index/swiper/HTswiper";
import indexProSwiper from "components/index/product/indexProductSwiper";

export default {
  components: {
    htPic1,
    indexProduct,
    indexSwiper,
    indexProSwiper,
    singlePro
  },
  data() {
    return {
      List: [],
      Pic0: [],
      Pic1: [],
      Pic2: [],
      Pic3: [],
      Pic4: [],
      Pic5: [],
      Pic6: [],
      swiperPic1: [],
      Pic8: [],
      Pic9: [],
      Pic10: [],
      Pic11: [],
      Pic12: [],
      pro: [],
      pro1: [],
      pro2: [],
      pro3: [],
      pro4: [],
      pro5: [],
    };
  },
  async mounted() {
    let result = await get({
      url:
        "/api/v3/m1/cms/page/detail?pageId=5da95ad1b896315b64180ed4&platform=4"
    });
    let result1 = await get({
      url: "/data/tourGroupPro.json"
    });

    this.pro = result1.data.list;
    let cache1 = _.dropRight(this.pro, 12);
    this.pro1 = cache1;
    let cache2 = _.dropRight(_.drop(this.pro, 3), 8);
    // let cache2 = _.dropRight(this.pro, 12);
    this.pro2 = cache2;
    let cache3 = _.chunk(_.dropRight(_.drop(this.pro, 7), 2), 3);
    this.pro3 = cache3;
    // console.log(this.pro);
    this.pro4 = _.drop(this.pro, 13);
    // console.log(this.pro4);
    this.pro5 = _.dropRight((_.drop(this.pro , 3)),11)

    this.list = result.data.data[1];
    this.Pic0 = result.data.data[0].data[0].img;
    this.swiperPic1 = result.data.data[1].data;
    this.Pic1 = result.data.data[2].data[0].img;
    this.Pic2 = result.data.data[5].data[0].img;
    this.Pic3 = result.data.data[7].data[0].img;
    this.Pic4 = result.data.data[8].data[0].img;
    this.Pic5 = result.data.data[11].data[0].img;
    this.Pic6 = result.data.data[13].data[0].img;
    this.Pic8 = result.data.data[14].data[0].img;
    this.Pic9 = result.data.data[15].data[0].img;
    this.Pic10 = result.data.data[17].data[0].img;
    this.Pic11 = result.data.data[19].data[0].img;
    this.Pic12 = result.data.data[21].data[0].img;
    // console.log(this.swiperPic7);

    // console.log(this.Pic1);
  }
};
</script>

<style lang="stylus" scoped>
.Ht-pro-1
  width 100%
.main
  overflow-y scroll
  padding 0 0.18rem
.space
  width 100%
  height 0.57rem
  background #fff
.space2
  width 100%
  height 0.2rem
.tenpx
  width 100%
  height 0.1rem
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
  height 3.18rem
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