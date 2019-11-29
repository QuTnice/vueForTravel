<template>
  <div id="root">
    <header>
      <div class="searchbar">
        <router-link tag="div" to="/seek">
          <svg
            t="1573631108707"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1642"
            width="22"
            height="22"
          >
            <path
              d="M830.486464 796.124515 672.790943 638.42797c44.959904-52.799318 72.109099-121.232412 72.109099-196.016087 0-167.084182-135.448007-302.533214-302.53219-302.533214s-302.533214 135.449031-302.533214 302.533214 135.449031 302.53219 302.533214 302.53219c74.782651 0 143.215745-27.149196 196.017111-72.109099L796.101988 830.531518c9.499249 9.499249 24.885227 9.499249 34.384476 0S839.986737 805.623764 830.486464 796.124515zM442.366829 698.401131c-141.380814 0-255.989248-114.631985-255.989248-255.989248 0-141.403341 114.608434-255.989248 255.989248-255.989248 141.37979 0 255.989248 114.585907 255.989248 255.989248C698.356077 583.769146 583.747643 698.401131 442.366829 698.401131z"
              p-id="1643"
            />
          </svg>
        </router-link>
        <div class="title">首页</div>
        <div @click="showPopup">
          <svg
            t="1573631138213"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2522"
            width="22"
            height="22"
          >
            <path
              d="M516.4384171045926 128.07693562311113c-219.70163757511108 0-397.23831569066664 177.53667690192594-397.23831569066664 397.23831569066664v332.8812694945185c0 24.411293468444445 19.97287636385185 44.384169832296294 44.384169832296294 44.38416861866666h93.20675555555555c24.411293468444445 0 44.384169832296294-19.97287636385185 44.38416861866666-44.38416861866666v-219.70163878874072c0-24.411293468444445-19.97287636385185-44.384169832296294-44.38416861866666-44.38416861866666h-93.20675555555555v-68.7954620871111c0-195.2903453202963 157.5638005380741-352.8541458583704 352.8541458583704-352.854147072s352.8541458583704 157.5638005380741 352.8541458583704 352.854147072v68.7954620871111h-57.69941993244444c-13.315251313777777 0-22.19208430933333 8.876834209185184-22.19208430933333 22.19208430933333s8.876834209185184 22.19208430933333 22.19208430933333 22.19208430933333l57.69941993244444-2.2192079454814815v221.92084673422224l-95.42596350103702 2.2192079454814815v-197.50955326577775c0-13.315251313777777-8.876834209185184-22.19208430933333-22.19208552296296-22.19208430933333s-22.19208430933333 8.876834209185184-22.19208430933333 22.19208430933333v197.50955326577775c0 24.411293468444445 19.97287636385185 42.164960673185185 42.164960673185185 42.164960673185185H867.0733550174814c24.411293468444445 0 42.164960673185185-19.97287636385185 42.164960673185185-42.164960673185185V523.0960421546667c4.438417104592592-217.48242962962962-175.31746895644446-395.0191065315555-392.7998985860741-395.0191065315555z m-352.8541458583704 510.41794639644445h93.20675555555555v219.70163878874072h-93.20675555555555v-219.70163878874072z"
              fill
              p-id="2523"
            />
          </svg>
        </div>
        <van-popup v-model="show" class="popupBox" :closeable="true">
          <div class="title">联系客服</div>
          <div class="svgBox">
            <svg
              t="1574388078348"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6646"
              width="82"
              height="82"
            >
              <path
                d="M951.296 454.656v-6.144C951.296 211.968 754.688 20.48 513.024 20.48 271.36 20.48 74.752 211.968 74.752 447.488v6.144C32.768 468.992 2.048 507.904 2.048 553.984V696.32c0 59.392 55.296 106.496 115.712 106.496S237.568 754.688 237.568 696.32V555.008c0-46.08-36.864-84.992-78.848-100.352v-6.144c0-160.768 153.6-331.776 355.328-331.776 201.728 0 355.328 150.528 355.328 331.776v6.144c-41.984 15.36-80.896 54.272-80.896 100.352v142.336c0 59.392 54.272 106.496 114.688 106.496S1024 756.736 1024 697.344V555.008c0-46.08-30.72-86.016-72.704-100.352zM658.432 929.792v-32.768c0-19.456-16.384-35.84-36.864-35.84H476.16c-20.48 0-36.864 15.36-36.864 35.84v71.68c0 19.456 16.384 35.84 36.864 35.84h146.432c182.272 0 316.416-141.312 316.416-299.008l-60.416 14.336c-1.024 106.496-96.256 194.56-220.16 209.92z"
                fill="#C04374"
                p-id="6647"
              />
            </svg>
            <p class="phone_num">400-021-9988</p>
            <div data-v-bfba3668 class="t-button_wrap">
              <div data-v-38000290 data-v-bfba3668 class="t-button">立即拨打</div>
            </div>
          </div>
          <p class="des_txt">服务时间：周一至周日9:00-22:00</p>
        </van-popup>
      </div>
    </header>

    <div class="zbNav">
      <index-nav :list="list"></index-nav>
    </div>
    <div class="scrollBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { get } from "utils/http.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { Popup } from "vant";
import indexNav from "./indexNav.vue";

Vue.use(Popup);

export default {
  components: {
    swiper,
    swiperSlide,
    indexNav
  },
  data() {
    return {
      list: [],
      show: false
    };
  },
  async mounted() {
    let result = await get({
      url: "/api/v3/m1/cms/nav?platform=4"
    });
    this.list = result.data.nav;
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '~assets/border.styl'
.popupBox
  width 2.95rem
  height 4.16rem
  padding 0.2rem 0.2rem 0.3rem
  .title
    font-size .16rem
    color #333
    font-weight 600
  svg
    margin 0.43rem 0 0.13rem
  .svgBox
    text-align center
  .phone_num
    margin-bottom 0.5rem
    font-size 0.22rem
    color #C04374
    text-align center
    // letter-spacing 2px
  .t-button_wrap
    margin-bottom 0.2rem
  .t-button
    color #fff
    font-size 0.15rem
    width 100%
    height 0.4rem
    background #C04374
    line-height 0.4rem
    text-align center
  .des_txt
    font-size .12rem
    text-align center
.searchbar
  // width  100%
  display flex !important
  height 0.44rem
  background #fff
  align-items center
  padding 0 18px
  flex-direction row !important
  justify-content space-between
.title
  font-family PingFangSC-Medium
  font-size 0.15rem
#root
  display flex
  flex-direction column
  touch-action none
    header
      flex-direction row
      display flex
.scrollBox
  overflow-y scroll
.zbNav
  width 100%
  // height .45rem
  background #fff
  $border(0 0 1px 0)
  padding 0 0.18rem
</style>