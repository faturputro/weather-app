<template>
  <div class="w-full h-full">
    <div
      class="search--bar py-6 z-30 w-full px-6 shadow-lg"
      :class="!isSearchVisible && 'is-hidden'"
    >
      <w-input
        v-model="searchValue"
        placeholder="Search cities"
        @submit="searchCity"
      ></w-input>
    </div>
    <w-map
      ref="map"
      :lat="currentLat"
      :long="currentLon"
      @markerClicked="toggleSearchBar"
      @mapClicked="toggleSearchBar"
      @mapDragStart="isSearchVisible = false"
      @mapDragEnd="isSearchVisible = true"
    ></w-map>
    <div
      v-if="isSnackbarVisible"
      class="
        snackbar--bottom absolute bottom-0 z-30 w-full bg-white rounded-tl-2xl rounded-tr-2xl py-4"
      :class="!isSearchVisible && 'is-hidden'"
    >
      <div class="mx-6">
        <div class="flex justify-between items-center pb-4">
          <div class="flex items-center">
            <h4 class="text-xl mr-4">
              <eva-icon name="pin" fill="#363B64"></eva-icon>
            </h4>
            <div>
              <h5 class="text-xl font-semibold">{{ searchRes.name }}</h5>
              <p class="text-sm text-gray-400 font-light">Indonesia</p>
            </div>
          </div>
          <div>
            <h5 class="text-2xl">{{ searchRes.main.temp }}&deg;</h5>
          </div>
        </div>
        <hr />
        <div class="flex justify-between items-center py-4">
          <div>
            <p class="text-sm text-gray-400 font-light">Longitude and Latitude</p>
            <h5 class="text-lg font-semibold">
              {{ searchRes.coord.lon }}, {{ searchRes.coord.lat }}
            </h5>
          </div>
          <div>
            <p class="text-sm text-gray-400 font-light">{{ searchRes.weather[0].main }}</p>
            <h5 class="text-lg font-semibold">{{ searchRes.wind.speed }} mp/h</h5>
          </div>
        </div>
        <hr />
        <div class="pt-6">
          <w-button>Change Location</w-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WeatherAPI from '@/services';

export default {
  data() {
    return {
      searchValue: '',
      isSnackbarVisible: false,
      isSearchVisible: true,
      searchRes: {
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
    currentLat() {
      return this.isSnackbarVisible ? this.searchRes.coord.lat : this.currentLocation.lat;
    },
    currentLon() {
      return this.isSnackbarVisible ? this.searchRes.coord.lon : this.currentLocation.long;
    },
  },
  mounted() {
    if (this.$route.query.q && this.$route.query.q !== '') {
      this.searchValue = this.$route.query?.q;
      this.searchCity();
      this.$refs.map.recenter();
    }
  },
  methods: {
    toggleSearchBar() {
      this.isSearchVisible = !this.isSearchVisible;
    },
    async searchCity() {
      if (this.searchValue !== '') {
        try {
          const params = {
            q: this.searchValue,
            units: 'metric',
          };
          this.searchRes = await WeatherAPI.fetchWeather(params);
          this.isSnackbarVisible = true;
          this.$router.push({
            name: 'Search',
            query: {
              q: this.searchValue,
            },
          }).catch(() => {});
        } catch (e) {
          //
        }
      }
    },
  },
};
</script>
