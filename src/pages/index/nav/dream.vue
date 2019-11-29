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

    <!-- 轮播图1顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic1"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 顶轮播图1 -->
    <div class="swiperBox">
      <index-swiper :list="swiperPic1"></index-swiper>
    </div>

    <div class="space2"></div>

    <!-- 轮播图2顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic2"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图2 -->
    <div class="swiperBox">
      <index-swiper :list="swiperPic2"></index-swiper>
    </div>

    <div class="space2"></div>

    <!-- 轮播图3顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic3"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 产品轮播图2 -->
    <div class="swiperBox-2">
      <index-pro-swiper :list="pro1"></index-pro-swiper>
    </div>

    <div class="space2"></div>

    <!-- 产品轮播图3顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic4"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 产品轮播图3 -->
    <div class="swiperBox-2">
      <index-pro-swiper :list="pro2"></index-pro-swiper>
    </div>

    <div class="space2"></div>

    <!-- 静态图1 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic5"></ht-pic1>
    </div>

    <div class="space2"></div>

    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic6"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图4 -->
    <div class="swiperBox">
      <index-swiper :list="swiperPic3"></index-swiper>
    </div>

    <div class="space2"></div>

    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic9"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图5 -->
    <div class="swiperBox">
      <index-swiper :list="swiperPic4"></index-swiper>
    </div>

    <div class="space2"></div>

    <!-- 轮播图6顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic10"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图6 -->
    <div class="swiperBox">
      <index-swiper :list="swiperPic5"></index-swiper>
    </div>

    <div class="space2"></div>

    <!-- 轮播图7顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic11"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 产品四宫格1 -->
    <div class="proBox">
      <div class="product-box">
        <index-product :list="pro6"></index-product>
      </div>
    </div>

    <div class="space2"></div>

    <!-- 轮播图8顶部图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic12"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 产品四宫格2 -->
    <div class="proBox">
      <div class="product-box">
        <index-product :list="pro7"></index-product>
      </div>
    </div>

    <div class="space2"></div>

    <!-- 静态图 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic13"></ht-pic1>
    </div>

    <div class="space2"></div>

    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic14"></ht-pic1>
    </div>

    <div class="space2"></div>

    <!-- 轮播图6 -->
    <div class="swiperBox">
      <index-swiper :list="swiperPic6"></index-swiper>
    </div>

    <div class="space2"></div>

    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic15"></ht-pic1>
    </div>

    <div class="space2"></div>

    <div class="swiperBox-2">
      <single-pro :list="pro8[0]"></single-pro>
    </div>

    <div class="space2"></div>

    <div class="swiperBox-2">
      <single-pro :list="pro9[0]"></single-pro>
    </div>

    <div class="space2"></div>

    <!-- 轮播 -->
    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic16"></ht-pic1>
    </div>

    <div class="space2"></div>

    <div class="swiperBox-2">
      <index-pro-swiper :list="pro2"></index-pro-swiper>
    </div>

    <div class="space2"></div>

    <div class="Ht-pro-1">
      <ht-pic1 :list="Pic17"></ht-pic1>
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
      swiperPic2: [],
      swiperPic3: [],
      swiperPic4: [],
      swiperPic5: [],
      swiperPic6: [],
      Pic9: [],
      Pic10: [],
      Pic11: [],
      Pic12: [],
      Pic13: [],
      Pic14: [],
      Pic15: [],
      Pic16: [],
      Pic17: [],
      pro: [],
      pro1: [],
      pro2: [],
      pro3: [],
      pro4: [],
      pro5: [],
      pro6: [],
      pro7: [],
      pro8: [],
      pro9: [],
      pro10: []
    };
  },
  async mounted() {
    let result = await get({
      url:
        "/api/v3/m1/cms/page/detail?pageId=5dc52fd1b896310cf220c734&platform=4"
    });
    let result1 = await get({
      url: "/data/dreamProduct.json"
    });

    this.pro = result1.data.list;
    let cache1 = _.dropRight(this.pro, 15);
    this.pro1 = cache1;
    let cache2 = _.dropRight(_.drop(this.pro, 3), 12);
    this.pro2 = cache2;
    let cache3 = _.chunk(_.dropRight(_.drop(this.pro, 7), 2), 3);
    this.pro3 = cache3;
    this.pro4 = _.drop(this.pro, 13);
    this.pro5 = _.dropRight(_.drop(this.pro, 3), 11);
    this.pro6 = _.dropRight(_.drop(this.pro, 6), 6);
    this.pro7 = _.dropRight(_.drop(this.pro, 12), 2);
    this.pro8 = _.dropRight(_.drop(this.pro, 15), 2);
    this.pro9 = _.dropRight(_.drop(this.pro, 16), 1);
    this.pro10 = _.dropRight(this.pro, 15);

    this.list = result.data.data[1];
    this.Pic0 = result.data.data[0].data[0].img;
    this.swiperPic1 = result.data.data[2].data;
    this.swiperPic2 = result.data.data[4].data;
    this.Pic1 = result.data.data[1].data[0].img;
    this.Pic2 = result.data.data[3].data[0].img;
    this.Pic3 = result.data.data[5].data[0].img;
    this.Pic4 = result.data.data[7].data[0].img;
    this.Pic5 = result.data.data[9].data[0].img;
    this.Pic6 = result.data.data[10].data[0].img;
    this.swiperPic3 = result.data.data[11].data;
    this.swiperPic4 = result.data.data[13].data;
    this.swiperPic5 = result.data.data[15].data;
    this.swiperPic6 = result.data.data[22].data;
    this.Pic9 = result.data.data[12].data[0].img;
    this.Pic10 = result.data.data[14].data[0].img;
    this.Pic11 = result.data.data[16].data[0].img;
    this.Pic12 = result.data.data[18].data[0].img;
    this.Pic13 = result.data.data[20].data[0].img;
    this.Pic14 = result.data.data[21].data[0].img;
    this.Pic15 = result.data.data[23].data[0].img;
    this.Pic16 = result.data.data[25].data[0].img;
    this.Pic17 = result.data.data[27].data[0].img;
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
    // height 2.34rem
// .Ht-pro-1
.swiperBox
  overflow-x hidden
  width 100%
.swiper-wrapper
  width 100%
.swiper-container
  width 100%
.swiper-img
  width 3.05rem
.swiper-slide
  width 3.05rem !important
  margin-right 0.1rem
</style>