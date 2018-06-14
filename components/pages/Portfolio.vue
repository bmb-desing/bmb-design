<template>
  <nuxt-link :to="'/about/portfolio/' + portfolio.alias" class="portfolio__item">
    <div class="portfolio__image">
      <img :src="portfolio.thumbnail" :alt="portfolio.name">
    </div>
    <div class="portfolio__text">
      <h2>{{portfolio.name}}</h2>
      <div class="portfolio__hash">
        {{portfolio.types}}
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: ['portfolio'],
}
</script>
<style lang="sass" scoped>
  @import "../../assets/sass/pages/portfolio/index"
</style>


