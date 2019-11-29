<template>
  <div>
    <div class="card-wrap" v-for="item in list" @click="handleClick(item.id)">
      <div class="img-box">
        <div class="bmfind-item-type">{{item.sort_name}}</div>
        <img :src="item.head_pic" />
      </div>
      <div class="bmfind-item-title">{{item.title}}</div>
      <div class="bmfind-item-subtitle">{{item.subtitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
  methods: {
    handleClick(keyword) {
      // console.log(keyword);
      this.$router.push({
        path: '/article/'+keyword
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.card-wrap
  height 2.42rem
  margin-top 0.2rem
  width 100%
  .bmfind-item-title
    width 100%
    font-family PingFangSC-Medium
    font-weight 500
    font-size 0.15rem
    color #333
    letter-spacing 0.02133rem
    margin 0.12rem 0 0.06rem
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    text-align center
  .bmfind-item-subtitle
    width 100%
    font-family PingFangSC-Light
    font-size 0.11rem
    color #333333
    letter-spacing 0.004rem
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    text-align center
  .img-box
    position relative
    height 1.89rem
    width 100%
  .bmfind-item-type
    -webkit-tap-highlight-color transparent
    -webkit-font-smoothing antialiased
    width 0.48rem
    height 0.2rem
    text-align center
    margin 0
    position absolute
    right 0.09rem
    top 0.09rem
    padding 0.02rem 0.06rem
    background rgba(0, 0, 0, 0.8)
    color #fff
    font-family PingFangSC-Regular
    font-size 0.12rem
    border-radius 2%
  img
    width 100%
    height 100%
</style>