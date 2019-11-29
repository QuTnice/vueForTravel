<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="btn-two" v-for="value in inserTwo" :key="value.id">
        <router-link tag="div"  @click="handleClick(value.label)" :to="'/detail/'+value.label">
          <img
            :src="value.img"
            :alt="value.label"
            class="bm-theme-item-img"
          />
          <div class="bm-theme-item-title">{{value.label}}</div>
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { get } from 'utils/http.js'
export default {
  name: "insertitemtwo",
  data() {
    return {
      swiperOption: {
        
        slidesPerView: 5,
        slidesPerGroup: 5,
        pagination: {
            // type: "custom", 
            el: ".swiper-pagination",
            clickable: true,
        }
      },
      inserTwo: [],
     
    }
  },
  async mounted() {
    let result = await get({
        url: '/api/v3/m1/theme/group?platform=4',
    })
    this.inserTwo = result.data.list
    console.log(this.inserTwo);
    
},
methods:{
  handleClick(value){
    // console.log(123);
  }
}
};
</script>

<style lang="stylus" scoped>
.swiper-slide {
  width: 20% !important;
  text-align: center;
  
  img {
    width: 0.2rem;
    height: 0.2rem;
    margin-bottom: 0.05rem;
  }

  .bm-theme-item-title {
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #333;
    letter-spacing: 0.2px;
    text-align: center;
  }
}

.swiper-pagination {
  width: 100%;
  position: relative;
  top: 0;
}
</style>