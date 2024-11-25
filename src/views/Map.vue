<script setup>
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import { ref } from "vue";
import { useAttractionState } from "@/stores/attractionState";

const attractionState = useAttractionState();
const lat = ref(attractionState.lat);
const lng = ref(attractionState.lng);
const map = ref();

const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;
};
</script>

<template>
  <div class="container">
    <KakaoMap :lat="lat" :lng="lng" @onLoadKakaoMap="onLoadKakaoMap" height="100%">
      <KakaoMapMarker :lat="lat" :lng="lng">
        <template v-slot:infoWindow
          ><div>{{ attractionState.title }}</div></template
        >
      </KakaoMapMarker>
    </KakaoMap>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
}

</style>
