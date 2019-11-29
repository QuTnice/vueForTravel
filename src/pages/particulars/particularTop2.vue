<template>
  <div>
    <div class="pro_title">
      <div class="bm-product-item-title">{{list.title}}</div>
      <div class="bm-product-item-subtitle">
        <span>{{list.label}}</span>|
      </div>
      <ul class="bm-product-item-tags">
        <li v-for="item in list.mark">{{item.name}}</li>
      </ul>
      <div class="bm-product-item-price">￥{{list.min_price}}起</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list']
};
</script>

<style lang="stylus" scoped>
.pro_title
  padding 0.12rem 0.18rem 0.18rem
  position relative
  text-align left
  background #fff
  font-family PingFangSC-Medium
  .bm-product-item-title
    color #333
    letter-spacing 0
    font-weight 500
    margin-bottom 0.06rem
    font-size 0.15rem
  .bm-product-item-subtitle
    color #898989
    margin-bottom 0.09rem
    font-size 0.11rem
  .bm-product-item-tags
    display flex
    flex-wrap wrap
    padding 0
    margin 0
    margin-bottom 0.09rem
    li
      color #c14374
      font-size 0.1rem
      margin-right 0.09rem
      padding 0.03rem 0.06rem
      border 0.001rem solid rgba(193, 67, 116, 0.2)
  .bm-product-item-price
    color #c04374
    letter-spacing 0.001rem
    white-space nowrap
    font-size 0.19rem
</style>