<template>
  <div>
    <div class="city-title">
      <div class="city-title-L">
        <svg
          t="1574474959748"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2082"
          width="16"
          height="16"
        >
          <path
            d="M836.7 582.2c-43.3 13.1-483.6 140.5-483.6 140.5S231.2 763.5 141 653.5l100.1-41.6c17.4 5.9 33.6 5.4 55.1-1.5L410 582.2 239.3 329.4s-34.6-54.9 85.3-28.1c0 0 216.9 166.1 256 196.6 0 0 20 11.4 56.9 0l170.7-56.2s115.6-35.3 142.2 28.1c28 66.5-70.5 99.3-113.7 112.4z m-714.9 51c-44.6-49.8-53.1-79.1-53.1-79.1s9.2-60.9 85.3 0c22.2 17.8 45.8 30 60.8 40l-93 39.1z"
            p-id="2083"
          />
        </svg>
        出发地:
        <span v-if="list.group_list!== undefined && list.group_list.length>0">
          <span>{{list.group_list[0].list[0].name}}</span>
        </span>
      </div>
      <div class="city-title-R">
        <van-cell is-link @click="showPopup">切换城市</van-cell>
      </div>
      <!-- <div class="city-title-R">切换城市</div> -->
    </div>
    <van-popup v-model="show" closeable position="bottom" :style="{ height: '20%' }" :round="true">
      <div class="titleCity">出发城市</div>
      <div class="cityBox" v-if="list.group_list">
        <div
          class="cityItem"
          v-if="list.group_list[0]"
          v-for="item in list.group_list[0].list"
          @click="handleClick"
        >{{item.name}}</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup, Cell } from "vant";

Vue.use(Popup).use(Cell);
export default {
  props: ["list"],
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    handleClick(){
      this.show = false
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
// $border(0 0 1px 0)
.cityItem
  width 0.78rem
  height 0.36rem
  border 0.01rem solid #C14374
  text-align center
  line-height 0.36rem
  color #C14374
.titleCity
  width 100%
  height 0.44rem
  line-height 0.44rem
  text-align center
  font-size 0.15rem
  $border(0 0 1px 0)
.cityBox
  width 100%
  padding 0.18rem
.city-title
  padding-left 0.18rem
  line-height 0.43rem
  display flex
  justify-content space-between
  height 0.43rem
</style>