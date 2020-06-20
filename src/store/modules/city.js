const state = {
  data: null,
  loader: false
}

const mutations = {
  SET_DATA (state, { city, list }) {
    const moreDetails = list.splice(0, 6);
    const shortDetails = list.splice(0, 1);
    state.data = {
      city,
      details: {
        shortDetails,
        moreDetails
      }
    }
  },
  SET_LOADER (state, payload) {
    state.loader = payload
  }
}

const actions = {
  async getCityByGeoLocation ({ commit }, { lat, lon }) {
    commit('SET_LOADER', true)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}`, {
      method: 'POST'
    })
    const data = await res.json()
    commit('SET_DATA', data)
    commit('SET_LOADER', false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
