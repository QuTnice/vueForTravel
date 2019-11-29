<template>
  <div class="collectBox">
    <div class="nav">
      <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </div>
    <div class="space10"></div>
    <div class="contentBox">
      <div class="bm-empty" v-if="list.length==0">
        <div>
          <div class="bm-empty__icon">
            <img src="https://product-ssl-qiniu.bmtrip.com/rebuild_404_default.png" alt />
            <p class="bm-empty__title">您还没有收藏路线</p>
          </div>
        </div>
      </div>
      <ul v-else>
        <li
          class="order-con-li"
          :id="item.id"
          v-for="item,index in list"
          @click="handleClick(item.id)"
        >
          <img :src="item.img" alt />
          <div class="info">
            <div class="item-desc">{{item.name}}</div>
            <div class="item-price">{{item.price}}</div>
          </div>
          <div class="remove" :index="index" @click="remove(index)">删除</div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
import store from "@/store";
Vue.use(NavBar);
export default {
  data() {
    return {
      show: false,
      list: []
    };
  },
  methods: {
    onClickLeft() {
      //   Toast("返回");
      this.$router.back();
    },
    onClickRight() {
      //   Toast("按钮");
    },
    remove(index) {
      // console.log(index);
      store.commit("collectInfoMinus", index);
    },
    handleClick(keyword) {
      // console.log(keyword);
      this.$router.push({
        path: "/particulars/" + keyword 
      });
    }
  },
  mounted() {
    this.list = store.state.collect;
    // console.log(this.list);
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
.nav
  height 0.46rem
.contentBox
  max-height 6.2rem
  overflow-y scroll
.collectBox
  display flex
  flex-direction column
  background #fff
  height 100%
.space10
  height 0.1rem
  background #eee
.van-nav-bar
  color #333
  font-size 0.2rem
.bm-empty__icon
  width 100%
  height 4rem
  position relative
  img, p
    position absolute
    bottom 0
    width 100%
    text-align center
    // height 1.98rem
ul
  li
    width 100%
    height 1.06rem
    background #fff
    padding 0 0.15rem 0
    margin-bottom 0.1rem
    display flex
    align-items center
    justify-content space-between
    $border(0 0 1px 0)
    img
      width 0.7rem
      height 0.7rem
      margin-right 0.1rem
    .remove
      width 0.4rem
    .info
      flex 1
      .item-price
        margin-top 0.2rem
</style>