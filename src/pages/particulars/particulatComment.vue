<template>
  <div v-if="list.comment_count">
    <div class="comment_title">
      <div data-v-94b0c646 class="t-title t-title__score">
        <div data-v-94b0c646 class="left-txt">
          <span data-v-94b0c646>
            评分:
            <span data-v-94b0c646 style="font-size: 14px;">&nbsp;{{list.comment_average_score}}</span>
          </span>
          <!---->
        </div>
        <div data-v-94b0c646 class="right-block">
          <span data-v-94b0c646 class="dest_span">查看全部({{list.comment_count}})</span>
          <!---->
          <i data-v-94b0c646 class="van-icon van-icon-arrow">
            <!---->
          </i>
        </div>
      </div>
    </div>
    <div class="evaluate">
      <div class="evaluate-user">
        <div class="user-info">{{list.comment[0].name}}</div>
        <div class="eva-time">{{list.comment[0].time}}</div>
      </div>
    </div>
    <div class="evaluate-rate">
      <div class="evaluate-rate__flexbox">
        <div class="evaluate-rate__item">
          <span>行程安排</span>
          <van-rate v-model="list.comment[0].trip_score" readonly size="12px" :allow-half="true" />
        </div>
        <div class="evaluate-rate__item">
          <span>餐饮住宿</span>
          <van-rate v-model="list.comment[0].hotel_score" readonly size="12px" :allow-half="true" />
        </div>
      </div>
      <div class="evaluate-rate__flexbox">
        <div class="evaluate-rate__item">
          <span>导游服务</span>
          <van-rate v-model="list.comment[0].guide_score" readonly size="12px" :allow-half="true" />
        </div>
        <div class="evaluate-rate__item">
          <span>旅游交通</span>
          <van-rate v-model="list.comment[0].traffic_score" readonly size="12px" :allow-half="true" />
        </div>
      </div>
    </div>
    <div class="evaluate-txt">{{list.comment[0].content}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Rate } from "vant";

Vue.use(Rate);
export default {
  props: ["list"],
  data() {
    return {
      value: 4.5
    };
  }
};
</script>

<style lang="stylus" scoped>
.comment_title
  .t-title
    display flex
    justify-content space-between
    color #ff9900
    font-size 0.13rem
    font-family PingFangSC-Regular
.evaluate
  padding 0.18rem 0 0.09rem
  width 100%
  font-family 'PingFang SC'
  .evaluate-user
    display flex
    justify-content space-between
  .user-info
    font-size 0.14rem
  .eva-time
    color #898989
    letter-spacing 0
    font-size 0.1rem
.evaluate-rate__flexbox
  display flex
  justify-content space-between
  span
    font-size 0.1rem
    margin-right 0.04rem
.evaluate-txt
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  -webkit-box-orient vertical
  margin-top 0.12rem
</style>