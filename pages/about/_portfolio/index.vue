<template>
    <div class="portfolio">
		<div class="portfolio__header">
			<h1 class="portfolio__title">Наши работы</h1>
      <div class="portfolio__filters">
        <div class="portfolio__filter">
          <span>Выберите раздел: </span>
          <select name="type" @change="changeType">
            <option value="null">Все</option>
            <option :value="item.alias" v-for="(item, k) in filter" :key="k" :selected="item.alias == activeFilter">{{item.name}}</option>
          </select>
        </div>
        <div class="portfolio__filter">
          <span>Кол-во в столбце: </span>
          <select name="count" @change="changeCount">
            <option value="3" :selected="3 == showInRow">3</option>
            <option value="4" :selected="4 == showInRow">4</option>
            <option value="5" :selected="5 == showInRow">5</option>
          </select>
        </div>
      </div>
		</div>
    <div v-if="loading == true" class="portfolio__loader"></div>
    <div class="portfolio__wrapper"  v-else>
      <div class="portfolio__content">
        <nuxt-link :to="'/about/portfolio/' + item.link" class="portfolio__item" v-for="item in portfolio" :key="item.id" :style="{flexBasis: getWidth}">
          <div class="portfolio__image">
            <img v-lazy="item.image" :alt="item.name">
          </div>
          <div class="portfolio__text">
            <h2>{{item.name}}</h2>
            <div class="portfolio__hash">
              {{item.type}}
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="portfolio__paginator">
        <ul>
          <li>
            <nuxt-link :to="{query: {type: activeFilter, count: showInRow}}">
              1
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{query: {type: activeFilter, count: showInRow ,page: 2}}">
              2
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name: "portfolio",
		head() {
			return {
				title: 'Наши работы'
			}
		},
		data() {
			return {
			  loading: false,
				activeFilter: this.$route.query.type || null,
				showInRow: this.$route.query.count || 3,
				filter: [
					{
						alias: 'sozdaniy-saytov',
						name: 'Создание сайтов'
					},
					{
						alias: 'sozdanie-logotipa',
						name: 'Создание логотипа'
					},
					{
						alias: 'razrabotka-brenda',
						name: 'Разработка бренда'
					},
					{
						alias: 'prodvishenie-sayta',
						name: 'Продвижение сайта'
					}
				],
        portfolio: [
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 1,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 2,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 3,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 4,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 5,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 6,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 7,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 8,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 9,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 10,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 11,
            image: '/img/slider/slide-1.jpg'
          },
          {
            name: 'Фитнес-тренер',
            type: 'Сео / дизайн',
            link: 'fitnes-trener',
            id: 12,
            image: '/img/slider/slide-1.jpg'
          }
        ]
			}
		},
    computed: {
		  getWidth() {
		    return 100 / this.showInRow + '%'
      }
    },
    methods: {
		  changeType(e) {
		    const value = e.target.value
        if(value != 'null') {
          return this.$router.push({ query : { type : value, count: this.showInRow}})
        }
        else {
		      return this.$router.push({query: {type: '', count: this.showInRow}})
        }
      },
      changeCount(e) {
		    const value = e.target.value
        return this.$router.push({query: {type: this.activeFilter, count: value}})
      },
      async getPortfolio() {
		    //@TODO Получение работ
      }
    },
    mounted: function () {
      this.$router.afterEach((r) => {
        this.activeFilter = this.$route.query.type || null
        this.showInRow = this.$route.query.count || 3
      })
    }
	}
</script>

<style scoped lang="sass">
	@import "../../../assets/sass/pages/portfolio/index"
</style>
