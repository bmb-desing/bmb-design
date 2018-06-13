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
        <nuxt-link :to="'/about/portfolio/' + item.alias" class="portfolio__item" v-for="item in portfolio" :key="item.id" :style="{flexBasis: getWidth}">
          <div class="portfolio__image">
            <img :src="item.thumbnail" :alt="item.name">
          </div>
          <div class="portfolio__text">
            <h2>{{item.name}}</h2>
            <div class="portfolio__hash">
              {{item.types}}
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="portfolio__paginator">
        <ul>
          <li v-for="n in pages">
            <nuxt-link :to="{query: {type: activeFilter, count: showInRow, page: n != 1 ? n : undefined}}" :class="{'nuxt-link-exact-active' : !$route.query.page && n == 1}">
              {{n}}
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
    async asyncData({app, route}) {
		  const limit = route.query.count || 3
      const type = route.query.type || null
      if(!type) {
        const portfolio = await app.$axios.get('/works/all?count=' + limit)
        return {
          portfolio: portfolio.data.works,
          count: portfolio.data.count,
          pages: Math.ceil(portfolio.data.count / portfolio.data.countInPage)
        }
      }
      else {
		    const portfolio = await app.$axios.get('/works/'+ type + '?count=' + limit )
        return {
          portfolio: portfolio.data.works,
          count: portfolio.data.count,
          pages: Math.ceil(portfolio.data.count / portfolio.data.countInPage)
        }
      }
    },
		data() {
			return {
			  loading: false,
				activeFilter: this.$route.query.type || null,
				showInRow: this.$route.query.count || 3,
				filter: [
					{
						alias: 'web',
						name: 'Сайты'
					},
					{
						alias: 'logo',
						name: 'Логотипы'
					},
					{
						alias: 'reklama',
						name: 'Реклама'
					},
					{
						alias: 'technical-support',
						name: 'Тех. поддержка'
					}
				],
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
        console.log(1)
        const limit = this.showInRow
        const type = this.activeFilter || null
        const page = this.$route.query.page || 1
        if(type) {
          const portfolio = await this.$axios.get('/works/'+ type + '?count=' + limit + '&page='+ page)
          this.portfolio = portfolio.data.works;
          this.count = portfolio.data.count;
          this.pages = Math.ceil(portfolio.data.count / portfolio.data.countInPage)
          return this
        }
        else {
          const portfolio = await this.$axios.get('/works/all?count=' + limit + '&page=' + page)
          this.portfolio = portfolio.data.works;
          this.count = portfolio.data.count;
          this.pages = Math.ceil(portfolio.data.count / portfolio.data.countInPage)
          return this
        }
      }

    },
    mounted: function () {
      this.$router.afterEach((r) => {
        this.activeFilter = this.$route.query.type || null
        this.showInRow = this.$route.query.count || 3
        this.getPortfolio()
      })
    }
	}
</script>

<style scoped lang="sass">
	@import "../../../assets/sass/pages/portfolio/index"
</style>
