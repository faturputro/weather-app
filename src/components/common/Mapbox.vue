<template>
  <div id="mapContainer" style="width:100%;height:100%;"></div>
</template>

<script>
import Mapbox from '@/utils/mapbox';

export default {
  data() {
    return {
      mapbox: null,
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.mapbox = new Mapbox(coords.longitude, coords.latitude);
      this.mapbox.getCurrentPosition();
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
    });
    // this.$nextTick(() => {
    //   this.mapbox.getCurrentPosition();
    // });
  },
  watch: {
    mapbox() {
      console.log('something');
    },
  },
};
</script>

<style>
  #mapContainer {
    width: 100%;
  }
</style>
