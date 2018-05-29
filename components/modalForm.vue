<template>
  <transition name="form">
    <div class="modal" ref="modal">
      <div class="modal__container">
        <h1 class="modal__title">{{form.title}}</h1>
        <div class="modal__form">
          <form @submit.prevent="validateForm(form.form)">
            <div class="modal__item" v-for="(value, k) in form.form" :key="k">
              <input type="text" @click="closeError" v-bind:placeholder="value.placeholder" v-model="value.value" v-validate="value.validate" :data-vv-name="value.vvName" :class="{'input': true, 'is-danger': errors.has(value.vvName) &&  error, 'is-good' : !errors.has(value.vvName) &&  error}">
              <span v-if="errors.has(value.vvName) && error" class="modal__error">{{ errors.first(value.vvName) }}</span>
            </div>
            <div class="modal__text">
              Отправляя форму, вы даете свое согласие на <nuxt-link to="/obrabotka-personalnyh-dannyh" target="_blank">обработку персональных данных</nuxt-link> и соглашаюсь с условиями
              <nuxt-link to="/" target="_blank">политики конфиденциальности</nuxt-link>
            </div>
            <button class="modal__button">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "modal-form",
    computed: {
      ...mapGetters({
        form: 'getFormInputs',
        error: 'getError',
        status: 'statusCode',
        message: 'message'
      })
    },
    methods: {
      ...mapMutations({
        showError: 'mutationError',
        submitForm: 'sendForm',
        sendError: 'sendError',
        closeError: 'closeError',
        closeForm: 'closeForm'
      }),
		  validateForm: function(form) {
        this.$validator.validateAll().then((result) => {
          if(result) {
            this.submitForm(form)
          }
          else {
            this.showError()
          }
        })
      },
    },
    mounted: function () {
      const body = document.getElementsByClassName('body')[0];
      body.classList.add('blur');
      const modal = this.$refs.modal
      const vm = this
      modal.addEventListener('click', function(e) {
        const target = e.target.className
        if (target == 'modal') {
          vm.closeForm()
        }
      })
      document.addEventListener('keypress', function(e) {
        const key = e.keyCode;
        if(key == 27) {
          vm.closeForm()
        }
      })
    },
    beforeDestroy: function () {
      const body = document.getElementsByClassName('body')[0];
      body.classList.remove('blur');
      const modal = this.$refs.modal
      modal.removeEventListener('click', function() {
        console.log('Успешно удален')
      })
      document.removeEventListener('keypress', function() {})
    }
	}
</script>

<style scoped lang="sass">
  @import "../assets/sass/system/modal"
</style>
