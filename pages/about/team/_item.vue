<template>
  <div class="team">
		<h1 class="team__title">{{fullName}}</h1>
		<h2 class="team__position">{{user.users_info.position}}</h2>
		<div class="team__wrapper">
			<div class="team__left">
				<img :src="user.users_info.avatar" :alt="fullName">
			</div>
			<div class="team__right">
				<div class="team__text" v-html="user.users_info.text"></div>
			</div>
		</div>
		<div class="team__works">
			<h2>Выполненные работы</h2>
			<div class="team__container">
					<porfolio-item v-for="item in works" :key="item.id" :portfolio="item" :style="'flex-basis:' + getWidth"></porfolio-item>
			</div>
			<div class="team__button" v-if="count > works.length">
				<button @click="getWorks">Загрузить еще</button>
			</div>
		</div>
	</div>
</template>

<script>
	import PorfolioItem from '~/components/pages/Portfolio'
	export default {
		name: "team-item",
		components: {
			PorfolioItem
		},
		head() {
			return {
				title: this.fullName,
        meta: [
          {hid: 'description', name: 'description' , itemprop: 'description', content: this.fullNameWithPosition},
          {hid: 'name', itemprop: 'name', name: 'name',  content: this.fullName},
          {hid: 'image', itemprop: 'image', name: 'image', content: this.user.users_info.avatar},
          {hid: 'og:title', name: 'og:title', content: this.fullName },
          {hid: 'og:url', name: 'og:url', content: this.$route.fullPath},
          {hid: 'og:image', name: 'og:image', content: this.user.users_info.avatar}
        ]
			}
		},
		computed: {
			fullName() {
				return this.user.first_name + ' ' + this.user.last_name
			},
			fullNameWithPosition() {
				return this.fullName + '. ' + this.user.users_info.position
			},
			getWidth() {
        return 100 / 3 + '%'
      }
		},
		async asyncData({app, route}) {
			const alias = route.params.item
			const user = await app.$axios.get('/user/' + alias)
			return {
				user: user.data.user,
				works: user.data.works,
				count: user.data.worksCount
			}
		},
		methods: {
			async getWorks() {
				const limit = this.works.length
				const page = limit / 3 + 1
				const works = await this.$axios.get('/user/' + this.user.alias + '/works?page=' + page )
				works.data.map(item => {
					this.works.push(item)
				})
				return this
			}
		}
	}
</script>

<style scoped lang="sass"> 
	@import "../../../assets/sass/pages/team/item"
</style>
