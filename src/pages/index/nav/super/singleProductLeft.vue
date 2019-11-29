<template>
  <div class="bm-product-item-wrap" @click="handleClick(list.id)">
    <a>
      <img alt :src="list.img" />
      <div class="bm-product-item-info">
        <div class="bm-product-item-title">{{list.title}}</div>
        <div class="bm-product-item-subtitle">
          <span>{{list.subtitle}}</span>
        </div>
        <div class="bm-product-item-bottom">
          <ul class="bm-product-item-tags">
            <li v-for="mark,index in list.mark" :key="index">{{mark.name}}</li>
          </ul>
          <div class="bm-product-item-price">￥{{list.price}}起</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["list"],
  name: "singlePro",
  data() {
    return {
      List: []
    };
  },
  mounted() {
    // console.log(this.list.id);
  },
  methods: {
    handleClick(keyword) {
      this.$router.push({
        name: "ParticularsKeyword",
        params: { keyword }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.bm-product-item-wrap
  margin-bottom 0.1rem
  a
    display flex
    flex-direction column
  img
    width 100% !important
    height 1.41rem
    border-radius 2%
.bm-product-item-info
  -webkit-tap-highlight-color transparent
  font-family 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif
  font-size 12px
  -webkit-font-smoothing antialiased
  text-align left
  color #333
  margin 0
  padding 0.12rem 0 0
.bm-product-item-title
  -webkit-tap-highlight-color transparent
  -webkit-font-smoothing antialiased
  text-align left
  margin 0
  padding 0
  font-family PingFangSC-Medium
  font-size 0.12rem
  color #333
  letter-spacing 0
  font-weight 500
  margin-bottom 0.06rem
  line-height 0.12rem
.bm-product-item-subtitle
  -webkit-tap-highlight-color transparent
  -webkit-font-smoothing antialiased
  text-align left
  margin 0
  padding 0
  font-family PingFangSC-Light
  font-size 0.1rem
  color #898989
  letter-spacing 0.15px
  margin-bottom 9px
.bm-product-item-bottom
  -webkit-tap-highlight-color transparent
  font-family 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif
  font-size 12px
  -webkit-font-smoothing antialiased
  text-align left
  color #333
  margin 0
  padding 0
  display flex
  -webkit-box-pack justify
  // justify-content space-between
  -webkit-box-align center
  align-items center
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
    li
      -webkit-tap-highlight-color transparent
      -webkit-font-smoothing antialiased
      margin 0
      list-style none
      border 0.5px solid rgba(193, 67, 116, 0.2)
      padding 3px 6px
      font-family PingFangSC-Light
      font-size 10px
      color #c14374
      letter-spacing 0.2px
      margin-right 9px
  .bm-product-item-price
    -webkit-tap-highlight-color transparent
    -webkit-font-smoothing antialiased
    text-align left !important
    margin 0
    padding 0
    font-family PingFangSC-Medium
    font-size 0.12rem
    color #c04374
    letter-spacing 0.8px
    white-space nowrap
</style>