module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-validate', {
      lang: 'ru'
    }
    ]
  ],
  axios: {
    host: 'localhost',
    port: '3001'
  },
  head: {
    title: 'Веб-Студия Бамбей',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Веб-Студия Бамбей' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: 'components/Loader.vue',
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/map', ssr: true },
    { src: '~/plugins/slider', ssr: false },
    '~/plugins/loader',
    '~/plugins/axios'
  ],
  router: {
    linkActiveClass: 'active',
  },
  css: [
    { src: '~/assets/sass/main.sass', lang: 'sass' },
    { src: 'vue2-animate/dist/vue2-animate.min.css', lang: 'css'}
  ],
  vendor: [
    '~/plugins/slider',
    '~/plugins/map',
    '~/plugins/loader'
  ],
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      /*if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
