<template>
    
        <img :src="List.url" alt="">
   
</template>

<script>
    export default {
        name: 'htPic1',
        props: ['list'],
        data(){
            return{
                List: [],
                url1: []
            }
        },
        watch:{
            list(value){
            this.List = value
            // this.url1 = this.List.img
            // console.log(this.List);
        }
  },
    }
</script>

<style lang="stylus" scoped>

</style>