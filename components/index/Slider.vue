<template>
  <div class="sliders">
    <no-ssr>
      <slick ref="slick" :options="slickOptions" class="slick-slider">
        <div class="slide" v-for="(item, k) in slider" :key="k" :style="'background-image: url(' + item.image + ')' ">
          <div class="slide__wrapper">
            <div class="slide__content">
              <h1 v-if="k == 0" class="slide__title">{{item.title}}</h1>
              <h2 v-else class="slide__title">{{item.title}}</h2>
              <div class="slide__text" v-html="item.text"></div>
              <div class="slide__button">
                <button @click="showForm(item.title)">Заказать</button>
              </div>
            </div>
          </div>
        </div>
      </slick>
    </no-ssr>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
	export default {
	  props: ['slider'],
		name: "sliders",
    data() {
	    return {
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      }
    },
    methods: {
      ...mapMutations({
        showForm: 'mutationShowForm'
      })
    }
	}
</script>

<style lang="sass">
  @import 'node_modules/slick-carousel/slick/slick.css'
  @import 'node_modules/slick-carousel/slick/slick-theme.css'
  @import "../../assets/sass/components/index/slider"
</style>
