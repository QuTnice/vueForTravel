<template>
  <div>
    <div class="bm-destination-dest-top">
      <des-pro-one v-for="item,index in list.children" :list="item"></des-pro-one>
    </div>
    <div class="more">
      更多目的地
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjQzA0Mzc0IiBjeD0iNiIgY3k9IjYiIHI9IjYiLz48cGF0aCBkPSJNNiA1LjM3OWwyLjQ3NSAyLjQ3NWEuNS41IDAgMCAwIC43MDctLjcwOEw2LjM1NCA0LjMxOGEuNDk4LjQ5OCAwIDAgMC0uNzA4IDBMMi44MTggNy4xNDZhLjUuNSAwIDAgMCAuNzA3LjcwOEw2IDUuMzc5eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4="
        class="is-more"
      />
    </div>
    <div class="space2"></div>
    <div class="box">
      <div class="bm-destination-product-title">热门推荐</div>
      <single-pro-l v-for="item,index in list.product" :list="item"></single-pro-l>
    </div>
  </div>
</template>

<script>
import desProOne from "./desPro-one";
import singleProL from "../../../pages/index/nav/super/singleProductLeft";
export default {
  props: ["list"],
  components: {
    desProOne,
    singleProL
  },
  // methods:{
  //   handleClick
  // }
  mounted() {
    // console.log(this.list);
  }
};
</script>

<style lang="stylus" scoped>
.bm-destination-product-title
  -webkit-tap-highlight-color transparent
  font-family 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif
  -webkit-font-smoothing antialiased
  color #333
  margin 0
  padding 0
  font-size 0.16rem
  font-weight 500
  text-align left
  margin-bottom 18Px
.space2
  height 0.2rem
.more
  text-align center
.bm-destination-dest-top
  width 100%
  display flex
  flex-wrap wrap
  justify-content space-between
  // margin-bottom 0.2rem
</style>