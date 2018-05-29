import {state} from "./index";
export default {
  state: {
    showError: false,
    statusCode: null,
    showForm: false,
    message: null,
    theme: null,
    formInputs: {
      title: 'Отправить заявку',
      form: {
        name: {
          placeholder: 'Ваше имя*',
          vvName: 'Имя',
          name: 'name',
          value: '',
          validate: 'required'
        },
        phone: {
          placeholder: 'Номер Телефона*',
          vvName: 'Телефон',
          name: 'phone',
          validate: {required : true, regex:/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/}
        },
        email: {
          placeholder: 'Ваш E-mail',
          name: 'email',
          value: '',
          vvName: 'E-mail',
          validate: 'required|email'
        }
      }
    },
  },
  getters: {
    getFormInputs: (state) => {
      return state.formInputs
    },
    getShowForm: (state) => {
      return state.showForm
    },
    getError: (state) => {
      return state.showError
    },
    getStatusCode: (state) => {
      return state.statusCode
    },
    getMessage: (state) => {
      return state.message
    }

  },
  mutations: {
    mutationShowForm: (state, payload) => {
      state.showForm = state.showForm ? false : true
      state.theme = payload
      return state
    },
    mutationFormInput: (state, payload) => {
      return state.formInputs = payload
    },
    closeForm: (state) => {
      return state.showForm = false
    },
    mutationError: (state) => {
      return state.showError = true
    },
    sendForm: (state, payload) => {
      console.log(123)
    },
    closeError: (state) => {
      return state.showError = false
    },
    clearForm: (state) => {
      state.formInputs.form.map(item => {
        item.value = ''
      })
      return state
    }
  },
  actions: {

  }
}
