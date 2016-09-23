import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App.vue';
import store from './store';
import router from './router';
import { sync } from 'vuex-router-sync';

sync(store, router);
FastClick.attach(document.body);

const app = new Vue({
  router,
  store,
  ...App,
});

export { app, router, store };
