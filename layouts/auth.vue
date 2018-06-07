<template>
  <div class="login">
    <div class="login__wrapper">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
	export default {
		name: "auth",
    head() {
		  return {
		    link: [
          {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
          }
        ]
      }
    }
	}
</script>

<style scoped lang="sass">
  @import "../assets/sass/auth/index"
</style>
