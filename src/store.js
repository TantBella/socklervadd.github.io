import { createStore } from 'vuex'

const mutations = {
    updateCats(state, cats) {
      state.cats = cats
    }
  },
  state = {
    cats: []
  }

export default createStore({
  mutations,
  state,
  strict: true
})
