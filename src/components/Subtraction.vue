<template>
  <div>
    <h3>当前最新的count值为: {{ count }}</h3>
    <button> -1 </button>
  </div>
</template>

<script>
// 组件访问 State 中数据的第二种方式
// 1. 从 vuex 中按需导入 mapState 函数
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  // 通过导入的mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style>

</style>
