'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Profile from '../views/Profile.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: Profile,
        meta: {
            noRedirect: true
        }
    },
    {
        path: '*',
        component: NotFound,
        meta: {
            noRedirect: true
        }
    }
];

export default new VueRouter({
    mode: 'history',
    // base: __dirname, -> Not sure what this does.
    linkActiveClass: 'is-active',
    // scrollBehavior,
    routes // short for routes: routes
});