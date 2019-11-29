<template>
  <div class="items" @click="handleClick(list.label)">
    <img :src="list.img" alt />
    <div class="border"></div>
    <div class="info">
      <span class="info-en">{{list.name_en}}</span>
      <span class="info-cn">{{list.label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods:{
    handleClick(keyword){
      this.$router.push({
        name: "DetailKeyword",
        params: { keyword }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.items
  width 49%
  height 0.72rem
  margin-bottom 0.08rem
  position relative
  text-align center
  line-height 0.72rem
  img
    width 100%
    height 100%
  .border
    position absolute
    top 0
    right 0
    left 0
    bottom 0
    margin auto
    width 90%
    height 80%
    border 1px solid #fff
  .info
    height  0.32rem
    position absolute
    top 0
    right 0
    left 0
    bottom 0
    margin auto
    color #fff
    font-size 0.16rem
    display flex
    flex-direction column
    align-items center
    span 
        height .16rem
        line-height .16rem
    .info-en
        font-size .09rem
    .info-cn
        font-weight 500
</style>