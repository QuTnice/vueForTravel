<template>
  <div>
    <header>
      <div class="searchbar">
        <div class="title">定制游</div>
      </div>
    </header>
    <cz-content></cz-content>
  </div>
</template>

<script>

import czContent from "./czContent";
export default {
  components: {
    czContent
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
  font-weight 600
.title
  font-family PingFangSC-Medium
  font-size 0.15rem
</style>