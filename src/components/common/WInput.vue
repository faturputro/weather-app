<template>
  <input
    :type="type"
    v-model="inputVal"
    :placeholder="placeholder"
    @keyup.enter="$emit('submit')"
    class="py-3 px-6 border-0 rounded-full outline-none w-full shadow-md"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
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
};
</script>
