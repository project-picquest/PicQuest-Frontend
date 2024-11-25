import { defineStore } from 'pinia';

export const useAttractionState = defineStore('attractionState', {
  state: () => ({
    title: '',
    lat: 0,
    lng: 0,
  }),
  actions: {
    setAttractionState(title, lat, lng) {
      this.title = title;
      this.lat = lat;
      this.lng = lng;
    },
  },
  persist: true,
});
