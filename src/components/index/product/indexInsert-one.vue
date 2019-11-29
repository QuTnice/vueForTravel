<template>
  <div class="insert-wrap" >
    <div class="insert-item" @click="handleClick1">
      <img
        src="https://product-ssl-qiniu.bmtrip.com/20191018icn_tourgroup@3x.png"
        alt="旅行团"
        class="bm-insert-item-img"
      />
      <div class="bm-insert-item-title">旅行团</div>
    </div>
    <div class="insert-item" @click="handleClick2">
      <img
        src="https://product-ssl-qiniu.bmtrip.com/20191018icn_customtour@3x.png"
        alt="定制游"
        class="bm-insert-item-img"
      />
      <div class="bm-insert-item-title">定制游</div>
    </div>
    <div class="insert-item" @click="handleClick3">
      <img
        data-v-14704c0c
        src="https://product-ssl-qiniu.bmtrip.com/20191018icn_freetravel@3x.png"
        alt="自由行"
        class="bm-insert-item-img"
      />
      <div class="bm-insert-item-title">自由行</div>
    </div>
    <div class="insert-item" @click="handleClick4">
      <img
        src="https://product-ssl-qiniu.bmtrip.com/20191018icn_touraround@3x.png"
        alt="周边游"
        class="bm-insert-item-img"
      />
      <div class="bm-insert-item-title">周边游</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "insertitemone",
  data() {
    return {};
  },
  methods: {
    handleClick1() {
      this.$router.push({
        path: "super"
      });
    },
    handleClick2() {
      this.$router.push({
        path: "/layout/customization"
      });
    },
    handleClick3() {
      this.$router.push({
        path: "europe"
      });
    },
    handleClick4() {
      this.$router.push({
        path: "/layout/customization"
      });
    },
  }
};
</script>

<style lang="stylus" scoped>
.insert-wrap
  display flex
  flex-direction row
  .insert-item
    width 25%
    text-align center
    img
      width 0.36rem
      height 0.36rem
      margin-bottom 0.06rem
    .bm-insert-item-title
      font-size 0.12rem
      line-height 0.12rem
</style>