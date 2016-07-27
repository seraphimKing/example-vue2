var count = require("./states/count.js")
module.exports = {
    vuex: {
        getters: {
            count: count.getter
        },
        actions: {
            plus: count.action.plus
        }
    }
}
