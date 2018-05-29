<template>
  <div>
    <main-header></main-header>
    <div class="body">
      <nuxt/>
    </div>
    <callback-form v-if="getShowForm"></callback-form>
  </div>
</template>
<script>
  import MainHeader from '~/components/MainHeader'
  import CallbackForm from '~/components/modalForm'
  import {mapGetters} from 'vuex'
  export default {
    middleware: ['pages'],
    components: {
      MainHeader,
      CallbackForm
    },
    computed: {
      ...mapGetters({
        getShowForm: 'getShowForm'
      })
    }
  }
</script>
<style scoped lang="sass">
  .body
    transition: all .25s
  .blur
    filter: blur(5px)
  .body-error
    min-height: 100vh
    background-color: rgba(#000, .8)
</style>
