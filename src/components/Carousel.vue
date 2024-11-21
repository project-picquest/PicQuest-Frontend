<template>
  <div class="carousel-container">
    <button @click="prev" class="carousel-button prev">‹</button>

    <div class="carousel">
      <div class="carousel-item" v-for="(image, index) in visibleImages" :key="index">
        <img :src="image" alt="carousel image" class="carousel-image" />
      </div>
    </div>
    <button @click="next" class="carousel-button next">›</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
  "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
  "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
  "https://cdn.vuetifyjs.com/images/cards/nature.jpg",
  "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
]);

const visibleImages = ref(images.value.slice(0, 3));

const currentIndex = ref(0);

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = images.value.length - 3;
  }
  updateVisibleImages();
};

const next = () => {
  if (currentIndex.value < images.value.length - 3) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
  updateVisibleImages();
};

const updateVisibleImages = () => {
  visibleImages.value = images.value.slice(currentIndex.value, currentIndex.value + 3);
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 98%;
  margin: 0 auto;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: transform 1s ease;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 11rem;
  padding: 0 0.5rem;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  border: none;
  padding-bottom: 0.4rem;
  font-size: 1.75rem;
  cursor: pointer;
  z-index: 1; 
  border-radius: 50%;
  width: 2rem;  
  height: 2rem; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.12);
}
.carousel-button.prev {
  left: 0.15rem;
}

.carousel-button.next {
  right: 0.15rem;
}
</style>
