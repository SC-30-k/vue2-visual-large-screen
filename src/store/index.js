import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  years: ["2016", "2017", "2018", "2019", "2020"]   //共享的年份数据
}
const getters = {

}
const mutations = {

}
const actions = {

}
const modules = {

}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
})
