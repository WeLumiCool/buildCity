require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import {route} from './routes';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuesax, {});

const router = new VueRouter({
    mode: 'history',

    routes: route
});
new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
