require('./bootstrap');

window.Vue = require('vue/dist/vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './Layout.vue';
import {route} from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: route
});
new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
