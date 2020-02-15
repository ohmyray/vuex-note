<template>
  <div>
    <!-- <h3>当前最新的count值为: {{ count }}</h3> -->
    <h3>{{ showNum }}</h3>
    <button @click="handleSub"> -1 </button>
    <button @click="handleSubN(step)"> -{{ step }} </button>
    <button @click="subN(step)"> subN -{{ step }} </button>
    <button @click="handleSubAsyncN"> async -1 </button>
    <!-- 直接调用 -->
    <button @click="subAsync"> subAsync -1 </button>
  </div>
</template>

<script>
// 组件访问 State 中数据的第二种方式
// 1. 从 vuex 中按需导入 mapState 函数
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      step: 10 // 每次大小
    }
  },
  // 通过导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  // 通过导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的 methods 方法
  methods: {
    ...mapMutations(['sub', 'subN']),
    handleSub () {
      this.sub()
    },
    handleSubN (step) {
      this.subN(step)
    },
    ...mapActions(['subAsync', 'subAsyncN']),
    handleSubAsyncN () {
      this.subAsync()
    }
  }
}
</script>

<style>

</style>
