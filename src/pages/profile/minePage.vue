<template>
  <div class="main">
    <header>
      <div class="searchbar">
        <div>
          <svg
            t="1574068364639"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2717"
            width="22"
            height="22"
          >
            <path
              d="M700.75 857.16h-369.5a12 12 0 0 1-10.39-6l-184.76-320a12 12 0 0 1 0-12l184.76-320a12 12 0 0 1 10.39-6h369.5a12 12 0 0 1 10.39 6l184.76 320a12 12 0 0 1 0 12l-184.76 320a12 12 0 0 1-10.39 6z m-362.57-24h355.64l177.83-308-177.83-308H338.18l-177.83 308z"
              p-id="2718"
            />
            <path
              d="M516 667.16c-78.3 0-142-63.7-142-142s63.7-142 142-142 142 63.7 142 142-63.7 142-142 142z m0-260a118 118 0 1 0 118 118 118.13 118.13 0 0 0-118-118z"
              p-id="2719"
            />
          </svg>
        </div>
      </div>
      <div class="login" @click="showPopup">
        <div class="iconFont">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/logo_white_2.png?imageView2/4/w/120/h/120/format/jpg/interlace/1/q/70"
            alt
          />
          <div class="Font-login">登录/注册</div>
        </div>
        <div class="arrow">
          <svg
            t="1574069017926"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3471"
            width="22"
            height="22"
          >
            <path
              d="M377.018182 802.909091c-6.981818 0-11.636364-2.327273-16.290909-6.981818-9.309091-9.309091-9.309091-23.272727 0-32.581818L612.072727 512 360.727273 260.654545c-9.309091-9.309091-9.309091-23.272727 0-32.581818s23.272727-9.309091 32.581818 0l267.636364 267.636364c9.309091 9.309091 9.309091 23.272727 0 32.581818L395.636364 795.927273c-4.654545 4.654545-11.636364 6.981818-18.618182 6.981818z"
              p-id="3472"
            />
          </svg>
        </div>
      </div>
      <van-popup v-model="show" closeable>
        <div class="loginBox">
          <div class="loginTitle">登录</div>
          <div class="phone">
            <input class="phoneNum" type="text" name id placeholder="请输入手机号" />
          </div>
          <van-button type="primary" to="index" color='#C04374'>下一步</van-button>
        </div>
      </van-popup>
      <div class="space2"></div>
    </header>
    <div class="space14"></div>
    <div class="profileItem">
      <mine-order :list="list"></mine-order>
      <mine-nav :list="list"></mine-nav>
    </div>
  </div>
</template>

<script>
import mineNav from "./mineNav";
import mineOrder from "./mineOrder";
import { get } from "utils/http.js";
import _ from "lodash";
import Vue from "vue";
import { Popup, Button  } from "vant";

Vue.use(Popup).use(Button );
export default {
  components: {
    mineNav,
    mineOrder
  },
  data() {
    return {
      list: [],
      show: false
    };
  },
  async mounted() {
    let result = await get({
      url: "/api/v3/m1/user/info/list?platform=4"
    });
    this.list = result.data.list;
    console.log(this.list);
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
.phoneNum
  border 0
  margin-top 0.3rem
.phone
  padding-bottom .1rem
  $border(0 0 1px 0)
.van-cell .van-field
  padding-right 0 !important
  padding-left 0 !important
.loginTitle
  font-family 'PingFang SC'
  font-size 0.16rem
.loginBox
  width 3rem
  height 2.1rem
  padding 0.16rem 0.2rem
  button  
    width 100%
    height 0.44rem
    margin-top .1rem
header
  // margin-bottom .14rem
  padding 0 0.18rem
.searchbar
  // width  100%
  display flex !important
  height 0.44rem
  background #fff
  align-items center
  flex-direction row !important
  justify-content flex-end
.title
  font-family PingFangSC-Medium
  font-size 0.15rem
.login
  height 0.44rem
  display flex !important
  flex-direction row !important
  line-height 0.44rem
  justify-content space-between
  position relative
  svg
    position absolute
    top 0
    bottom 0
    right 0
    // left 0
    margin auto 0
  img
    width 0.48rem
    height 0.48rem
    margin-right 0.15rem
  .arrow
    margin-right 0.18rem
    width 0.24rem
    height 100%
    text-align center
    line-height 0.44rem
.Font-login
  font-size 0.21rem
// .main
// 
.space2
  height 0.2rem
.space14
  height 0.14rem
  background #f5f5f5
.profileItem
  width 100%
  padding 0 0.18rem
  background #f5f5f5
  height 4.9rem
.iconFont
  display flex
</style>