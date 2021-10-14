<template>
  <nav
    class="nav flex justify-between items-center w-full pt-8 pb-6 px-10 sticky top-0 z-50"
    :class="[
      $route.meta.appBar === 'primary' ? 'nav--primary' : 'nav--secondary',
      showShadow && 'is-scrolled',
    ]"
  >
    <button
      v-if="isShowHamburger"
      type="button"
      @click="$emit('menuClicked')"
    >
      <eva-icon
        name="menu"
        animation="pulse"
        :fill="iconFill"
      ></eva-icon>
    </button>
    <button
      v-else
      type="button"
      @click="$router.go(-1)"
    >
      <eva-icon
        name="arrow-ios-back"
        animation="pulse"
        :fill="iconFill"
      ></eva-icon>
    </button>
    <p
      class="font-medium text-xl"
      :class="$route.meta.appBar === 'primary' ? 'text-white' : 'text-gray-700'"
    >
      {{ title }}
    </p>
    <button
      v-if="isShowHamburger"
      type="button"
    >
      <eva-icon
        name="settings-2"
        animation="pulse"
        :fill="iconFill"
      ></eva-icon>
    </button>
    <button
      v-else
      type="button"
    >
      <eva-icon
        name="more-horizotnal-outline"
        animation="pulse"
        :fill="iconFill"
      ></eva-icon>
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {
      container: null,
      showShadow: false,
    };
  },
  computed: {
    isShowHamburger() {
      return this.$route.path === '/dashboard/home';
    },
    title() {
      return this.$route.meta.title || this.$store.getters['geolocation/currentLocation'].city;
    },
    iconFill() {
      return this.$route.meta.appBar === 'primary' ? '#FFFFFF' : '#363B64';
    },
  },
  mounted() {
    this.container = document.querySelector('.app-container');
    this.container.addEventListener('scroll', this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      this.showShadow = this.container.scrollTop > 10;
    },
  },
};
</script>
