var incrementCounter = function(store,state) {
    console.log("+++")
    store.dispatch('INCREMENT',1)
}

module.exports = incrementCounter
