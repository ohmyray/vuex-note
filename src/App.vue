<template>
  <div>
    <my-addition></my-addition>
    <hr>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition'
import Subtraction from './components/Subtraction'

export default {
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
