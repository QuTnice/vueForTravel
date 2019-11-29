<template>
  <div>
    <div class="filter">
      <span class="jiage" @click="all">综合</span>
      <span>
        <span class="price-btn" @click="changePrice">
          价格
          <span>
            <svg
              t="1574343408917"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8188"
              width="8"
              height="8"
            >
              <path
                d="M913.65104558 602.27936331l-368.48719802-368.48719802-368.48719802 368.48719802z"
                fill
                p-id="8189"
              />
            </svg>
            <svg
              t="1574343365492"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7401"
              width="8"
              height="8"
            >
              <path
                d="M195.98701092 349.25822325L512 760.07511006 828.01298908 349.25822325"
                p-id="7402"
              />
            </svg>
          </span>
        </span>
      </span>
    </div>
    <div class="srcoBox">
      <div data-v-077a2bbc class="bm-product-more-slide">
        <router-link tag="a" data-v-077a2bbc class="bm-product-more-item" v-for="item in list" :to="'/particulars/'+item.id"> 
          <div data-v-077a2bbc class="bm-product-item" @click="handleClick(item.id)">
            <a data-v-077a2bbc  class="bm-product-item-wrap" style="width: auto;">
              <img :src="item.img" />
              <div data-v-077a2bbc class="bm-product-item-info">
                <div data-v-077a2bbc class="bm-product-item-title">{{item.title}}</div>
                <div data-v-077a2bbc class="bm-product-item-subtitle">
                  <span data-v-077a2bbc>{{item.subtitle}}</span>
                </div>
                <div data-v-077a2bbc class="bm-product-item-bottom">
                  <ul data-v-077a2bbc class="bm-product-item-tags">
                    <li data-v-077a2bbc v-for="items in item.mark">{{items.name}}</li>
                  </ul>
                  <div data-v-077a2bbc class="bm-product-item-price">￥{{item.price}}起</div>
                </div>
              </div>
            </a>
          </div>
        </router-link>
        <div class="space2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "utils/http.js";
import BScroll from "better-scroll";
// import { get } from "utils/http.js";
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

