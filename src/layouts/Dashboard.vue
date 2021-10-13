<template>
  <div class="w-full h-full relative">
    <div
      class="app-container shadow-xl"
      :class="isShowMenu && 'active'"
    >
      <navbar
        title="Jakarta"
        color="secondary"
        @menuClicked="toggleMenu"
      ></navbar>
      <router-view></router-view>
    </div>
    <div class="flex flex-col justify-between relative ml-6 h-full">
      <div class="mt-16">
        <p class="opacity-75 text-white">Current Location</p>
        <h4 class="mt-6 text-white font-bold text-xl">
          <eva-icon name="pin" fill="#FFF"></eva-icon>
          Kec. Cimahi Tengah
        </h4>
      </div>
      <div>
        <ul>
          <li class="text-white text-lg mb-4">
            <router-link to="/search">
              <eva-icon name="pin" fill="#FBF99E"></eva-icon> Add Location
            </router-link>
          </li>
          <li class="text-white text-lg mb-4">
            <router-link to="/search">
              <eva-icon name="pin" fill="#FFF"></eva-icon> Add Location
            </router-link>
          </li>
          <li class="text-white text-lg mb-4">
            <router-link to="/search">
              <eva-icon name="pin" fill="#FFF"></eva-icon> Add Location
            </router-link>
          </li>
          <li class="text-white text-lg mb-4">
            <router-link to="/search">
              <eva-icon name="pin" fill="#FFF"></eva-icon> Add Location
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
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
};
</script>
