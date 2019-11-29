<template>
  <div class="swiper-Wrap">
    <swiper :options="swiperOption" ref="mySwiper" v-if="list.length">
      <swiper-slide v-for="item in list" :key="item.url">
        <div class="img-fat" @click="handleClick(item.url)">
          <img :src="item.img.url" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["list"],
  name: "indexStatic",
  data() {
    return {
      swiperOption: {
        loop: true
      },
      value1: ''
    };
  },
  methods: {
    handleClick(value) {
      let keyword = value.split("&")[1].split("=")[1];
      console.log(keyword);  
      this.value = keyword

      this.$router.push({
        name: "DetailKeyword",
        params: { keyword }
      });
    }
  },
  // mounted(){
  //   console.log(this.list);
    
  // }
};
</script>

<style lang="stylus" scoped>
.swiper-container
  border-radius 2%
.swiper-Wrap
  width 100%
  border-radius 3%
.swiper-slide
  width 100%
img
  width 3.39rem
  height 1.89rem
</style>