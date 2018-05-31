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
              <img v-lazy="item.favicon" :alt="item.title">
            </nuxt-link>
          </div>
          <div class="item__right">
            <h3>
              <nuxt-link :to="'/about/blog/' + item.alias">
                {{item.title}}
              </nuxt-link>
            </h3>
            <div class="item__date">
              1 Января 2017
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
    export default {
      name: "blog",
      props: ['blog']
    }
</script>

<style scoped lang="sass">
  @import "../../assets/sass/components/index/blog"
</style>
