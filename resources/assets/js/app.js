/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Vuex from 'vuex';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Example from './components/Example.vue';

Vue.component('example', Example);

// Vue.use(Vuex);
Vue.use(VueRouter);

const app = new Vue({
  el: '#app'
});
