var Vue = require("vue")
var Vuex = require("vuex")
Vue.use(Vuex)

var state = {
    count: 0
}

var mutations = {
    INCREMENT : function(state,amount){
        console.log("++")
        state.count = state.count + amount
    }
}

var store = new Vuex.Store({
    state: state,
    mutations: mutations
})

module.exports = store
