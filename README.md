# Vuex 

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## Vuex note



### 概述

> Vuex 是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间的数据共享



### 优点

> 使用 Vuex 管理数据的好处：
>				A. 能够在 vuex 中集中管理共享的数据，便于开发和后期进行维护
>				B. 能够高效的实现组件之间的数据共享，提高开发效率
>				C. 存储在 vuex 中的数据是响应式的，当数据发生改变时，页面中的数据也会同步更新



### Vuex 中的核心特性



#### A. State

> State提供唯一的公共数据源，所有共享的数据都要统一放到Store中的State中存储

```javascript
// State 提供唯一的公共数据源，所有共享的数据都要统一放到Store的State中进行存储。
// 创建store数据源，提供唯一公共数据

例如：

 state: {
    count: 0
  }, // state END

在组件中访问 State的方式：
	1). this.$store.state.全局数据名称  如：this.$store.state.count
	// 通过导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性
	2). 先按需导入 mapState 函数： import { mapState } from 'vuex'
	然后数据映射为计算属性： computed:{ ...mapState(['全局数据名称']) }
```



#### B. Mutation

> Mutation用于修改变更$store中的数据

```js
// mutations 用于变更 Store 中的数据4
// 只用 mutations 中定义的函数，才有权利修改 state 中的数据

例如：

mutations: {
    add (state) {
      // 变更状态
      //  不要在 mutations 函数中执行异步操作
      state.count++
    },
}

在组件中访问 mutations 的方式：
            // this.$store.state.count++ // 不合法，错误
            // commit 的作用，就是触发 mutations 中的函数
	1).  this.$store.commit('mutation方法名')  如：this.$store.commit('add')
  	   // 通过导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的 methods 方法
	2).  先按需导入 mapMutations 函数： import { mapMutations } from 'vuex'
	然后数据映射为组件方法： methods:{ ...mapMutations(['mutation方法名']) }

```



#### C. Action

> 在mutations中不能编写异步的代码，会导致 vue-devtools 调试器的显示出错。

```js
// 只用于处理异步任务
// 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。

例如：

actions: {
    // context（形参） 相当于 new 出来的 Vuex.Store 实例化对象
    addAsync (context) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据
        // 必须通过 context.commit() 触发某个 mutation 对象才行
        context.commit('add')
      }, 1000)
    },
}

在组件中访问 actions 的方式：
         // 这里的 dispatch 函数，专门用来触发 actions 中的函数
	1).  this.$store.dispatch('actions方法名')  如： this.$store.dispatch('addAsync')
  	   // 通过导入的 mapMutations 函数，将需要的 actions 函数，映射为当前组件的 methods 方法
	2).  先按需导入 mapActions 函数： import { mapActions } from 'vuex'
	然后数据映射为组件方法： methods:{ ...mapActions(['actions方法名']) }
```





#### D. Getter

> Getter用于对Store中的数据进行加工处理形成新的数据

```js
// 它只会包装Store中保存的数据，并不会修改Store中保存的数据，当Store中的数据发生变化时，Getter生成的内容也会随之变化

例如： 

// 相当于计算属性
  getters: {
    showNum (state) {
      return '当前最新的数量是：[' + state.count + ']'
    }
  }

在组件中访问   getters 的方式：
         // 这里的 dispatch 函数，专门用来触发 actions 中的函数
	1).  this.$store.getters('getters方法名')  如： this.$store.getters('showNum')
  	   // 通过导入的 mapGetters 函数，将需要的 getters 函数，映射为当前组件的 computed 方法
	2).  先按需导入 mapGetters 函数： import { mapActions } from 'vuex'
	然后数据映射为组件计算属性： computed:{ ...mapGetters(['getters方法名']) }
```

