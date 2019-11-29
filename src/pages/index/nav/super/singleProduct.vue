<template>
  <div class="bm-product-item-wrap">
    <a>
      <img alt :src="List.img"  />
      <div class="bm-product-item-info">
        <div class="bm-product-item-title">{{List.title}}</div>
        <div class="bm-product-item-subtitle">
          <span>{{List.subtitle}}</span>
        </div>
        <div class="bm-product-item-bottom">
          <ul class="bm-product-item-tags">
            <li v-for="mark,index in List.mark" :key="index">{{mark.name}}</li>
          </ul>
          <div class="bm-product-item-price">￥{{List.price}}起</div>
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
  watch: {
    list(value) {
      this.List = value;
      // console.log(this.List);
    }
  }
};
</script>

<style lang="stylus" scoped>
.bm-product-item-wrap
    img 
        width 3.39rem !important
        height 2.10rem
        border-radius 2%
.bm-product-item-info
    -webkit-tap-highlight-color: transparent;
    font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    color: #333;
    margin: 0;
    padding: 12px 9px 0;
.bm-product-item-title
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    margin: 0;
    padding: 0;
    font-family: PingFangSC-Medium;
    font-size: 15px;
    color: #333;
    letter-spacing: 0;
    font-weight: 500;
    margin-bottom: 6px;
    line-height .14rem
.bm-product-item-subtitle
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    margin: 0;
    padding: 0;
    font-family: PingFangSC-Light;
    font-size: 11px;
    color: #898989;
    letter-spacing: .15px;
    margin-bottom: 9px;
.bm-product-item-bottom
    -webkit-tap-highlight-color: transparent;
    font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    ul
        -webkit-tap-highlight-color: transparent;
        font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
        font-size: 12px;
        -webkit-font-smoothing: antialiased;
        text-align: left;
        color: #333;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        li
            -webkit-tap-highlight-color: transparent;
            -webkit-font-smoothing: antialiased;
            margin: 0;
            list-style: none;
            border: .5px solid rgba(193,67,116,.2);
            padding: 3px 6px;
            font-family: PingFangSC-Light;
            font-size: 10px;
            color: #c14374;
            letter-spacing: .2px;
            margin-right: 9px;
    .bm-product-item-price
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        text-align: left;
        margin: 0;
        padding: 0;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #c04374;
        letter-spacing: .8px;
        white-space: nowrap;
</style>