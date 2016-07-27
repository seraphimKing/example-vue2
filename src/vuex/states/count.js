module.exports = {
    state: {
        count: 0
    },
    getter: function(state) {
        return state.count
    },
    action: {
        plus: function(store) {
            store.dispatch("PLUS", 1)
        }
    },
    mutation: {
        PLUS: function(state, amount) {
            console.log("++")
            state.count = state.count + amount
        }
    }
}
