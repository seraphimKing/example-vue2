var style = require("./index.css")
module.exports = {
    template: require("./index.html"),
    data: function(){
        return {
            style: style
        }
    },
    mixins: [
        require("./action.js")
    ]
}
