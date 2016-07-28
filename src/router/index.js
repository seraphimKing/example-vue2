module.exports = function(router) {
    router.map({
		'/': {
			// component: function (resolve) {
    		// 	require(['./pages/view1'], resolve) // 异步加载view1
    		// }
			component: require("./pages/view1")
		},
		'/v2': {
			// component: function (resolve) {
    		// 	require(['./pages/view2'], resolve)
    		// }
			component: require("./pages/view2")
		}
	})
	router.redirect({
		'*': '/'
	})
}
