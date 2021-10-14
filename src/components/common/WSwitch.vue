<template>
  <button
    type="button"
    class="
      w-switch
      w-full relative flex items-center px-4 py-3 cursor-pointer rounded-full
    "
    @click="clickHandler"
  >
    <span
      class="
        w-switch--control h-full w-1/2 rounded-full bg-white opacity-50 absolute
      "
      :class="value && 'is-active'"
    >
    </span>
    <span
      class="w-1/2 w-switch--label label--left"
      :class="value ? 'is-active' : 'is-inactive'"
    >
      <span class="text-center">{{ offLabel }}</span>
    </span>
    <span
      class="w-1/2 w-switch--label label--right text-center"
      :class="value ? 'is-inactive' : 'is-active'"
    >
      <span class="text-center">{{ onLabel }}</span>
    </span>
    <input
      ref="checkbox"
      hidden
      type="checkbox"
      v-model="inputVal"
    />
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    offLabel: String,
    onLabel: String,
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    clickHandler() {
      this.$refs.checkbox.checked = true;
      this.inputVal = !this.inputVal;
    },
  },
  watch: {
    value() {
      this.$emit('change', this.value);
    },
  },
};
</script>
