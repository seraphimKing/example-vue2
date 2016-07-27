var Vue = require('vue')
var VueResource = require('vue-resource')
var VueRouter = require('vue-router')
var routerConfig = require('./router')
var app = require('./app')
Vue.use(VueRouter)
Vue.use(VueResource)
var router = new VueRouter()

routerConfig(router)

// var allc = require("./allc.js")
// Vue.mixin(allc)
// var operations = require("./vuex/operations.js")
// Vue.mixin(operations)

router.start(app,'app')
