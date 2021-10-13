import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class MapboxInstance {
  constructor(long, lat) {
    this.mapbox = new mapboxgl.Map({
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/light-v10',
      zoom: 5,
    });
    this.currentPosition = [long, lat];
    this.marker = new mapboxgl.Marker().setLngLat(this.currentPosition).addTo(this.mapbox);
    // this.getCurrentPosition();
  }

  updateCurrentPosition(lat, long) {
    this.currentPosition = [long, lat];
  }

  getCurrentPosition() {
    this.mapbox.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: false,
      showUserHeading: false,
    }));
  }
}
