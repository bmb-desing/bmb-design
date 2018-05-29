<template>
    <transition name="map">
      <div class="header__map">
        <div class="content">
          <div class="header__map__preloader">
            <img src="/img/system/logo-white.png" alt="Веб-Студия Бамбей">
            <p>Карта загружается...</p>
          </div>
          <no-ssr>
            <yandex-map
              :coords="[44.584263, 33.513394]"
              style="width: 100%; height: 100vh; min-height: 100vh"
              :placemarks="placemarks"
              zoom="16"
              :scroll-zoom="false"
            >
              <ymap-marker
                :markerId="index"
                marker-type="placemark"
                v-for="(marker, index) in markers"
                :key="index"
                :coords="marker.coord"
                :icon="{color: 'red', glyph: 'dot'}"
                :balloon="{header: marker.header, body: marker.body, footer: marker.footer}"
                :hint-content="marker.hint"
              >
              </ymap-marker>
            </yandex-map>
          </no-ssr>
        </div>
        <div class="header__map__footer" @click="getMap">
          Закрыть
        </div>
      </div>
    </transition>
</template>

<script>
  import {mapMutations} from 'vuex'
	export default {
		name: "maping",
    data() {
      return {
        placemarks: [
          {
            coords: [44.584263, 33.513394],
            properties: {}, // define properties here
            options: {}, // define options here
            clusterName: "1",
          }
        ],
        markers: [
          {
            coord: [44.584263, 33.513394],
            hint: 'BOMBAY',
            header: 'Студия BOMBAY',
            body: '',
            footer: '<a href="tel:+79781004939">+7 (978) 100 49 39</a>'
          }
        ]
      }
    },
    methods: {
      ...mapMutations({
        getMap: 'mutationMap',
      })
    },
    created: function () {
      const body = document.getElementsByClassName('body')[0];
      body.classList.add('blur');
    },
    beforeDestroy: function () {
      const body = document.getElementsByClassName('body')[0];
      body.classList.remove('blur');
    }
	}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/components/header/map"
  .map-enter-active, .map-leave-active
    transition: max-height .25s
  .map-enter
    max-height: 0
    .header__map__footer
      opacity: 0
  .map-leave-to
    max-height: 0
    .header__map__footer
      opacity: 0
</style>
