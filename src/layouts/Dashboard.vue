<template>
  <div class="w-full h-full relative">
    <div
      class="app-container shadow-xl"
      :class="isShowMenu && 'active opacity-75'"
    >
      <navbar @menuClicked="toggleMenu"></navbar>
      <router-view></router-view>
    </div>
    <div class="flex flex-col justify-between relative ml-6 h-full">
      <div class="mt-16">
        <p class="opacity-75 text-white">Current Location</p>
        <h4 class="mt-6 text-white font-semibold text-xl">
          <eva-icon name="pin" fill="#FFF"></eva-icon>
          {{ currentLocation.city }}, {{ currentLocation.country }}
        </h4>
      </div>
      <div>
        <ul>
          <li class="text-white text-lg mb-4">
            <router-link to="/dashboard/search" class="flex items-center">
              <eva-icon name="pin" fill="#FBF99E"></eva-icon>
              <span class="ml-2 text-secondary font-semibold">Add Location</span>
            </router-link>
          </li>
          <li class="text-white text-lg mb-4">
            <router-link to="/dashboard/search?q=Yogyakarta" class="flex items-center">
              <eva-icon name="pin" fill="#FFF"></eva-icon> <span class="ml-2">Yogyakarta</span>
            </router-link>
          </li>
          <li class="text-white text-lg mb-4">
            <router-link to="/dashboard/search?q=Bandung" class="flex items-center">
              <eva-icon name="pin" fill="#FFF"></eva-icon> <span class="ml-2">Bandung</span>
            </router-link>
          </li>
          <li class="text-white text-lg mb-4">
            <router-link to="/dashboard/search?q=Jakarta" class="flex items-center">
              <eva-icon name="pin" fill="#FFF"></eva-icon> <span class="ml-2">Jakarta</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mb-64">
        <ul>
          <li class="text-white text-lg mb-4">
            Settings
          </li>
          <li class="text-white text-lg mb-4">
            Share this app
          </li>
          <li class="text-white text-lg mb-4">
            Rate this app
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      isShowMenu: false,
    };
  },
  computed: {
    currentLocation() {
      return this.$store.getters['geolocation/currentLocation'];
    },
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
  watch: {
    $route: {
      handler() {
        this.isShowMenu = false;
      },
    },
  },
};
</script>
