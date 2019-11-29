<template>
  <div>
    <van-sticky :offset-top="45">
      <div class="combo">
        <van-tabs v-model="active" :line-width="18" @click="goAnchor">
          <van-tab title="产品亮点" v-if="pro1"></van-tab>
          <!-- 这个判断有问题(已改正) -->
          <van-tab title="特色体验" v-if="list.high_feature!== undefined && list.high_feature.length>0"></van-tab>
          <van-tab
            title="行程安排"
            v-if="list.plan_overview!== undefined && list.plan_overview.length>0"
          ></van-tab>
          <van-tab title="费用须知" v-if="list.www_fee_not_contain"></van-tab>
        </van-tabs>
      </div>
    </van-sticky>
    <!-- 产品亮点 -->
    <div class="tabCon-Box1" id="产品亮点" v-if="pro1" v-html="pro1.content">{{ pro1.content}}</div>
    <!-- 特色体验-->
    <div class="tabCon-Box2" id="特色体验" v-if="list.high_feature">
      <div class="high-feature-item" v-for="item in pro2">
        <div class="high-feature-label">{{item.title}}</div>
        <div class="high-feature-con">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="items in item.list[0].imgs">
              <img :src="items" alt />
            </van-swipe-item>
          </van-swipe>
          <div class="high-feature__label">{{item.list[0].label}}</div>
          <div class="high-feature__title">{{item.list[0].title}}</div>
          <div class="high-feature__content">{{item.list[0].content}}</div>
        </div>
      </div>
    </div>
    <!-- 行程安排 -->
    <div
      class="tabCon-Box3"
      id="行程安排"
      v-if="list.plan_overview!== undefined && list.plan_overview.length>0"
    >
      <!-- 第n天 -->
      <div class="journey-items" v-for="item in travel">
        <div class="journey-item__label">
          <span class="journey-item-day">D{{item.day}}</span>
          <span class="journey-item-title">{{item.title}}</span>
        </div>
        <div class="journey-item__content">
          <div class="journey-item-info">
            <div class="journey-item-title">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxwYXRoIGQ9Ik04IDJhNSA1IDAgMDAtNSA1YzAgMi42MyA0LjE5IDYuNDUgNC42NyA2Ljg3YS40OC40OCAwIDAwLjY2IDBDOC44MSAxMy40NSAxMyA5LjYzIDEzIDdhNSA1IDAgMDAtNS01em0wIDEwLjgyQzYuNjQgMTEuNTQgNCA4LjcgNCA3YTQgNCAwIDExOCAwYzAgMS43LTIuNjQgNC41NC00IDUuODJ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOCA0LjVhMi41IDIuNSAwIDEwMCA1IDIuNSAyLjUgMCAwMDAtNXptMCA0YTEuNSAxLjUgMCAxMTAtMyAxLjUgMS41IDAgMDEwIDN6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+"
                alt
              />
              <span class="step">具体行程</span>
            </div>
            <div class="journey-item-content" v-for="items in item.plans_detail">
              <div class="journey-route-item">
                <p class="journey-route-item-text">{{items.name}}</p>
              </div>
            </div>
          </div>
          <div class="journey-item-info">
            <div class="journey-item-title">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxwYXRoIGQ9Ik0xMy41IDExaC0xMWEuNS41IDAgMTAwIDFoMTFhLjUuNSAwIDEwMC0xeiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0yLjUgOS44OWgxMWEuNS41IDAgMDAuNS0uNSA2IDYgMCAwMC00LjUtNS44di0uMDhhMS41IDEuNSAwIDAwLTMgMHYuMDhBNiA2IDAgMDAyIDkuMzlhLjUuNSAwIDAwLjUuNXpNOCAzYS40OS40OSAwIDAxLjQ4LjQxIDMuODYgMy44NiAwIDAwLTEgMEEuNDkuNDkgMCAwMTggM3ptMCAxLjM5YTUgNSAwIDAxNSA0LjVIM2E1IDUgMCAwMTUtNC41eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg=="
                alt
              />
              <span>餐饮</span>
            </div>
            <div class="journey-item-content">
              <div class="journey-route-item">
                <p class="journey-route-item-text">
                  <span class="chifan">早</span>
                  <span>{{item.breakfast}}</span>
                </p>
                <p class="journey-route-item-text">
                  <span class="chifan">午</span>
                  <span>{{item.lunch}}</span>
                </p>
                <p class="journey-route-item-text">
                  <span class="chifan">晚</span>
                  <span>{{item.dinner}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="journey-item-info">
            <div class="journey-item-title">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxwYXRoIGQ9Ik0xMy4zNCA2LjMzQS41LjUgMCAwMDEzIDYuMmgtLjU5bC0xLTMuMTNhLjQ4LjQ4IDAgMDAtLjQ3LS4zNGgtNS44YS40OC40OCAwIDAwLS40Ny4zNGwtMSAzLjE0LS42Mi0uMDFhLjQ3LjQ3IDAgMDAtLjM4LjEzLjQ4LjQ4IDAgMDAtLjE3LjM3VjEyYTEuNSAxLjUgMCAwMDMgMGMxIC4wNiAxLjc4LjA5IDIuNDguMDlzMS41IDAgMi41Mi0uMVYxMmExLjUgMS41IDAgMDAzIDBWNi43YS41MS41MSAwIDAwLS4xNi0uMzd6TTUuNSAzLjc4aDVsLjgzIDIuNTZjLTEuMDYuMDgtMi40MS4xNy0zLjM1LjE3cy0yLjMxLS4wOS0zLjMxLS4xNmwuODMtMi41N3ptNyA4LjIyYS41LjUgMCAxMS0xIDB2LS41OGEuNTIuNTIgMCAwMC0uMTYtLjM3LjQ3LjQ3IDAgMDAtLjM0LS4xM2MtMS4yMy4wOS0yLjIzLjEzLTMgLjEzcy0xLjgyLS4wNS0zLS4xM2EuNTMuNTMgMCAwMC0uMzguMTQuNS41IDAgMDAtLjE2LjM2VjEyYS41LjUgMCAxMS0xIDBWNy4yNWwuNzQuMDZhMjkuMzEgMjkuMzEgMCAwMDMuOC4zMSAzMi43MSAzMi43MSAwIDAwMy44NC0uMzJoLjY2VjEyeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PGNpcmNsZSBmaWxsPSIjRkZGIiBjeD0iNSIgY3k9IjkiIHI9IjEiLz48Y2lyY2xlIGZpbGw9IiNGRkYiIGN4PSIxMSIgY3k9IjkiIHI9IjEiLz48L2c+PC9zdmc+"
                alt
              />
              <span>交通</span>
            </div>
            <div class="journey-item-content">
              <div class="journey-route-item">
                <p class="journey-route-item-text">{{item.traffic}}</p>
              </div>
            </div>
          </div>
          <div class="journey-item-info">
            <div class="journey-item-title">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTggOC41YTIgMiAwIDAwMi0ydi0xYTIgMiAwIDEwLTQgMHYxYTIgMiAwIDAwMiAyem0tMS0zYTEgMSAwIDExMiAwdjFhMSAxIDAgMTEtMiAwdi0xeiIvPjxwYXRoIGQ9Ik0xNS4zMiA2LjE4bC0yLjU5LTEuNWEuNTIuNTIgMCAwMC0uNjkuMTlsLTEuNSAyLjU5LTEuMTcgMkg2QTIuNSAyLjUgMCAwMDMuNSAxMmEuNS41IDAgMDAuNS41aDhhLjUuNSAwIDAwLjUtLjUgMi41IDIuNSAwIDAwLTItMi40NWwuODEtMS40MSAzLjg5LTFhLjUuNSAwIDAwLjM3LS40Mi40OS40OSAwIDAwLS4yNS0uNTR6bS0zLjkxIDUuMzJINC41OWExLjUgMS41IDAgMDExLjQxLTFoNGExLjUgMS41IDAgMDExLjQxIDF6TTEyIDYuOTJsLjY1LTEuMTIgMS4xMi42NS0xLjc3LjQ3eiIvPjwvZz48L2c+PC9zdmc+"
                alt
              />
              <span>导游</span>
            </div>
            <div class="journey-item-content">
              <div class="journey-route-item">
                <p class="journey-route-item-text">{{item.guide}}</p>
              </div>
            </div>
          </div>
          <div class="journey-item-info">
            <div class="journey-item-title">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y4QzE3QyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIvPjxwYXRoIGQ9Ik03IDkuNUg1YS41LjUgMCAwMDAgMWgyYS41LjUgMCAxMDAtMXpNNyA2LjVINWEuNS41IDAgMDAwIDFoMmEuNS41IDAgMDAwLTF6IiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTEzLjEyIDYuNTFsLTMuNjItLjlWM2EuNDYuNDYgMCAwMC0uMTgtLjM4LjQ2LjQ2IDAgMDAtLjQtLjExbC02IDFBLjUuNSAwIDAwMi41IDR2OWEuNS41IDAgMDAuNS41aDEwYS41LjUgMCAwMC41LS41VjdhLjUxLjUxIDAgMDAtLjM4LS40OXpNMy41IDQuNDJsNS0uODN2OC45MWgtNVY0LjQyem05IDguMDhoLTNWNi42NGwzIC43NXY1LjExeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg=="
                alt
              />
              <span>酒店</span>
            </div>
            <div class="journey-item-content">
              <div class="journey-route-item" v-for="items,index in item.hotels">
                <p
                  class="journey-route-item-text"
                >{{index+1}}:&nbsp;{{items.name_cn}}({{items.name_en}})</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 费用须知 -->
    <div class="tabCon-Box4" id="费用须知" v-if="list.www_fee_not_contain">
      <div class="fee_label">
        <div>费用包含</div>
        <div class="fee_content" v-html="list.www_fee_contain">{{list.www_fee_contain}}</div>
      </div>
      <div class="fee_label">
        <div>费用不含</div>
        <div class="fee_content" v-html="list.www_fee_not_contain">{{list.www_fee_not_contain}}</div>
      </div>
      <div class="fee_label">
        <div>预订须知</div>
        <div class="fee_content" v-html="list.www_notice">{{list.www_notice}}</div>
      </div>
      <p class="tip">{{list.tip}}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { get } from "utils/http.js";
import { Tab, Tabs, Sticky, Swipe, SwipeItem } from "vant";

Vue.use(Tab)
  .use(Tabs)
  .use(Sticky)
  .use(Swipe)
  .use(SwipeItem);
export default {
  props: ["list"],
  data() {
    return {
      active: 2,
      pro1: [],
      pro2: [],
      key: "",
      travel: []
    };
  },
  methods: {
    goAnchor(name, title) {
      let tab = "#" + title;
      var anchor = this.$el.querySelector(tab);
      let Fatherbox = this.$el.querySelector("#Fatherbox");
      document.querySelector(".par-detail").scrollTop = anchor.offsetTop - 90;
    },
  },
  async mounted() {
    let result1 = await get({
      url: "/api/v3/m1/product/trip/detail",
      params: {
        product_id: this.$route.params.keyword,
        combo_key: this.key,
        platform: 4
      }
    });
  },
  watch: {
    async list(value) {
      this.pro1 = value.feature[0];
      this.pro2 = value.high_feature;
      if (value.plan_overview !== undefined && value.plan_overview.length > 0) {
        this.key = Object.keys(value.plan_overview)[0];
        this.key = this.key.replace(/\;/, "%3B");
        let result = await get({
          url:
            "/api/v3/m1/product/trip/detail?product_id=" +
            this.$route.params.keyword +
            "&combo_key=" +
            this.key +
            "&platform=4"
        });
        this.travel = result.data.list;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.chifan
  width 0.16rem
  height 0.21rem
  background #F0F0F0
  color #898989
  margin-right 0.03rem
  font-size 0.13rem
.step
  display inline-block
  position relative
.journey-items
  padding-bottom 0.18rem
.journey-item-info
  position relative
  z-index 10
  .journey-item-title
    span
      position relative
      left 0.2rem
    img
      position absolute
      z-index 11
      top 0.03rem
.journey-item-info:before
  content ''
  position absolute
  height 100%
  width 0.01rem
  background #e1e1e1
  left 0.07rem
  top 0.08rem
  z-index 9
.journey-item-content
  padding 0.09rem 0 0.18rem
.journey-route-item-text
  font-size 0.13rem
  color #898989
  font-family PingFangSC-Light
  width 2.88rem
  margin-left 0.2rem
.journey-item__label
  margin-bottom 0.18rem
.journey-item-day
  display inline-block
  width 0.36rem
  height 0.24rem
  color #c14374
  font-weight bold
  background rgba(193, 67, 116, 0.1)
  border-radius 0.03rem
  line-height 0.24rem
  text-align center
  margin-right 0.12rem
.journey-item-title
  vertical-align middle
  img
    margin-right 0.03rem
.van-swipe
  border-radius 0.03rem
.van-swipe__track, .van-swipe
  height 1.89rem
  img
    width 100%
.high-feature-item
  width 100%
  padding-top 0.36rem
  padding-bottom 0.36rem
  position relative
.high-feature-item:after
  content ''
  width 100%
  height 0.01rem
  background #e1e1e1
  bottom 0
  position absolute
.high-feature-label
  text-align left
  font-size 0.15rem
  color #333333
  padding-left 0.12rem
  position relative
  margin-bottom 0.08rem
  font-weight bold
// border-left 2px solid #C14374
.high-feature-label:before
  content ''
  position absolute
  left 0.03rem
  top 7px
  width 2px
  height 10px
  background-color #C14374
.high-feature__label
  position relative
  display inline-block
  font-size 0.1rem
  color #C14374
  border 0.01rem solid #C14374
  border-radius 0.01rem
  padding 0.01rem 0.03rem
  margin 0.09rem 0
.high-feature__title
  font-size 0.13rem
  color #333333
  margin-bottom 0.06rem
.high-feature__content
  font-family PingFangSC-Light
  font-size 0.13rem
  color #898989
.fee_label
  text-align left
  font-size 0.15rem
  color #333333
  padding-left 0.12rem
  position relative
  margin-bottom 0.08rem
  font-weight bold
  padding-bottom 0.18rem
  position relative
.fee_label:before
  content ''
  position absolute
  left 0.05rem
  top 7px
  width 3px
  height 10px
  background-color #C14374
.fee_content
  color #898989
  font-size 0.13rem
.tip
  font-size 0.13rem
  color #bebebe
  // font-weight 200!important
  font-family PingFangSC-Light
</style>

<style lang="stylus" >
.van-tabs__content, .van-tab__pane
  width 100%
  padding 0 0.18rem
.tabCon-Box1
  width 100%
  padding 0 0.18rem
  background #fff
  margin-bottom 0.16rem
  padding-bottom 0.18rem
  p
    width 100% !important
    font-family PingFangSC-Light
    color #333333
    font-size 0.14rem
    letter-spacing 0.002rem
    line-height 1.6
    img
      width 100% !important
.tabCon-Box2, .tabCon-Box3, .tabCon-Box4
  width 100%
  padding 0 0.18rem
  background #fff
  margin-bottom 0.16rem
.tabCon-Box4, .tabCon-Box3
  padding-top 0.36rem
</style>