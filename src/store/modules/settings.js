import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  baseUrl: '线上'
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  CHANGE_BASEURL: (state, value) => {
    // eslint-disable-next-line no-prototype-builtins
    state.baseUrl = value
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  changeBaseUrl({ commit }, data) {
    commit('CHANGE_BASEURL', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

