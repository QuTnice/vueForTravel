<template>
  <div class="zb-product-item-wrap">
    <div class="bm-product-item">
      <router-link tag="a" class="bm-product-item-wrap" :to="'/particulars/'+item.id">
        <picture>
          <img :src="item.img" class="product-img" />
        </picture>
        <div class="bm-product-item-info">
          <div class="bm-product-item-title">{{item.title}}</div>
          <div class="bm-product-item-subtitle">
            <span>{{item.subtitle}}</span>
          </div>
          <div class="bm-product-item-bottom">
            <ul class="bm-product-item-tags">
              <li v-for="mark,index in item.mark" :key="index">{{mark.name}}</li>
            </ul>
            <div class="bm-product-item-price">￥{{item.price}}起</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "indexproductOne",
  mounted() {
    // console.log(this.item.id);
  }
};
</script>

<style lang="stylus" scoped>
.zb-product-item-wrap
  width 48.7%
  // margin-right .01rem
.bm-product-item
  width 100%
  background #fff
  height 1.87rem
  // padding-right: 0.04rem;
  margin-bottom 0.09rem
.product-img
  height 1.02rem !important
  width 100% !important
.bm-product-item-wrap
  width 100%
  background #fff
  height 1.87rem
  // padding-right: 0.04rem;
  margin-bottom 0.09rem
  -webkit-tap-highlight-color transparent
  font-family 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif
  font-size 0.12rem
  -webkit-font-smoothing antialiased
  text-align left
  margin 0
  padding 0
  color #333
  text-decoration none
  display block
  .img
    -webkit-tap-highlight-color transparent
    font-family 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif
    font-size 0.12rem
    -webkit-font-smoothing antialiased
    text-align left
    color #333
    margin 0
    padding 0
    vertical-align middle
    border-radius 2px
  .bm-product-item-title
    -webkit-tap-highlight-color transparent
    -webkit-font-smoothing antialiased
    text-align left
    margin 0
    padding 0
    font-family PingFangSC-Medium
    color #333
    letter-spacing 0
    font-weight 500
    font-size 0.12rem
    margin-bottom 0.03rem
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
  .bm-product-item-subtitle
    -webkit-tap-highlight-color transparent
    -webkit-font-smoothing antialiased
    text-align left
    margin 0
    padding 0
    font-family PingFangSC-Light
    color #898989
    letter-spacing 0.15px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    margin-bottom 6px
    font-size 0.1rem
    span
      -webkit-tap-highlight-color transparent
      -webkit-font-smoothing antialiased
      text-align left
      font-family PingFangSC-Light
      color #898989
      letter-spacing 0.15px
      white-space nowrap
      font-size 10px
      margin 0
      padding 0
  .bm-product-item-bottom
    -webkit-tap-highlight-color transparent
    font-family 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif
    font-size 0.12rem
    -webkit-font-smoothing antialiased
    text-align left
    color #333
    margin 0
    padding 0
    -webkit-box-pack justify
    justify-content space-between
    -webkit-box-align center
    align-items center
    display block
    ul
      -webkit-tap-highlight-color transparent
      font-family 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif
      font-size 12px
      -webkit-font-smoothing antialiased
      text-align left
      color #333
      list-style none
      display flex
      flex-wrap wrap
      padding 0
      margin 0
      letter-spacing 0.2px
      li
        -webkit-tap-highlight-color transparent
        -webkit-font-smoothing antialiased
        margin 0
        list-style none
        border 0.5px solid rgba(193, 67, 116, 0.2)
        font-family PingFangSC-Light
        color #c14374
        letter-spacing 0.2px
        font-size 9px
        padding 1px 3px
        margin-right 6px
        margin-bottom 6px
    .bm-product-item-price
      -webkit-tap-highlight-color transparent
      -webkit-font-smoothing antialiased
      text-align left
      margin 0
      padding 0
      font-family PingFangSC-Medium
      color #c04374
      white-space nowrap
      font-size 12px
      letter-spacing 0.3px
</style>