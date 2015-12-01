require('./main.css')

var Vue = require('vue')

var app = new Vue({
  el: 'body',
  data: {
    message: 'message'
  },
  components: {
    he: require('./components/head/head'),
  }
})