<template>
	<div class="news">
		<h1 class="news__title">Статьи</h1>
		<div class="news__wrapper">
			<div class="news__item" v-for="item in news" :key="item.id"></div>
		</div>
		<div class="news__paginator">
			<ul>
				<li v-for="n in pages" :key="n">
					<nuxt-link :to="'/about/blog?page=' + n">
						{{n}}
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "blog",
		async asyncData({app, route}) {
			const page = route.query.page || 1
			const news = await app.$axios.get('/news/all?page=' + page)
			return {
				news: news.data.news,
				count: news.data.count,
				pages: Math.ceil(news.data.count / 5)
			}
		},
		head() {
			return {
				title: 'Новости'
			}
		},
		data() {
		}
	}
</script>

<style scoped lang="sass">

</style>
