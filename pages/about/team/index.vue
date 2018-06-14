<template>
  <div class="team">
		<h1 class="team__title">Наша команда</h1>
		<div class="team__content">
			<team-item v-for="(item, k) in users" :key="item.id" :user="item" :class="k % 2 == 0 ? 'team__item_left' : 'team__item_right'"></team-item>
		</div>
	</div>
</template>

<script>
	import TeamItem from '~/components/pages/TeamItem'
	export default {
		name: "team",
		components: {
			TeamItem
		},
		head() {
			return {
				title: 'Наша команда'
			}
		},
		async asyncData({app}) {
			const users = await app.$axios.get('/user')
			return {
				users: users.data
			}
		}
	}
</script>

<style scoped lang="sass">
	@import "../../../assets/sass/pages/team/index"
</style>
