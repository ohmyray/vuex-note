<template>
  <div>
    <!-- 组件访问 State 中数据的第一种方式
    this.$store.state -->
    <h3>当前最新的count值为: {{$store.state.count}}</h3>
    <button @click="handleAdd"> +1 </button>
    <button @click="handleAddN(step)"> +{{ step }} </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 10 // 每次增加的大小
    }
  },
  methods: {
    handleAdd () {
      // this.$store.state.count++ // 不合法，错误
      // Mutation 修改全局数据
      // 触发 mutations 的第一种方式
      // commit 的作用，就是调用 mutations 中的函数
      this.$store.commit('add')
    },
    handleAddN (step) {
      // 触发 mutations 的第一种方式
      // 触发 mutations 时携带参数
      // console.log(step)
      this.$store.commit('addN', step)
    }
  }
}
</script>

<style>

</style>
