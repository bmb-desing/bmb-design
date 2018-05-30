<template>
  <div class="portfolio">
    <div class="portfolio__wrapper">
      <div class="portfolio__left">
        <h2 class="portfolio__title">Наши работы</h2>
        <ul class="portfolio__list">
          <li v-for="(item, k) in portfolio" :key="k" :class="{'active': active == k}" @click="changeType(k)">
            {{item.name}}
          </li>
        </ul>
        <div class="portfolio__button">
          <nuxt-link :to="'/about/portfolio?type=' + getActiveType.alias">Посмотреть все</nuxt-link>
        </div>
      </div>
      <div class="portfolio__right">
          <transition name="fadeDown" tag="div">
            <div class="portfolio__items" v-for="(item, k) in portfolio" :key="k" v-if="k == active">
              <portfolio-item :item="val" v-for="(val, i) in item.works" :key="i" class="item" :class="'item_' + (i + 1)"></portfolio-item>
            </div>
          </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import PortfolioItem from './PortfolioItem'
	export default {
		name: "portfolio",
    components: {
		  PortfolioItem
    },
    props: ['portfolio'],
    data() {
		  return {
		    active: 0,
      }
    },
    computed: {
		  getActiveType() {
		    return this.portfolio[this.active]
      },
    },
    methods: {
		  changeType(index) {
		    this.active = index
        this.clear()
        return this
      },
      getInterval() {
        const vm = this
        vm.active = vm.active + 1
        if (vm.active == vm.portfolio.length) {
          vm.active = 0
        }
      },
      clear() {
        clearInterval(this.interval)
        this.interval = setInterval(this.getInterval, 5000)
      },
    },
    mounted: function () {
		  this.interval = setInterval(this.getInterval, 5000)
    }
	}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/components/index/portfolio"
</style>
