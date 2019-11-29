import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

import './assets/reset.css'
import 'vant/lib/index.css';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
