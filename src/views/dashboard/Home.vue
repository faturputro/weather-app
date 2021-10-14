<template>
  <div>
    <div class="s-weather--container w-full overflow-scroll">
      <section class="s-weather flex flex-no-wrap mx-4 py-10 w-full">
        <router-link
          :to="`/city/${currentLocation.city}`"
        >
          <weather-card
            :data="weatherDetails"
            class="mr-4"
          ></weather-card>
        </router-link>
        <router-link
          :to="`/city/${currentLocation.city}`"
        >
          <weather-card
            :data="weatherDetails"
            class="mr-4"
          ></weather-card>
        </router-link>
        <router-link
          :to="`/city/${currentLocation.city}`"
        >
          <weather-card
            :data="weatherDetails"
            class="mr-4"
          ></weather-card>
        </router-link>
      </section>
    </div>
    <section class="s-news mx-4 pb-10">
      <h6 class="text-gray-700 text-xl">News</h6>
      <news-card
        v-for="item in news"
        :key="item.id"
        :details="item"
        class="my-4"
      ></news-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WeatherAPI from '@/services';
import WeatherCard from '@/components/WeatherCard.vue';
import NewsCard from '@/components/NewsCard.vue';

export default {
  components: {
    WeatherCard,
    NewsCard,
  },
  data() {
    return {
      weatherDetails: null,
      news: [
        {
          id: 1,
          title: 'Grab Joins Forces with Sejasa.com to Launch ‘Clean & Fix’ Feature',
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
          authorName: 'Reza Media',
          created: '14 October 2021',
        },
        {
          id: 2,
          title: 'Grab Joins Forces with Sejasa.com to Launch ‘Clean & Fix’ Feature',
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
          authorName: 'Reza Media',
          created: '14 October 2021',
        },
        {
          id: 3,
          title: 'Grab Joins Forces with Sejasa.com to Launch ‘Clean & Fix’ Feature',
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
          authorName: 'Reza Media',
          created: '14 October 2021',
        },
        {
          id: 4,
          title: 'Grab Joins Forces with Sejasa.com to Launch ‘Clean & Fix’ Feature',
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
          authorName: 'Reza Media',
          created: '14 October 2021',
        },
      ],
    };
  },
  computed: {
    ...mapGetters('geolocation', ['currentLocation']),
  },
  created() {
    this.fetchWeatherDetails();
  },
  methods: {
    async fetchWeatherDetails() {
      try {
        const params = {
          lat: this.currentLocation.lat,
          lon: this.currentLocation.long,
          units: 'metric',
        };
        const res = await WeatherAPI.fetchWeather(params);
        this.weatherDetails = res;
      } catch (e) {
        // do nothing
      }
    },
  },
};
</script>
