<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="name  in list" :key="name.id">
                <router-link tag="div" :to="{name: name.name}" active-class="active">
                    <div>{{name.name}}</div>
                </router-link>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { get } from 'utils/http.js'
    export default {
        props: ['list'],
        name : 'indexNav',
        data() {
            return {
                swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                    // slidesPerView: 4,
                    centeredSlidesBounds: true ,
                // ...
                },
                HeaderNav:[]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .active
        color #C14374
        border-bottom 2px solid #C14374
    .swiper-container
        padding .05rem
        background #fff
        .swiper-slide  
            margin 0 .05rem
            width auto!important
            padding 0 .15rem
            height .45rem
            line-height .45rem
            font-size .13rem
</style>