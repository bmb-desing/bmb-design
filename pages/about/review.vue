<template>
	<div class="review">
		<h1 class="review__title">Отзывы о нас</h1>
		<div class="review__wrapper">
			<div class="review__item" v-for="item in review" :key="item.id">
				<div class="review__content">
					<div class="review__left">
						<img :src="item.image ? item.image : '/img/system/no-img.png'" alt="" class="review__image">
					</div>
					<div class="review__right">
						<h3>{{item.name}}</h3>
						<div class="review__buttons">
							<a class="review__button review__button_video" v-if="item.video" :href="item.video" target="_blank"></a>
							<span class="review__button review__button_document" v-if="item.document">
								<img alt="" v-img :src="item.document">
							</span>
						</div>
					</div>
				</div>
				<div class="review__text" v-html="item.text"></div>
			</div>
		</div>
		<div class="review__load" v-if="count > review.length">
			<button @click="loadReview">Загрузить еще</button>
		</div>
		<div class="review__form">
			<h2>Оставьте свой отзыв</h2>
			<form @submit.prevent="validateForm" novalidate>
				<div class="form__item">
					<input type="email" v-model="form.email" v-validate="'required|email'" placeholder="Ваш E-mail" data-vv-name="E-mail" @change="changeInput">
					<span v-if="errors.has('E-mail') && showError" class="error">{{ errors.first('E-mail') }}</span>
				</div>
				<div class="form__item">
					<input type="text" v-model="form.name" v-validate="'required'" placeholder="Ваше имя" data-vv-name="Имя" @change="changeInput">
					<span v-if="errors.has('Имя') && showError" class="error">{{ errors.first('Имя') }}</span>
				</div>
				<div class="form__item">
					<textarea v-model="form.text" v-validate="{required: true, min:30}" placeholder="Ваш отзыв" data-vv-name="Отзыв" @change="changeInput"></textarea>
					<span v-if="errors.has('Отзыв') && showError" class="error">{{ errors.first('Отзыв') }}</span>
				</div>
				<div class="form__item review__load">
					<button>Отправить</button>
					<div v-if="responseStatus" :class="responseStatus == 200 ? 'good' : 'error'">{{responseText}}</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "otzivi",
		async asyncData({app}) {
			const review = await app.$axios.get('/review')
			return {
				review: review.data.review,
				count: review.data.count
			}
		},
		data() {
			return {
				responseStatus: null,
				responseText: null,
				showError: false,
				form: {
					email: null,
					name: null,
					text: null
				}
			}
		},
		head() {
			return {
				title: 'Отзывы'
			}
		},
		methods: {
			async loadReview() {
				const length = this.review.length
				const review = await this.$axios.get('/review?length=' + length)
				review.data.review.map(item => {
					this.review.push(item)
				})
				return this
			},
			validateForm() {
        this.$validator.validateAll().then((result) => {
          if(result) {
            this.submitForm()
          }
          else {
            this.showError = true
					}
					return this
        })
			},
			changeInput() {
				return this.showError = false
			},
			submitForm() {
				const review = {
					name: this.form.name,
					email: this.form.email,
					text: this.form.text
				}
				this.$axios.post('/review/add', review).then(status => {
					this.responseStatus = status.status
					this.responseText = status.data
					this.clearForm()
					return this
				}).catch(err => {
					this.responseStatus = err.status
					this.responseText = err.data
					return this
				})
			},
			clearForm() {
				this.form.name = null
				this.form.email = null
				this.form.text = null
				return this
			}
		}
	}
</script>

<style scoped lang="sass">
	@import "../../assets/sass/pages/review"
</style>
