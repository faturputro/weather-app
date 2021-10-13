<template>
  <nav
    class="nav flex justify-between items-center w-full pt-8 pb-6 px-10"
    :class="color === 'primary' ? 'nav--primary' : 'nav--secondary'"
  >
    <button
      v-if="isShowHamburger"
      type="button"
      @click="$emit('menuClicked')"
    >
      <eva-icon
        name="menu"
        animation="pulse"
        :fill="color === 'primary' ? '#FFFFFF' : '#363B64'"
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
        :fill="color === 'primary' ? '#FFFFFF' : '#363B64'"
      ></eva-icon>
    </button>
    <p
      class="font-medium text-xl"
      :class="color === 'primary' ? 'text-white' : 'text-gray-700'"
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
        :fill="color === 'primary' ? '#FFFFFF' : '#363B64'"
      ></eva-icon>
    </button>
    <button
      v-else
      type="button"
    >
      <eva-icon
        name="arrow-ios-back"
        animation="pulse"
        :fill="color === 'primary' ? '#FFFFFF' : '#363B64'"
      ></eva-icon>
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    isShowHamburger() {
      return this.$route.path === '/dashboard/home';
    },
  },
};
</script>
