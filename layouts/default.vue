<template>
  <div>
    <main-header></main-header>
    <div class="body">
      <div class="content">
        <nuxt/>
        <contacts></contacts>
      </div>
      <main-footer class="footer"></main-footer>
    </div>
    <callback-form v-if="getShowForm"></callback-form>
  </div>
</template>
<script>
  import MainHeader from '~/components/MainHeader'
  import CallbackForm from '~/components/modalForm'
  import MainFooter from '~/components/MainFooter'
  import Contacts from '~/components/index/Contacts'
  import {mapGetters} from 'vuex'
  export default {
    middleware: ['pages'],
    components: {
      MainHeader,
      CallbackForm,
      MainFooter,
      Contacts
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
    max-width: 100vw
    overflow: hidden
    display: flex
    flex-direction: column
    height: 100%
    min-height: 100vh
  .blur
    filter: blur(5px)
  .body-error
    min-height: 100vh
    background-color: rgba(#000, .8)
  .content
    flex: 1 0 auto
  .footer
    flex: 0 0 auto
</style>
