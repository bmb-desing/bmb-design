<template>
  <div>
    <header class="header">
      <div class="header__container">
        <div class="header__burger" @click="getMenu" :class="showMenu ? 'active' : ''">
          <div class="burger__item burger__item_first"></div>
          <div class="burger__item burger__item_second"></div>
          <div class="burger__item burger__item_third"></div>
        </div>
        <div class="header__logo">
          <nuxt-link to="/">
            <img src="/img/system/logo-white.png" alt="Веб-Студия Бамбей" class="header__logo_big">
            <img src="/img/system/logo-white-small.png" alt="Веб-Студия Бамбей" class="header__logo_small">
          </nuxt-link>
        </div>
        <div class="header__map">
          <span>ул. Соловьева, 4 оф. 1</span>
          <button @click="getMap">Показать на карте</button>
        </div>
        <div class="header__phone">
          <a href="tel:+79781004939" v-if="getDate.class == 'green'">+7 (978) 100 49 39</a>
          <span v-else>+7 (978) 100 49 39</span>
          <p class="header__time" :class="[getDate.class, showTime ? 'active' : '']" @click="getTime">Статус: {{getDate.text}}
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	            viewBox="0 0 41.999 41.999" style="enable-background:new 0 0 41.999 41.999;" xml:space="preserve">
                <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
                  c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
	                c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"/>
            </svg>
          </p>
        </div>
        <timing v-if="showTime"></timing>
      </div>
    </header>
    <mapping v-if="showMap"></mapping>
    <head-menu v-if="showMenu"></head-menu>
  </div>
</template>

<script>
  import Mapping from './header/Map.vue'
  import Timing from './header/Time'
  import HeadMenu from './header/Menu'
  import { mapMutations, mapGetters  } from 'vuex'
	export default {
		name: "main-header",
    components: {
      Mapping,
      Timing,
      HeadMenu
    },
    computed: {
      ...mapGetters({
        showMap: 'getMap',
        showTime: 'getTimes',
        showMenu: 'getMenu'
      }),
		  getDate() {
		    const date = new Date();
		    const day = date.getDay();
		    const hour = date.getHours();
		    if(day == 0 && day == 6) {
		      return {
		        class: 'red',
            text: 'Выходной'
          }
        }
        else if(hour > 19) {
		      return {
		        class: 'red',
            text: 'Закончили работу'
          }
        }
        else {
		      return {
		        class: 'green',
            text: 'Работаем'
          }
        }
      }
    },
    methods: {
      ...mapMutations({
        getMap: 'mutationMap',
        getTime: 'mutationTimes',
        getMenu: 'mutationMenu',

      })
    },
    beforeDestroy: function () {
      const body = document.getElementsByClassName('body')[0];
      body.classList.remove('blur');
    }
	}
</script>

<style scoped lang="sass">
  @import "../assets/sass/system/header"
</style>
