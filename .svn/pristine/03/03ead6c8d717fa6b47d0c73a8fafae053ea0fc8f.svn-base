import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  website: '',
  ecode: '',
  personnelList: null,
  siteOperationsList: null,
  fileReportList: null,
  econtract: null
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  TOGGLE_WEBSITE: (state, website) => {
    state.website = website
  },
  TOGGLE_ECODE: (state, ecode) => {
    state.ecode = ecode
  },
  //personnelList
  TOGGLE_PERSONNELIST: (state, personnelList) => {
    state.personnelList = personnelList
  },
  //siteOperationsList
  TOGGLE_OPERATIONSLIST: (state, siteOperationsList) => {
    state.siteOperationsList = siteOperationsList
  },
  //fileReportList
  TOGGLE_REPORTLIST: (state, fileReportList) => {
    state.fileReportList = fileReportList
  },
  //econtract
  TOGGLE_ECONTRACT: (state, econtract) => {
    state.econtract = econtract
  },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  toggleWebsite({ commit }, website) {
    commit('TOGGLE_WEBSITE', website)
  },
  toggleEcode({ commit }, ecode) {
    commit('TOGGLE_ECODE', ecode)
  },
  toggleEcontract({ commit }, econtract) {
    commit('TOGGLE_ECONTRACT', econtract)
  },
  toggleReportList({ commit }, fileReportList) {
    commit('TOGGLE_REPORTLIST', fileReportList)
  },
  toggleOperationsList({ commit }, siteOperationsList) {
    commit('TOGGLE_OPERATIONSLIST', siteOperationsList)
  },
  togglePersonnelList({ commit }, personnelList) {
    commit('TOGGLE_PERSONNELIST', personnelList)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
