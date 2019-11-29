<template>
  <div class="Box">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <div class="content">
      <div class="articleBox">
        <p class="zb-type">{{list.sort}}</p>
        <p class="zb-title">{{list.title}}</p>
        <p class="zb-subtitle">{{list.subtitle}}</p>
        <div class="zb-cont">
          <div class="one" v-if="list.content">
            <div  v-if="list.content[0]" v-html="list.content[0]">{{list.content[0]}}</div>
          </div>
          <div class="two" v-if="list.content">
            <div  v-if="list.content[2]" v-html="list.content[2]">{{list.content[2]}}</div>
          </div>
          <div class="three" v-if="list.content">
            <div  v-if="list.content[4]" v-html="list.content[4]">{{list.content[4]}}</div>
          </div>
          <div class="share">
            <div>好文分享给好友</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
import { get } from "utils/http.js";

Vue.use(NavBar);
export default {
  data() {
    return {
      list: [],
      
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      //   Toast("按钮");
    }
  },
  async mounted() {
      let id = this.$route.params.keyword
    let result = await get({
      url: "/api/v3/article/detail",
      params:{
          id: this.$route.params.keyword,
          platform: 4
      }
    });
    this.list = result.data;
  }
};
</script>
<style lang="stylus">
.zb-cont
  img
    width 100% !important
</style>
<style lang="stylus" scoped>
.articleBox
  width 100%
  padding 0.3rem 0.18rem
.Box
  display flex
  flex-direction column
  height 100%
  justify-content center
.van-nav-bar
  height 0.46rem
.van-icon
  font-size 0.24rem
  color #999
.content
  width 100%
  max-height 100%
  // height 6.21rem
  overflow-y scroll
  background #fff
.zb-type
  text-align left
  font-family PingFangSC-Regular
  font-size 0.11rem
  color #333
  letter-spacing 0.004rem
  margin-bottom 6Px
.zb-title
  text-align left
  font-family PingFangSC-Medium
  font-weight 500
  font-size 0.21rem
  color #333
  letter-spacing 0.01067rem
.zb-subtitle
  margin 0.18rem auto 0.18rem
  font-family PingFangSC-Light
  font-size 0.12rem
  color #898989
  letter-spacing 0.008rem
  text-align center
  font-weight 300
  text-align left
  font-size 12px
.share
  width 100%
  display flex
  justify-content center
  div
    width 1.72rem
    height 0.44rem
    line-height 0.44rem
    text-align center
    background #C04374
    color #fff
    border-radius 0.05rem
</style>