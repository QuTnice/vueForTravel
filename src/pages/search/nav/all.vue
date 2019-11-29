<template>
  <div class="all-content">
    <div>
      <single-pro :list="list"></single-pro>
    </div>
  </div>
</template>

<script>
import singlePro from "components/search/singlePro.vue";
import { get } from "utils/http.js";
import BScroll from "better-scroll";
export default {
  components: {
    singlePro
  },
  data() {
    return {
      list: []
    };
  },
  async mounted() {
    let result = await get({
      url: "/api/v3/article/list?sort_id=0&page=1&platform=4"
    });
    this.list = result.data.list;
    let bScroll = new BScroll(".all-content", {
      // scrollY: true,
      click: true,
      pullUpLoad: true,
    });
    let page = 1
    bScroll.on('pullingUp',async() =>{
      page++
      var result1 = await get({
          url: '/api/v3/article/list',
          params: {
            sort_id: 0,
            page: page,
            size: 6,
            platform: 4
          }
        })     

        await this.$nextTick()
        bScroll.refresh()
        this.list= [
          ...this.list,
          ...result1.data.list
        ]
        
        
    bScroll.finishPullUp()
    })
  }
};
</script>

<style lang="stylus" scoped>
.all-content
  overflow hidden
  width 100%
  height 5.1rem
  padding 0 0.18rem
</style>