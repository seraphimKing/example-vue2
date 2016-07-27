module.exports = {
    template: require("./index.html"),
    vuex: {
        getters: {
            count: require("../../vuex/getters.js")
        }
    }
}
