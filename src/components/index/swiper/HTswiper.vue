<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item,index in List" :key="index">
        <div class="swiper-img">
          <img :src="item.img.url" alt />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "htSwiper",
  props: ["list"],
  data() {
    return {
      List: [],
      url1: [],
      swiperOption: {
        slidesPerView: 1.1,
        centeredSlides: false,
        centeredSlidesBounds: true
      }
    };
  },
  watch: {
    list(value) {
      this.List = value;
      // this.url1 = this.List.img
      // console.log(this.List);
    }
  }
};
</script>

<style lang="stylus" scoped>
.swiperBox
  overflow-x hidden
  width 100%
  height 2.5rem
  .swiper-wrapper
    width 100%
  .swiper-container
    width 100%
  .swiper-img
    width 3.05rem
  .swiper-slide
    width 3.05rem !important
    margin-right 0.1rem
  img
    width 3.05rem
    height 100%
</style>