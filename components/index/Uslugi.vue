<template>
  <div class="uslugi">
    <div class="uslugi__wrapper">
      <div class="uslugi__left">
        <h2 class="uslugi__title">Наши услуги</h2>
        <div class="uslugi__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
      <div class="uslugi__right">
        <nuxt-link :to="usluga.link" class="usluga" v-for="(usluga, k) in uslugi" :key="k">
          <img v-lazy="usluga.image" :alt="usluga.title" class="usluga__img">
          <h3 class="usluga__title">{{usluga.title}}</h3>
          <div class="usluga__text" v-html="usluga.text"></div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "uslugi",
    props: ['uslugi']
	}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/components/index/uslugi"
</style>
