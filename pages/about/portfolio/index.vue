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
    <transition name="zoom">
      <div v-if="loading != true">
        <div class="portfolio__wrapper" >
          <div class="portfolio__content">
            <portfolio-item v-for="item in portfolio" :key="item.id" :style="'flex-basis:' +getWidth " :portfolio="item"></portfolio-item>
          </div>
          <div class="portfolio__paginator" v-if="pages != 1">
            <ul >
              <li v-for="n in pages" :key="n">
                <nuxt-link :to="{query: {type: activeFilter, count: showInRow, page: n != 1 ? n : undefined}}" :class="{'nuxt-link-exact-active' : !$route.query.page && n == 1}">
                  {{n}}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
	</div>
</template>

<script>
  import PortfolioItem from '~/components/pages/Portfolio'
	export default {
		name: "portfolio",
		head() {
			return {
				title: 'Наши работы'
			}
    },
    components: {
      PortfolioItem
    },
    async asyncData({app, route}) {
		  const limit = route.query.count || 3
      const type = route.query.type || null
      console.log(route.query.type)
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
		      return this.$router.push({query: {type: null, count: this.showInRow}})
        }
      },
      changeCount(e) {
		    const value = e.target.value;
        return this.$router.push({query: {type: this.activeFilter, count: value}})
      },
      async getPortfolio() {
        const limit = this.showInRow;
        const type = this.activeFilter || null;
        const page = this.$route.query.page || 1;
        if(type) {
          const portfolio = await this.$axios.get('/works/'+ type + '?count=' + limit + '&page='+ page);
          this.portfolio = portfolio.data.works;
          this.count = portfolio.data.count;
          this.pages = Math.ceil(portfolio.data.count / portfolio.data.countInPage);
          this.loading = false
          return this
        }
        else {
          const portfolio = await this.$axios.get('/works/all?count=' + limit + '&page=' + page);
          this.portfolio = portfolio.data.works;
          this.count = portfolio.data.count;
          this.pages = Math.ceil(portfolio.data.count / portfolio.data.countInPage);
          this.loading = false
          return this
        }
      }

    },
    mounted: function () {
      this.$router.afterEach((r) => {
        this.activeFilter = this.$route.query.type || null
        this.showInRow = this.$route.query.count || 3
        this.loading = true;
        const vm = this;
        setTimeout(function() {
          vm.getPortfolio()
        }, 250)

      })
    }
	}
</script>

<style scoped lang="sass">
	@import "../../../assets/sass/pages/portfolio/index"
</style>
