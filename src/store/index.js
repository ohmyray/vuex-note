import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // State 提供唯一的公共数据源，所有共享的数据都要统一放到Store的State中进行存储。
  // 创建store数据源，提供唯一公共数据
  state: {
    count: 0
  }, // state END

  // mutations 用于变更 Store 中的数据4
  // 只用 mutations 中定义的函数，才有权利修改 state 中的数据
  mutations: {
    add (state) {
      // 变更状态
      // console.log(state)
      //  不要在 mutations 函数中执行异步操作
      // setTimeout(() => {
      //   state.count++
      // }, 1000)
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
  }, // mutations END

  // 只用于处理异步任务
  // 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。
  actions: {
    // context（形参） 相当于 new 出来的 Vuex.Store 实例化对象
    addAsync (context) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据
        // 必须通过 context.commit() 触发某个 mutation 对象才行
        context.commit('add')
      }, 1000)
    },
    addAsyncN (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subAsyncN (context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  }, // actions END

  modules: {
  },

  // 相当于计算属性
  getters: {
    showNum (state) {
      return '当前最新的数量是：[' + state.count + ']'
    }
  }
})
