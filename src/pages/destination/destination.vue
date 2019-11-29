<template>
  <div id="root">
    <header>
      <div class="searchbar">
        <div class="title">目的地</div>
      </div>
    </header>

    <des-nav></des-nav>
  </div>
</template>

<script>
import desNav from "./desNav.vue";
import { Button } from "vant";
export default {
  components: {
    desNav
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
header 
  $border(0 0 1px 0)
.searchbar
  // width  100%
  display flex !important
  height 0.44rem
  background #fff
  align-items center
  padding 0 18px
  flex-direction row !important
  justify-content center
.title
  font-weight 700 !important
  font-family PingFangSC-Medium
  font-size 0.15rem
#root
  display flex
  flex-direction column
  touch-action none
</style>