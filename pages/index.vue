<template>
  <section class="container">
    <div>
      <sliders :slider="slider"></sliders>
    </div>
  </section>
</template>

<script>
  import Sliders from '~/components/index/Slider'
  export default {
    components: {
      Sliders
    },
    data() {
      return {
        slider: [
          {
            title: 'Заказать сайт',
            text: 'Создадим сайт, логотип, рекламу,<br/>с анализом вашего бизнеса от 10.000<br/> рублей от 6 дней',
            image: '/img/slider/slide-1.jpg'
          },
          {
            title: 'Заказать сайт',
            text: 'Создадим сайт, логотип, рекламу,<br/>с анализом вашего бизнеса от 10.000<br/> рублей от 6 дней',
            image: '/img/slider/slide-1.jpg'
          },
          {
            title: 'Заказать сайт',
            text: 'Создадим сайт, логотип, рекламу,<br/>с анализом вашего бизнеса от 10.000<br/> рублей от 6 дней',
            image: '/img/slider/slide-1.jpg'
          },
          {
            title: 'Заказать сайт',
            text: 'Создадим сайт, логотип, рекламу,<br/>с анализом вашего бизнеса от 10.000<br/> рублей от 6 дней',
            image: '/img/slider/slide-1.jpg'
          },
          {
            title: 'Заказать сайт',
            text: 'Создадим сайт, логотип, рекламу,<br/>с анализом вашего бизнеса от 10.000<br/> рублей от 6 дней',
            image: '/img/slider/slide-1.jpg'
          },
        ]
      }
    }
  }
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
