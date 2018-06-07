<template>
  <div class="auth">
    <div class="auth__header">
      <img src="/img/system/logo-back.png" alt="Веб-студия Бамбей">
    </div>
    <div class="auth__body">
      <form @submit.prevent="submitLogin">
        <div class="auth__item">
          <i class="fa fa-envelope"></i>
          <input type="email" placeholder="E-mail" name="email" v-model="email" v-validate="'required|email'" :data-vv-name="'E-mail'">
        </div>
        <span v-if="errors.has('E-mail') && error" class="auth__error">{{ errors.first('E-mail') }}</span>
        <div class="auth__item">
          <i class="fa fa-unlock"></i>
          <input type="password" placeholder="Пароль" v-model="password" v-validate="'required'" :data-vv-name="'Пароль'">
        </div>
        <span v-if="errors.has('Пароль') && error" class="auth__error">{{ errors.first('Пароль') }}</span>
        <div class="auth__error" v-if="errorMessage">{{errorMessage}}</div>
        <div class="auth__item">
          <button class="auth__button">Войти</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
	export default {
		name: "login",
    middleware: ['no-auth'],
    layout: 'auth',
    head() {
		  return {
		    title: 'Bmb-design Авторизация'
      }
    },
    data() {
		  return {
		    email: null,
        password: null,
        error: false,
        errorMessage: null
      }
    },
    methods: {
      ...mapMutations({
        login: 'authUser'
      }),
		  submitLogin() {
        this.$validator.validateAll().then((result) => {
          if(result) {
            this.sendLogin({
              email: this.email,
              password: this.password
            })
          }
          else {
            this.showError(true)
          }
        })
      },
      showError(status) {
		    this.error = status
      },
      async sendLogin(data) {
        const auth = await this.$axios.post('/auth/login', {
          email: data.email,
          password: data.password
        })
        if (auth.data.error) {
          return this.errorMessage = auth.data.message
        }
        else {
          this.uploadUser(auth.data)
        }
      },
      uploadUser(data) {
        this.login(data)
        this.$router.push('/admin')
      }

    }
	}
</script>

<style scoped lang="sass">
  @import "../assets/sass/auth/auth"
</style>
