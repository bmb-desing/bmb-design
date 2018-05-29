import Vue from 'vue'
import Vuex from 'vuex'
import Form from './form'
import Menu from './menu'
Vue.use(Vuex)
export const state = () => ({
  counter: 0
})
const store = () => new Vuex.Store({
  modules: {
    Form, Menu
  }
})
export default store
