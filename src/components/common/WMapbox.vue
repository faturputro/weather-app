<template>
  <div ref="map" id="mapContainer" style="width:100%;height:100%;"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { mapGetters } from 'vuex';

export default {
  props: {
    lat: {
      type: Number,
      default: 0,
    },
    long: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      mapbox: null,
      marker: null,
      currentPosition: [0, 0],
    };
  },
  computed: {
    ...mapGetters('geolocation', ['currentLocation']),
  },
  mounted() {
    this.mapbox = new mapboxgl.Map({
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/light-v10',
      zoom: 15,
    });

    this.mapbox.on('dragstart', this.onDragStart);
    this.mapbox.on('dragend', this.onDragEnd);

    const el = document.createElement('div');
    el.className = 'marker';
    el.addEventListener('click', this.onClickMarker);

    this.$refs.map.addEventListener('click', this.onClickMap);
    this.marker = new mapboxgl.Marker(el);
    this.recenter();
  },
  methods: {
    recenter() {
      this.currentPosition = [this.long, this.lat];
      this.marker.setLngLat(this.currentPosition).addTo(this.mapbox);
      this.mapbox.setCenter(new mapboxgl.LngLat(this.long, this.lat));
    },
    onClickMarker() {
      this.$emit('markerClicked');
    },
    onClickMap() {
      this.$emit('mapClicked');
    },
    onDragStart() {
      this.$emit('mapDragStart');
    },
    onDragEnd() {
      this.$emit('mapDragEnd');
    },
  },
  watch: {
    lat() {
      this.recenter();
    },
    long() {
      this.recenter();
    },
  },
};
</script>

<style>
  #mapContainer {
    width: 100%;
  }
</style>
