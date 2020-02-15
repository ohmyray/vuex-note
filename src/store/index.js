import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // State 提供唯一的公共数据源，所有共享的数据都要统一放到Store的State中进行存储。
  // 创建store数据源，提供唯一公共数据
  state: {
    count: 0
  },
  // mutations 用于变更 Store 中的数据
  mutations: {
    add (state) {
      // 变更状态
      // console.log(state)
      state.count++
    },
    addN (state, step) {
      // 变更状态
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
  },
  modules: {
  }
})
