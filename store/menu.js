
export default {
  state: {
    map: false,
    time: false,
    menu: false,
  },
  getters: {
    getMap: (state) => {
      return state.map
    },
    getTimes: (state) => {
      return state.time
    },
    getMenu: (state) => {
      return state.menu
    }
  },
  mutations: {
    mutationMap: (state) => {
      return state.map = state.map ? false : true
    },
    mutationTimes: (state) => {
      return state.time = state.time ? false : true
    },
    mutationMenu: (state) => {
      return state.menu = state.menu ? false : true
    },
    closePopup: (state) => {
      state.map = false
      state.time = false
      state.menu = false
      return state
    }
  }
}
