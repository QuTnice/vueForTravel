<template>
  <div>
    <div class="bm-product-two">
      <!-- <div class="bm-product-item" v-for="item,index in productListOne" :key="index" > -->
        <indexproduct-one v-for="item,index in List" :key="item.id" :item="item"></indexproduct-one>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { get } from "utils/http.js";
import indexproductOne from "components/index/product/indexProductOne";
export default {
  name: "indexProduct",
  props: ["list"],
  components: {
    indexproductOne
  },
  mounted(){
    
    
  },
  data() {
    return {
      List : []
    };
  },
  watch:{
    list(value){
      this.List = value
      // console.log(this.List);
    }
  },

};
</script>

<style lang="stylus" scoped>
.bm-product-two {
  // background: red;
  display: flex;
  width: 100%;
  // height: 3.92rem;
  height: auto;
  background: #fff;
  flex-wrap: wrap;
  // text-align: center;
  justify-content: space-between;
}
.bm-product-item {
  width: 1.65rem;
  background: #fff;
  height: 1.87rem;
  // padding-right: 0.04rem;
  margin-bottom: 0.09rem;
}
</style>