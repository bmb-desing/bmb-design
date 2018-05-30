import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preloader: 1.3,
  error: '/error.jpg',
  loading: '/img/system/loader-white.gif',
  lazyComponent: true
})
