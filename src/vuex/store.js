var Vue = require("vue")
var Vuex = require("vuex")
Vue.use(Vuex)

var store = new Vuex.Store({
    modules: {
        count: require("./count")
    }
})

module.exports = store
