<template>
  <transition :enter-active-class="index == 0 || index == 2 ? 'bounceInLeft' : 'bounceInRight'" :leave-active-class="index == 0 || index == 2 ? 'bounceOutLeft' : 'bounceOutRight'" name="bounce">
    <nuxt-link :to="'/about/portfolio/' + item.alias">
      <div class="item__image">
        <img :src="item.image" :alt="item.name">
        {{item.id}}
      </div>
      <div class="item__content">
        <h3 class="item__name">{{item.name}}</h3>
        <div class="item__types">{{item.type}}</div>
      </div>
    </nuxt-link>
  </transition>
</template>

<script>
	export default {
		name: "portfolio-item",
    props: ['item', 'index']
	}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/components/index/portfolioitem"
  .portfolio-enter-active, .portfolio-leave-active
    transition: height .25s
  .portfolio-enter
    height: 0
  .portfolio-leave-to
    height: 0
</style>
