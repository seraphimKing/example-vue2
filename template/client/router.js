import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入页面
const Home = r => require.ensure([], () => r(require('views/Home')), 'home');

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});
