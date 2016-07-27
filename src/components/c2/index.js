var count = require("../../vuex/states/count.js")
module.exports = {
    template: require("./index.html"),
    vuex: {
        getters: {
            count: count.getter
        },
        actions: {
            plus: count.action.plus
        }
    }
}
