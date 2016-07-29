module.exports = {
    vuex: {
        getters: {
            count: function(state){
                return state.count.count
            }
        },
        actions: {
            plus: function(store){
                store.dispatch('IN',1)
            }
        }
    }
}