export default {
  props: ["type", "keyword"],
  data() {
    return {
      // type
      list: [],
      Key: "",
      order: ""
    };
  },
  async mounted() {
    let result = await get({
      url: "/api/v3/m1/product/list",
      params: {
        keywords: this.$route.params.keyword,
        theme_id: "",
        district_id: "",
        order_by: "",
        type: this.type,
        platform: 4
      }
    });
    this.list = result.data.list;
    let bScroll = new BScroll(".srcoBox", {
      // scrollY: true,
      click: true,
      pullUpLoad: true
    });
    let page = 1;
    bScroll.on("pullingUp", async () => {
      page++;
      var result1 = await get({
        url: "/api/v3/m1/product/list",
        params: {
          keywords: this.$route.params.keyword,
          district_id: "",
          theme_id: "",
          type: "",
          order_by: "",
          page: page,
          platform: 4
        }
      });
      await this.$nextTick();
      bScroll.refresh();
      if (result1.data.list.length != 0) {
        this.list = [...this.list, ...result1.data.list];
        console.log(this.list);
        bScroll.finishPullUp();
      } else {
        Toast('已经最多啦~');
        return
      }
    });
  },
  watch: {
    async $route(to, from) {
      console.log(to.params.keyword);

      let result = await get({
        url: "/api/v3/m1/product/list",
        params: {
          keywords: to.params.keyword,
          theme_id: "",
          district_id: "",
          platform: 4
        }
      });
      this.list = result.data.list;
    }
  },
  methods: {
    async changePrice() {
      if (this.order === "" || this.order === "2") {
        this.order = "1";
        let result = await get({
          url: "/api/v3/m1/product/list",
          params: {
            keywords: this.$route.params.keyword,
            theme_id: "",
            district_id: "",
            order_by: "1",
            type: this.type,
            platform: 4
          }
        });
        this.list = result.data.list;
      } else if (this.order === "1") {
        this.order = "2";
        let result = await get({
          url: "/api/v3/m1/product/list",
          params: {
            keywords: this.$route.params.keyword,
            theme_id: "",
            district_id: "",
            order_by: "2",
            type: this.type,
            platform: 4
          }
        });
        this.list = result.data.list;
      }
    },
    async all() {
      let result = await get({
        url: "/api/v3/m1/product/list",
        params: {
          keywords: this.$route.params.keyword,
          theme_id: "",
          district_id: "",
          order_by: "",
          type: this.type,
          platform: 4
        }
      });
      this.list = result.data.list;
    },
    handleClick(value){
      this.$router.push({
        path: '/particulars/'+value
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
.filter
  height 0.4rem
  line-height 0.4rem
  text-align center
  >span
    display inline-block
    width 0.78rem
  .price-btn
    display flex
    align-items center
    >span
      height 0.16rem
      display flex
      // line-height .4rem
      flex-direction column
.srcoBox
  overflow hidden
  height 6.3rem
  background #fff
.bm-product-more-slide
  overflow hidden
  color #212121
  user-select none
  font-size 0.14em
  line-height 1.5
  font-family PingFangSC-Regular, Hiragino Sans GB, sans-serif
  -webkit-box-direction normal
  list-style none
  box-sizing border-box
  -webkit-tap-highlight-color rgba(0, 0, 0, 0)
  width 3.39rem
.bm-product-item
  user-select none
  font-size 0.14em
  line-height 1.5
  font-family PingFangSC-Regular, Hiragino Sans GB, sans-serif
  -webkit-box-direction normal
  list-style none
  color #00afc7
  box-sizing border-box
  -webkit-tap-highlight-color rgba(0, 0, 0, 0)
  margin-bottom 0.2rem
.bm-product-item-wrap
  user-select none
  font-size 0.14em
  line-height 1.5
  font-family PingFangSC-Regular, Hiragino Sans GB, sans-serif
  -webkit-box-direction normal
  list-style none
  box-sizing border-box
  -webkit-tap-highlight-color rgba(0, 0, 0, 0)
  outline 0 none
  text-decoration none
  color #00afc7
  height auto
  width auto
  margin-bottom 0.1rem
  img
    user-select none
    font-size 0.14rem
    line-height 1.5
    font-family PingFangSC-Regular, Hiragino Sans GB, sans-serif
    -webkit-box-direction normal
    list-style none
    color #00afc7
    box-sizing border-box
    -webkit-tap-highlight-color rgba(0, 0, 0, 0)
    border 0
    vertical-align middle
    border-radius 0.03rem
    width 3.39rem
    height 2.1rem
.morris-default-style
  user-select none
  font-size 0.14em
  line-height 1.5
  font-family PingFangSC-Regular, Hiragino Sans GB, sans-serif
  -webkit-box-direction normal
  list-style none
  color #00afc7
  box-sizing border-box
  -webkit-tap-highlight-color rgba(0, 0, 0, 0)
  padding 0.12rem 0.09rem 0
.bm-product-item-subtitle
  user-select none
  line-height 1.5
  -webkit-box-direction normal
  box-sizing border-box
  -webkit-tap-highlight-color transparent
  -webkit-font-smoothing antialiased
  list-style none
  text-align left
  margin 0
  padding 0
  font-family PingFangSC-Light
  font-size 11px
  color #898989
  letter-spacing 0.15px
  margin-bottom 9px
.bm-product-item-bottom
  user-select none
  line-height 1.5
  -webkit-box-direction normal
  box-sizing border-box
  -webkit-tap-highlight-color transparent
  font-family 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif
  font-size 12px
  -webkit-font-smoothing antialiased
  list-style none
  text-align left
  color #333
  margin 0
  padding 0
  display flex
  -webkit-box-pack justify
  justify-content space-between
  -webkit-box-align center
  align-items center
.space2
  height 0.9rem
</style>