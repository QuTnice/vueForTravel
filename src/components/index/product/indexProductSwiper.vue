<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in List" :key="item.id" @click="handleClick(item.id)">
        <div class="bm-product-more-slide">
          <a class="bm-product-more-item">
            <div class="bm-product-item">
              <router-link tag="a"  class="bm-product-item-wrap" style="width:auto;" :to="'/particulars/'+item.id">
                <img alt height="210" :src="item.img" />
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
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["list"],
  name: "productSwiper",
  data() {
    return {
      swiperOption: {
        // spaceBetween: 15,
        // slidesPerView: 1.03
      },
      List: []
    };
  },
  watch: {
    list(value) {
      this.List = value;
      // console.log(this.List);
    }
  },
  methods: {
    handleClick(keyword) {
      this.$router.push({
        name: "ParticularsKeyword",
        params: { keyword }
      });
    }
  }
  // mounted() {
  // // console.log(this.list);
  // }
};
</script>

<style lang="stylus" scoped>
// .swiper-container
// margin-left .15rem
.swiper-slide
  width 339px !important
  // margin-right .1rem
.bm-product-more-slide
  width 3.39rem
  a
    width auto
    height auto
    img
      border-radius 0.03rem
      width 3.39rem
      height 2.1rem
.bm-product-item-info
  padding 0.12rem 0.09rem 0
.bm-product-item-title
  -webkit-tap-highlight-color transparent
  -webkit-font-smoothing antialiased
  list-style none
  text-align left
  margin 0
  padding 0
  font-family PingFangSC-Medium
  font-size 15px
  color #333
  letter-spacing 0
  font-weight 500
  margin-bottom 6px
.bm-product-item-subtitle
  -webkit-tap-highlight-color transparent
  -webkit-font-smoothing antialiased
  list-style none
  text-align left
  margin 0
  padding 0
  font-family PingFangSC-Light
  font-size 11px
  color #898989
  letter-spacing 0.15px
  margin-bottom 9px
.bm-product-item-bottom
  -webkit-tap-highlight-color transparent
  font-family 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif
  font-size 12px
  -webkit-font-smoothing antialiased
  list-style none
  text-align left
  color #333
  margin 0
  padding 0
  display flex
  -webkit-box-pack justify
  justify-content space-between
  -webkit-box-align center
  align-items center
.bm-product-item-tags
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
  list-style none
  text-align left
  margin 0
  padding 0
  font-family PingFangSC-Medium
  font-size 18px
  color #c04374
  letter-spacing 0.8px
  white-space nowrap
</style>