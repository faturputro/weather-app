import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/home',
    component: () => import(/* webpackChunkName: "dashboard" */ '../layouts/Dashboard.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "profile" */ '../views/dashboard/Home.vue'),
        meta: {
          title: store.getters['geolocation/currentLocation'].city,
        },
      },
      {
        path: 'city/:cityName',
        name: 'Details',
        component: () => import(/* webpackChunkName: "profile" */ '../views/dashboard/Home.vue'),
        meta: {
          title: store.getters['geolocation/currentLocation'].city,
        },
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '../views/dashboard/SearchCity.vue'),
        meta: {
          title: 'Change Location',
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
