<template>
  <div v-if="data" class="weather-card p-6 rounded-2xl">
    <p class="text-sm mb-2">Chance of rain</p>
    <h3 class="mb-12 text-4xl font-semibold">{{ data.weather[0].main }}</h3>
    <p class="text-sm flex items-center">
      <eva-icon name="pin" fill="#FFF"></eva-icon>{{ data.name }}
    </p>
    <div class="flex items-center justify-between mt-4">
      <p class="text-xs flex items-center">
        <span class="text-2xl font-semibold mr-1">{{ data.main.temp }}</span>
         &deg;C
      </p>
      <p class="text-xs flex items-center">
        <eva-icon name="droplet-outline" fill="#FFF"></eva-icon> {{ data.main.humidity }}%
      </p>
      <p class="text-xs flex items-center">
        <eva-icon name="sun-outline" outline fill="#FFF"></eva-icon> {{ data.main.feels_like }}
      </p>
      <p class="text-xs flex items-center">
        <eva-icon name="arrowhead-right-outline" outline fill="#FFF"></eva-icon>
        {{ data.wind.speed }} mp/h
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
