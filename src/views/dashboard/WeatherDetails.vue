<template>
  <div>
    <div
      class="weather-details--card rounded-bl-xl rounded-br-xl pt-8 text-white"
    >
      <div class="w-1/3 mx-auto mb-8">
        <w-switch
          v-model="isCelcius"
          on-label="Celcius"
          off-label="Fahrenheit"
          @change="changeHandler"
        ></w-switch>
      </div>
      <div class="w-1/3 mx-auto">
        <img src="@/assets/images/cloud.png" alt="">
      </div>
      <h1 class="text-6xl text-center mb-8">
        {{ details.main.temp }}&deg;
      </h1>
      <p class="text-center text-xl">
        {{ details.coord.lat }}, {{ details.coord.lon }}
      </p>
      <h3 class="text-5xl text-center my-8 font-semibold">
        {{ details.weather[0].main }}
      </h3>
      <p class="text-center text-xl">
        {{ currentDate }}
      </p>
    </div>
    <section class="s-detail mx-6 mt-6">
      <p class="text-lg mb-4">Details</p>
      <div class="grid grid-cols-2 gap-2">
        <div class="rounded-2xl px-4 flex items-center bg-gray-100 p-6">
          <h1 class="text-6xl flex items-center p-2 mr-2">
            <eva-icon name="thermometer-outline" fill="#3C6FD1"></eva-icon>
          </h1>
          <div>
            <p class="text-3xl">{{ details.main.temp }}&deg;</p>
            <p class="text-lg opacity-75">
              {{ isCelcius ? 'Celcius' : 'Fahrenheit' }}
            </p>
          </div>
        </div>
        <div class="rounded-2xl px-4 flex items-center bg-gray-100 p-6">
          <h1 class="text-6xl flex items-center p-2 mr-2">
            <eva-icon name="arrowhead-right-outline" fill="#3C6FD1"></eva-icon>
          </h1>
          <div>
            <p class="text-3xl">{{ details.wind.speed }} mp/h</p>
            <p class="text-lg opacity-75">
              Pressure
            </p>
          </div>
        </div>
        <div class="rounded-2xl px-4 flex items-center bg-gray-100 p-6">
          <h1 class="text-6xl flex items-center p-2 mr-2">
            <eva-icon name="sun-outline" fill="#3C6FD1"></eva-icon>
          </h1>
          <div>
            <p class="text-3xl">{{ details.main.feels_like }}</p>
            <p class="text-lg opacity-75">
              UV Index
            </p>
          </div>
        </div>
        <div class="rounded-2xl px-4 flex items-center bg-gray-100 p-6">
          <h1 class="text-6xl flex items-center p-2 mr-2">
            <eva-icon name="droplet-outline" fill="#3C6FD1"></eva-icon>
          </h1>
          <div>
            <p class="text-3xl">{{ details.main.humidity }}%</p>
            <p class="text-lg opacity-75">
              Humidity
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="s-detail mx-6 mt-6">
      <p class="text-lg mb-4">Tips</p>
      <div class="rounded-2xl px-4 flex items-center bg-gray-100 p-6">
        <h1 class="text-5xl flex items-center p-2 mr-2">
          &#10024;
        </h1>
        <div>
          <p class="text-2xl">Its ok to hangout with your friend!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WeatherAPI from '@/services';

export default {
  data() {
    return {
      isCelcius: false,
      details: {
        name: '',
        coord: {
          lon: 0,
          lat: 0,
        },
        main: {
          temp: 0,
        },
        wind: {
          speed: 0,
        },
        weather: [],
      },
    };
  },
  computed: {
    ...mapGetters('geolocation', ['currentLocation']),
    currentDate() {
      return new Date();
    },
  },
  created() {
    this.fetchWeatherData();
  },
  methods: {
    changeHandler(e) {
      this.isCelcius = e;
      this.fetchWeatherData();
    },
    async fetchWeatherData() {
      try {
        const params = {
          lat: this.currentLocation.lat,
          lon: this.currentLocation.long,
          units: this.isCelcius ? 'metrics' : 'imperial',
        };
        this.details = await WeatherAPI.fetchWeather(params);
      } catch (e) {
        //
      }
    },
  },
};
</script>
