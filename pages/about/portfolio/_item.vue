<template>
  <div>
    <div class="portfolio">
      <h1 class="portfolio__title">{{portfolio.name}}</h1>
      <div class="portfolio__content">
        <div class="portfolio__left">
          <div>
            <slider :images="portfolio.images"></slider>
          </div>
        </div>
        <div class="portfolio__right">
          <div class="portfolio__text" v-html="portfolio.text"></div>
          <div class="portfolio__users">
            <span>В проекте участвовали:</span>
            <nuxt-link :to="'/about/team/'+ index" v-for="(item, index) in portfolio.user" :key="item.id" class="portfolio__team">{{item.first_name}} {{item.last_name}}</nuxt-link>
          </div>
          <div class="portfolio__categories">
            <span>Категории:</span>
            <nuxt-link :to="'/about/portfolio?type=' +item.alias " v-for="item in portfolio.usluga" :key="item.id" class="portfolio__category">{{item.name}}</nuxt-link>
          </div>
          <h2>Понравилось? Сделаем проект для Вас!</h2>
          <button @click="showForm('Пришел с портфолио, работа' + portfolio.name)" class="portfolio__button">Заказать проект</button>
          <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
          <script src="//yastatic.net/share2/share.js"></script>
          <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter,viber,telegram"></div>
        </div>
      </div>
    </div>
    <div class="other">
      <h2>Другие наши работы</h2>
    </div>
  </div>

</template>

<script>
  import Slider from '~/components/Slider'
  import {mapMutations} from 'vuex'
	export default {
		name: "item",
    components: {
		  Slider
    },
    head() {
		  return {
		    title: this.portfolio.title,
        meta: [
          {hid: 'description', name: 'description' , itemprop: 'description', content: this.portfolio.description},
          {hid: 'name', itemprop: 'name', name: 'name',  content: this.portfolio.title},
          {hid: 'image', itemprop: 'image', name: 'image', content: this.portfolio.thumbnail},
          {hid: 'og:title', name: 'og:title', content: this.portfolio.title },
          {hid: 'og:url', name: 'og:url', content: this.$route.fullPath},
          {hid: 'og:image', name: 'og:image', content: this.portfolio.thumbnail}
        ]

      }
    },
    async asyncData({app, route}) {
		  const alias = route.params.item;
		  const portfolio = await app.$axios.get('/works/item/' + alias)
      return {
		    portfolio: portfolio.data
      }
    },
    methods: {
      ...mapMutations({
        showForm: 'mutationShowForm'
      }),
    }
	}
</script>

<style scoped lang="sass">
  @import "../../../assets/sass/pages/portfolio/item"
  @import "../../../assets/sass/pages/portfolio/other"
</style>
