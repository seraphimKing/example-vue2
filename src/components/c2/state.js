module.exports = {
    state: {
        count: 0
    },
    mutations: {
        IN: function(state,num){
            state.count = state.count + num
        }
    }
}
