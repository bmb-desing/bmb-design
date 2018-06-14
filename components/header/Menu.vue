<template>
  <transition name="menu">
    <div class="menu">
      <div class="menu__container">
        <div class="menu__content">
          <nav class="menu__left">
            <ul>
              <nuxt-link :to="item.link" tag="li" class="menu__item" v-for="(item, k) in menu" :key="k">
                <span @click.prevent="getMenu(item.link, k)">{{item.text}}</span>
              </nuxt-link>
            </ul>
          </nav>
          <div class="menu__center">
            <div class="sub__menu" v-for="(item, k) in menu" v-if="k + 1 == activeMenu && item.submenu" :key="k">
              <ul>
                <nuxt-link :to="item.link + '' + val.link" tag="li" class="menu__item" exact v-for="(val, i) in item.submenu" :key="i">
                  <a>{{val.text}}</a>
                </nuxt-link>
              </ul>
            </div>
          </div>
          <div class="menu__contacts">
            <div class="contacts__item contacts__item_map">
              <span>ул. Соловьева 4а, оф.1</span>
            </div>
            <div class="contacts__item contacts__item_email">
              <a href="mailto:info@bmb-design.ru">info@bmb-design.ru</a>
            </div>
            <div class="contacts__item contacts__item_phone">
              <a href="tel:+79781004939">+7 (978) 100 49 39</a>
            </div>
            <div class="contacts__item contacts__item_phone">
              <a href="tel:+79781004939">+7 (978) 100 49 39</a>
            </div>
            <div class="contacts__item contacts__item_callback">
              <button @click="showForm">Обратный звонок</button>
            </div>
          </div>
        </div>
      </div>
      <div class="menu__footer">
        <div class="social__item social__item_telegram">
          <a href="#" target="_blank">
          </a>
        </div>
        <div class="social__item social__item_facebook">
          <a href="#" target="_blank">
          </a>
        </div>
        <div class="social__item social__item_vk">
          <a href="#" target="_blank">
          </a>
        </div>
        <div class="social__item social__item_inst">
          <a href="#" target="_blank">
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapMutations} from 'vuex'
	export default {
		name: "head-menu",
    data() {
		  return {
		    activeMenu: false,
		    menu: [
          {
            link: '/web',
            text: 'Сайты',
            click: 0,
            submenu: [
              {
                link: '/landing-page',
                text: 'Landing-page'
              },
              {
                link: '/internet-magazin',
                text: 'Интернет-магазин'
              },
              {
                link: '/korporativniy',
                text: 'Корпоративный'
              },
              {
                link: '/sayt-vizitka',
                text: 'Сайт-визитка'
              }
            ]
          },
          {
            link: '/logo',
            text: 'Логотипы',
            click: 0,
            submenu: [
              {
                link: '/firmeniy-stil',
                text: 'Фирменный стиль'
              },
              {
                link: '/logotip',
                text: 'Логотип'
              }
            ]
          },
          {
            link: '/reklama',
            text: 'Реклама',
            click: 0,
            submenu: [
              {
                link: '/seo',
                text: 'СЕО'
              },
              {
                link: '/direkt',
                text: 'Yandex-Директ'
              },
              {
                link: '/adwords',
                text: 'GoogleAdwords'
              },
              {
                link: '/offline-reklama',
                text: 'Offline-Реклама'
              }
            ]
          },
          {
            link: '/technical-support',
            text: 'Тех.поддержка',
            click: 0,
          },
          {
            link: '/about',
            text: 'О нас',
            click: 0,
            submenu: [
              {
                link: '/blog',
                text: 'Блог'
              },
              {
                link: '/review',
                text: 'Отзывы'
              },
              {
                link: '/portfolio',
                text: 'Портфолио'
              },
              {
                link: '/team',
                text: 'Команда'
              }
            ]
          },
          {
            link: '/contacts',
            text: 'Контакты',
            click: 0,
          }
        ]
      }
    },
    methods: {
		  getMenu(link, index) {
		    if(!this.menu[index].submenu) {
		      this.$router.replace(link)
        }
        else if (this.menu[index].click == 1) {
          this.$router.replace(link)
        }
        else {
		      this.menu[index].click = this.menu[index].click + 1
          const vm = this
          const oldActiveMenu = this.activeMenu
          this.activeMenu = index + 1
          setTimeout(function () {
            vm.menu[index].click = 0
          }, 500)
        }
      },
      replaceActiveSubmenu(path) {
        if (path == '/') {
          return this.activeMenu = false
        }
        var indexs
        this.menu.map((item, index) => {
          const isActive = path.indexOf(item.link) + 1
          if (isActive) {
            indexs = index + 1
          }
        })
        return this.activeMenu = indexs || false
      },
      ...mapMutations({
        showForm: 'mutationShowForm'
      }),
    },
    created: function () {
      const path = this.$route.path;
      this.replaceActiveSubmenu(path);
      const body = document.getElementsByClassName('body')[0];
      body.classList.add('blur');
    },
    mounted: function () {
      this.$router.afterEach((r) => {
        const path = this.$route.path;
        this.replaceActiveSubmenu(path)
      })
    },
    beforeDestroy: function () {
      const body = document.getElementsByClassName('body')[0];
      body.classList.remove('blur');
    }
	}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/components/menu/index"
  @import "../../assets/sass/components/menu/contacts"
  .menu-enter-active, .menu-leave-active
    transition: max-height .25s
  .menu-enter
    max-height: 0
  .menu-leave-to
    max-height: 0
</style>
