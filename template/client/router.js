import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入页面
import Home from 'views/Home';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});
