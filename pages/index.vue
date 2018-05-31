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
      Blog
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
        portfolio: [
          {
            name: 'СОЗДАНИЕ САЙТОВ',
            alias: 'sozdaniy-saytov',
            id: 1,
            works: [
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 1,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 2,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 3,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 4,
                image: '/img/slider/slide-1.jpg'
              }
            ]
          },
          {
            name: 'СОЗДАНИЕ ЛОГОТИПА',
            alias: 'sozdanie-logotipa',
            id: 2,
            works: [
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 5,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 6,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 7,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 8,
                image: '/img/slider/slide-1.jpg'
              }
            ]
          },
          {
            name: 'РАЗРАБОТКА БРЕНДА',
            alias: 'razrabotka-brenda',
            id: 3,
            works: [
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 9,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 10,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 11,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 12,
                image: '/img/slider/slide-1.jpg'
              }
            ]
          },
          {
            name: 'Продвижение сайта',
            alias: 'prodvishenie-sayta',
            id: 4,
            works: [
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 13,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 14,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 15,
                image: '/img/slider/slide-1.jpg'
              },
              {
                name: 'Фитнес-тренер',
                type: 'Сео / дизайн',
                link: 'fitnes-trener',
                id: 16,
                image: '/img/slider/slide-1.jpg'
              }
            ]
          }
        ],
        blog: [
          {
            id: 1,
            title: 'Статья 1',
            shortText: 'Короткий текст первой статьи',
            favicon: '/img/slider/slide-1.jpg',
            alias: 'statiya-1',
          },
          {
            id: 2,
            title: 'Статья 2',
            shortText: 'Короткий текст второй статьи',
            favicon: '/img/slider/slide-1.jpg',
            alias: 'statiya-2',
          },
          {
            id: 3,
            title: 'Статья 3',
            shortText: 'Короткий текст третьей статьи',
            favicon: '/img/slider/slide-1.jpg',
            alias: 'statiya-3',
          },

        ]
      }
    }
  }
</script>

<style>
</style>
