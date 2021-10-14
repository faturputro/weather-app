<template>
  <button
    type="button"
    class="w-button w-full rounded-full py-3 px-6 border-0 outline-none"
    @click="clickHandler"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickHandler() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>
