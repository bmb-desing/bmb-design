<template>
  <div>
    <admin-header></admin-header>
    <nuxt></nuxt>
  </div>
</template>

<script>
  import AdminHeader from '~/components/admin/adminHeader'
	export default {
		name: "admin",
    middleware: ['auth'],
    components: {
		  AdminHeader
    }
	}
</script>

<style scoped>

</style>
