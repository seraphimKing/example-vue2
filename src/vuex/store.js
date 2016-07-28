var Vue = require("vue")
var Vuex = require("vuex")
Vue.use(Vuex)

var store = new Vuex.Store({
    modules: require("./states.js")
})

module.exports = store
