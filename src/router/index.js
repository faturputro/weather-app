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
        name: 'DashboardHome',
        component: () => import(/* webpackChunkName: "profile" */ '../views/dashboard/Home.vue'),
        meta: {
          appBar: 'secondary',
          title: store.getters['geolocation/currentLocation'].city,
        },
      },
      {
        path: 'city/:cityName',
        name: 'Details',
        component: () => import(/* webpackChunkName: "weatherdetails" */ '../views/dashboard/WeatherDetails.vue'),
        meta: {
          appBar: 'primary',
          title: store.getters['geolocation/currentLocation'].city,
        },
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '../views/dashboard/SearchCity.vue'),
        meta: {
          appBar: 'secondary',
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
