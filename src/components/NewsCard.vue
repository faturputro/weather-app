<template>
  <div class="bg-white shadow-xl rounded-2xl w-full overflow-hidden h-96">
    <figure class="h-full">
      <div class="news-image--container h-1/2 w-full overflow-hidden">
        <img :src="details.src" :alt="details.title" />
      </div>
      <figcaption class="flex flex-col justify-between w-full h-1/2 p-8 bg-white">
        <h4 class="font-semibold text-2xl">
          {{ details.title }}
        </h4>
        <div class="flex justify-between items-center">
          <small class="inline-block text-xs text-gray-300">
            {{ details.created }}
          </small>
          <small class="inline-block text-xs">
            {{ details.authorName }}
          </small>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>
