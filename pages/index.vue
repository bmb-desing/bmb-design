<template>
  <section class="container">
    <div>
      <sliders :slider="slider"></sliders>
      <uslugi :uslugi="uslugi"></uslugi>
      <portfolio :portfolio="portfolio"></portfolio>
      <blog :blog="blog"></blog>
    </div>
  </section>
</template>

<script>
  import Sliders from '~/components/index/Slider'
  import Uslugi from '~/components/index/Uslugi'
  import Portfolio from '~/components/index/Portfolio'
  import Blog from '~/components/index/Blog'
  export default {
    components: {
      Sliders,
      Uslugi,
      Portfolio,
      Blog,
    },
    async asyncData({app}) {
      const portfolio = await app.$axios.get('/works');
      const blog = await app.$axios.get('/news');
      return {
        portfolio: portfolio.data,
        blog: blog.data
      }
    },
    data() {
      return {
        uslugi: [
          {
            title: 'СОЗДАНИЕ ЛОГОТИПА',
            link: '/logo',
            image: '/img/system/uslugi/edit.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
            'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
          },
          {
            title: 'СОЗДАНИЕ Сайта',
            link: '/web',
            image: '/img/system/uslugi/code.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
            'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
          },
          {
            title: 'Комплексное продвижение компании',
            link: '/reklama',
            image: '/img/system/uslugi/growth.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
            'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
          },
          {
            title: 'Оффлайн реклама',
            link: '/reklama/offline-reklama',
            image: '/img/system/uslugi/road-banner.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
            'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
          }
        ],
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
        ],
      }
    }
  }
</script>

<style>
</style>
