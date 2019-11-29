<template>
  <div>
    <div id="main">
      <!-- 轮播图 -->
      <div class="static">
        <div class="swiper">
          <index-static :list="list1"></index-static>
        </div>
        <div class="zbNavBtn">
          <!-- 四个红点按钮 -->
          <div class="zbInsert">
            <insertitemone></insertitemone>
          </div>
          <!-- 按钮swiper -->
          <div class="siwper-btn">
            <insertitemtwo></insertitemtwo>
          </div>
        </div>
      </div>
      <!-- 产品展示1 -->
      <div class="productShow">
        <!-- 标题 -->
        <div class="bm-cms-item-title">
          <div class="zbimg">
            <img
              alt
              height="32"
              src="https://product-ssl-qiniu.bmtrip.com/product_5da96a0eec23b.png?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x32r/crop/339x32/format/jpg/interlace/1/sharpen/1/quality/100!"
              width="339"
            />

            <!-- <product-title></product-title> -->
          </div>
        </div>
        <!-- 产品图 -->
        <div class="bm-cms-item">
          <div class="bm-products">
            <index-product :list="productListOne[0]"></index-product>
          </div>
        </div>
      </div>
      <!-- 产品展示2 -->
      <div class="productShow">
        <!-- 标题 -->
        <div class="bm-cms-item-title">
          <div class="zbimg">
            <img
              alt
              height="32"
              src="https://product-ssl-qiniu.bmtrip.com/product_5da96a1e35d49.png"
              width="339"
            />

            <!-- <product-title></product-title> -->
          </div>
        </div>
        <!-- 产品图 -->
        <div class="bm-cms-item">
          <div class="bm-products">
            <index-product :list="productListOne[1]"></index-product>
          </div>
        </div>
      </div>
      <!-- 产品展示轮播图3 -->
      <div>
        <!-- 标题 -->
        <div class="bm-cms-item-title zb-item-title-second">
          <div class="zbimg">
            <img
              alt
              height="32"
              src="https://product-ssl-qiniu.bmtrip.com/product_5da96a2ced430.png"
              width="339"
            />
          </div>
        </div>
        <div class="zb-proSwier-wrap">
          <div class="zb-proSwiper-item">
            <product-swiper :list="productListTwo[0]"></product-swiper>
          </div>
        </div>
      </div>
      <!-- 产品展示轮播图4 -->
      <div>
        <!-- 标题 -->
        <div class="bm-cms-item-title zb-item-title-second">
          <div class="zbimg">
            <img
              alt
              height="32"
              src="https://product-ssl-qiniu.bmtrip.com/product_5da96a39c07ca.png"
              width="339"
            />
            <!-- <product-title></product-title> -->
          </div>
        </div>
        <div class="zb-proSwier-wrap">
          <div class="zb-proSwiper-item">
            <product-swiper :list="productListTwo[1]"></product-swiper>
          </div>
        </div>
      </div>
      <!-- 产品展示轮播图5 -->
      <div>
        <!-- 标题 -->
        <div class="bm-cms-item-title zb-item-title-second">
          <div class="zbimg">
            <img
              alt
              height="32"
              src="https://product-ssl-qiniu.bmtrip.com/product_5da96a4731ed0.png"
              width="339"
            />
          </div>
        </div>
        <div class="zb-proSwier-wrap">
          <div class="zb-proSwiper-item">
            <product-swiper :list="productListTwo[2]"></product-swiper>
          </div>
        </div>
      </div>
      <!-- 产品展示6 -->
      <div class="productShow">
        <!-- 标题 -->
        <div class="bm-cms-item-title">
          <div class="zbimg">
            <img
              alt
              height="32"
              src="https://product-ssl-qiniu.bmtrip.com/product_5da96a56eac5e.png"
              width="339"
            />
          </div>
        </div>
        <!-- 产品图 -->
        <div class="bm-cms-item">
          <div class="bm-products">
            <index-product :list="productListThr"></index-product>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "utils/http.js";
import _ from "lodash";

import indexStatic from "components/index/product/indexStatic";
import insertitemone from "components/index/product/indexInsert-one";
import insertitemtwo from "components/index/product/indexinsert-two";
import indexProduct from "components/index/product/indexProduct";
import productSwiper from "components/index/product/indexProductSwiper";
import productTitle from "components/index/product/indexProductTitle";

export default {
  components: {
    indexStatic,
    insertitemone,
    insertitemtwo,
    indexProduct,
    productSwiper,
    
  },
  data() {
    return {
      productList: [],
      productListOne: [],
      productListTwo: [],
      productListThr: [],
      list1: []
    };
  },
  async mounted() {
    let result = await get({
      url: "/data/indexProduct.json"
    });
    let result2 = await get({
      url:
        "/api/v3/m1/cms/page/detail?pageId=5da95458b896310cf66ba97f&platform=4"
    });
    // console.log(result2.data.data[1]);

    this.productList = result.data.list;
    // console.log(this.productList);
    
    this.list1 = result2.data.data[0].data;
    console.log(((this.list1[4].url).split('&')[1]).split('=')[1]);
    
    this.productListOne = _.chunk(_.dropRight(this.productList, 13), 4);
    this.productListTwo = _.chunk(
      _.dropRight(_.drop(this.productList, 8), 4),
      3
    );
    this.productListThr = _.drop(this.productList, 17);
  }
};
</script>

<style lang="stylus" scoped>
.zb-proSwier-wrap
  padding 0 .18rem
.zb-item-title-second {
  padding-left: 0.18rem;
}

.siwper-btn {
  padding: 0 0.18rem;
}

.productShow {
  padding: 0 0.18rem;
}

#main {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  background: #fff;
  flex-direction: column;

  .static {
    // padding 0 .18rem
    height: 3.5rem;
    width: 100%;
    background: #fff;
    margin-top: 0.2rem;
    text-align: center;

    .swiper {
      width 100%
      // margin-left: 0.18rem;
      display: flex;
      justify-content: center;
      // width: 3.39rem;
      height: 1.89rem;
      text-align: center;
      border-radius: 3%;
      padding 0 .18rem
    }

    .zbInsert {
      width: 100%;
      height: 0.58rem;
      margin: 0.18rem 0 0.25rem;
    }
  }

  .bm-cms-item-title {
    width: 100%;

    // height 5rem
    .zbimg {
      margin: 0.18rem 0 0.22rem;
      margin-bottom: 0.2rem;
      // padding 0 0.18rem
    }
  }

  .bm-products {
    width: 100%;
    height: 3.92rem;
  }
}
</style>