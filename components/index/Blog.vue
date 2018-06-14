<template>
  <div class="blog">
    <div class="blog__wrapper">
      <div class="blog__left">
        <h2 class="blog__title">Наши статьи</h2>
        <div class="blog__button">
          <nuxt-link to="/about/blog">Все статьи</nuxt-link>
        </div>
      </div>
      <div class="blog__right">
        <div class="item" v-for="item in blog" :key="item.id">
          <div class="item__left">
            <nuxt-link :to="'/about/blog/' + item.alias">
              <img v-lazy="item.favicon" :alt="item.name">
            </nuxt-link>
          </div>
          <div class="item__right">
            <h3>
              <nuxt-link :to="'/about/blog/' + item.alias">
                {{item.name}}
              </nuxt-link>
            </h3>
            <div class="item__date">
              {{getTime(item.createdAt)}}
            </div>
            <div class="item__text" v-html="item.shortText"></div>
            <nuxt-link class="item__link" :to="'/about/blog/' + item.alias">Подробнее</nuxt-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import peryod from '~/plugins/peryod'
    export default {
      name: "blog",
      props: ['blog'],
      methods: {
        getTime(time) {
          return peryod(time)
        }
      }
    }
</script>

<style scoped lang="sass">
  @import "../../assets/sass/components/index/blog"
</style>
