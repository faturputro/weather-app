import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class MapboxInstance {
  constructor(long, lat) {
    this.mapbox = new mapboxgl.Map({
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/light-v10',
      zoom: 15,
    });
    this.currentPosition = [long, lat];
    this.long = long;
    this.lat = lat;

    const el = document.createElement('div');
    el.className = 'marker';

    this.marker = new mapboxgl.Marker(el).setLngLat(this.currentPosition).addTo(this.mapbox);
    this.getCurrentPosition();
  }

  updateCurrentPosition(lat, long) {
    this.currentPosition = [long, lat];
  }

  // createCustomMarker() {
  //   const el = document.createElement('div');
  //   el.className = 'marker';
  //   return el;
  // }

  getCurrentPosition() {
    this.mapbox.setCenter(new mapboxgl.LngLat(this.long, this.lat));
  }
}
