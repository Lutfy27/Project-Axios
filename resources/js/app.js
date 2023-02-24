/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('true', require('./components/TrueComponent.vue').default);
Vue.component('side', require('./components/Sidebar.vue').default);
Vue.component('keranjang-produk', require('./components/Keranjang.vue').default);
Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('semua-produk', require('./components/Produk.vue').default);
Vue.component('button-form', require('./components/ButtonComponent.vue').default);
Vue.component('merek', require('./components/Merek.vue').default);
Vue.component('cart', require('./components/CartComponent.vue').default);
Vue.component('NotFound', require('./components/NotFoundComponents.vue').default);
Vue.component('Home', require('./components/HomeComponent.vue').default);

import Vue from "vue";
import Vuex from "vuex";
import store from "./store"
import { routes } from './routes'
import VueRouter from "vue-router";

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(Vuex)
const app = new Vue({
    el: '#app',
    store,
    router
});

