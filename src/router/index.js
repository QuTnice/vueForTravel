import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '../pages/layout.vue'
import Index from '../pages/index/index.vue'
import Indexhome from '../pages/index/nav/home.vue'
import IndexHuantao from '../pages/index/nav/huantao.vue'
import IndexTourGroup from '../pages/index/nav/tourGroup.vue'
import IndexForwardAndWind from '../pages/index/nav/ForwardAndWind.vue'
import Indexdream from '../pages/index/nav/dream.vue'
import IndexEurope from '../pages/index/nav/Europe.vue'
import Indexeast from '../pages/index/nav/east.vue'
import Indexaustrilia from '../pages/index/nav/austrilia.vue'
import Indexchina from '../pages/index/nav/china.vue'

import Mine from '../pages/profile/minePage.vue'
import Destination from '../pages/destination/destination.vue'
import Customization from '../pages/customization/customization.vue'

import Search from '../pages/search/search.vue'
import Article from '../pages/search/article.vue'
import SearchAll from '../pages/search/nav/all.vue'
import SearchKnow from '../pages/search/nav/knowledge.vue'
import SearchTalk from '../pages/search/nav/talk.vue'
import SearchWelfare from '../pages/search/nav/welfare.vue'
import SearchWorld from '../pages/search/nav/world.vue'

import Seek from '../pages/seek/seek.vue'
import seekKey from 'components/seek/seekList'

import Detail from '../pages/detail/detail.vue'
import detailKey from 'components/seek/seekList'

import Particulars from '../pages/particulars/particulars.vue'
import particularsKey from '../pages/particulars/particularsDetail.vue'

import Collect from '../pages/collect/collect.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../../node_modules/swiper/dist/css/swiper.css'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

const routes = [
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: '/layout',
    name: 'layout',
    component: layout,
    redirect: '/layout/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index,
        redirect: '/layout/index/home',
        children: [
          {
            path: 'home',
            name: '首页',
            component: Indexhome,
            // redirect: '/index/home',
          },
          {
            path: 'huantao',
            name: '欢淘亲子',
            component: IndexHuantao
          },
          {
            path: 'super',
            name: '超级旅行团',
            component: IndexTourGroup
          },
          {
            path: 'wind',
            name: '和风东瀛',
            component: IndexForwardAndWind
          },
          {
            path: 'dream',
            name: '梦幻暹罗',
            component: Indexdream
          },
          {
            path: 'europe',
            name: '诗画欧洲',
            component: IndexEurope
          },
          {
            path: 'east',
            name: '小众中东非',
            component: Indexeast
          },
          {
            path: 'aust',
            name: '美洲澳新',
            component: Indexaustrilia
          },
          {
            path: 'china',
            name: '祖国最美',
            component: Indexchina
          },
        ]
      },
      {
        path: 'mine',
        name: 'mine',
        component: Mine
      },
      {
        path: 'destination',
        name: 'destination',
        component: Destination
      },
      {
        path: 'customization',
        name: 'customization',
        component: Customization
      },
      {
        path: 'search',
        name: 'search',
        component: Search,
        redirect: '/layout/search/all',
        children: [
          {
            path: 'all',
            name: '全部',
            component: SearchAll,
          },
          {
            path: 'knowledge',
            name: '涨知识',
            component: SearchKnow,
          },
          {
            path: 'world',
            name: '看世界',
            component: SearchWorld,
          },
          {
            path: 'talk',
            name: '达人说',
            component: SearchTalk,
          },
          {
            path: 'welfare',
            name: '有福利',
            component: SearchWelfare,
          },
        ]
      },
    ]
  },
  {
    path: '/seek',
    name: 'seek',
    component: Seek,
    children: [
      {
        path: ':keyword',
        name: 'seekKeyword',
        component: seekKey
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    children: [
      {
        path: ':keyword',
        name: 'DetailKeyword',
        component: detailKey
      }
    ]
  },
  {
    path: '/particulars',
    name: 'particulars',
    component: Particulars,
    children: [
      {
        path: ':keyword',
        name: 'ParticularsKeyword',
        component: particularsKey
      }
    ]
  },
  {
    path: '/myCollect',
    name: 'myCollect',
    component: Collect,

  },
  {
    path: '/article/:keyword',
    name: 'article',
    component: Article
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
