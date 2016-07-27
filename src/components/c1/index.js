module.exports = {
    template: require("./index.html"),
    vuex: {
        actions: {
            increment: require("../../vuex/actions.js")
        }
    }
}
