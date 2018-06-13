<template>
  <slick ref="slick" :options="slickOptions" class="slick-slider">
    <div class="sliders" v-for="item in images" :key="item.id">
      <img :src="item.image" :alt="item.alt">
    </div>
  </slick>
</template>

<script>
	export default {
		name: "slider",
    props: ['images'],
    data() {
      return {
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      }
    },
	}
</script>

<style  lang="sass">
  @import 'node_modules/slick-carousel/slick/slick.css'
  @import 'node_modules/slick-carousel/slick/slick-theme.css'
</style>
