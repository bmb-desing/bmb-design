<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__left">
        <img src="/img/system/logo-white.png" alt="БМБ">
      </div>
      <div class="header__rigth">
        <div class="header__user" @click="userLogout">{{user.last_name}} {{user.first_name}}</div>
      </div>
    </div>
  </header>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "admin-header",
    computed: {
      ...mapGetters({
        user: 'getUser'
      })
    },
    methods: {
      ...mapMutations({
        logout: 'logoutUser'
      }),
      userLogout() {
        this.logout()
        this.$router.push('/')
      }
    }
	}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/admin/system/header"
</style>
