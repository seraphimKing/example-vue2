var Vue = require("vue")
var Vuex = require("vuex")
Vue.use(Vuex)

var count = require("./states/count.js")
var store = new Vuex.Store({
    state: count.state,
    mutations: count.mutation,
    // modules: modules,
    strict: true
})

// import all actions and getters to webapp
// Vue.mixin(actions && getters)
//
// if (module.hot) {
//   // 使 actions 和 mutations 成为可热重载模块
//   module.hot.accept(['./actions', './mutations'], () => {
//     // 获取更新后的模块
//     // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
//     const newActions = require('./actions').default
//     const newMutations = require('./mutations').default
//     // 加载新模块
//     store.hotUpdate({
//       actions: newActions,
//       mutations: newMutations
//     })
//   })
// }

module.exports = store
