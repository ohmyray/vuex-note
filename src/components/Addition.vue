<template>
  <div>
    <!-- 组件访问 State 中数据的第一种方式
    this.$store.state -->
    <!-- <h3>当前最新的count值为: {{$store.state.count}}</h3> -->
    <!-- 组件访问 getters 中数据的第一种方式
    this.$store.getters -->
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="handleAdd"> +1 </button>
    <button @click="handleAddN(step)"> +{{ step }} </button>
    <button @click="handleAddAsync"> async +1 </button>
    <button @click="handleAddAsyncN(step)"> async +{{ step }} </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 10 // 每次增加的大小
    }
  }, // data END

  methods: {
    handleAdd () {
      // this.$store.state.count++ // 不合法，错误
      // Mutation 修改全局数据
      // 触发 mutations 的第一种方式
      // commit 的作用，就是触发 mutations 中的函数
      this.$store.commit('add')
    },
    handleAddN (step) {
      // 触发 mutations 的第一种方式
      // 触发 mutations 时携带参数
      // console.log(step)
      this.$store.commit('addN', step)
    },
    // 异步的让 count 自增 +1
    handleAddAsync () {
    // 这里的 dispatch 函数，专门用来触发 actions 中的函数
      this.$store.dispatch('addAsync')
    },
    handleAddAsyncN (step) {
      this.$store.dispatch('addAsyncN', step)
    }
  } // methods END
}
</script>

<style>

</style>
