import Cookie from 'js-cookie'
import cookieparser from 'cookieparser'
import store from "./index";
export default {
  state: {
    user: {}
  },
  getters: {
    getUser: (state) => {
      return state.user
    }
  },
  mutations: {
    commitUser: (state, payload) => {
      return state.user = payload
    },
    authUser: (state, payload) => {
      Cookie.set('authToken', payload.token, { expires: 7 , path: '.localhost'})
      const cook = Cookie.get('authToken')
      return state.user = payload.user
    },
    logoutUser: (state) => {
      Cookie.remove('authToken')
      return state.user = {}
    }
  },
  actions: {
    //Авторизация пользователя

    async nuxtServerInit({commit},{req, app}) {

      if(req.headers.cookie) {
        const parse = cookieparser.parse(req.headers.cookie);
        if(parse.authToken) {
          req.headers.Authorization = 'Bearer '+parse.authToken;
          app.$axios.setToken(req.headers.Authorization);
          const user = await app.$axios.get('/auth/user');
          if(!user.data.error) {
            commit('commitUser', user.data)
          }
        }
      }
    }
  }
}
