<template>
  <div class="container">
    <div class="quest-container">
      <div class="title-box">
        <span>일일 퀘스트</span>
      </div>
      <Carousel />
    </div>
    <div class="search-container">
      <div class="title-box">
        <span>여행지를 검색해보세요</span>
      </div>
      <div class="input-container">
        <div class="input-box">
          <input
            class="attraction-input"
            type="email"
            id="email"
            v-model="email"
            placeholder="abc@picquest.co.kr"
          />
          <i data-feather="search" class="icon"></i>
          <button>검색</button>
        </div>
      </div>

      <div class="card-container">
        <div class="image-grid">
          <div class="image-item" v-for="(image, index) in images" :key="index">
            <img :src="image" alt="image" class="image" />
            <div class="image-overlay">
              <div class="overlay-text title">석굴암</div>
              <div class="overlay-text address">경상북도 경주시 불국로 873-243</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Carousel from "@/components/Carousel.vue";
import feather from "feather-icons";
import { onMounted } from "vue";

onMounted(() => {
  feather.replace();
});

const images = [
  "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
  "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
  "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
  "https://cdn.vuetifyjs.com/images/cards/nature.jpg",
  "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
  "https://cdn.vuetifyjs.com/images/cards/road.jpg",
  "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
  "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
  "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
];
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
  margin-top: 1.5rem;
  /* background-color: green; */
}
.container::-webkit-scrollbar {
  display: none;
}

.quest-container {
  /* flex-basis: 50%; */
  flex: 0 1 35%;
  width: 38rem;
  /* background-color: blue; */
}

.title-box {
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start; */
  margin-left: 1.25rem;
  margin-bottom: 0.5rem;
}

.title-box span {
  display: block;
  font-weight: 700;
  font-size: 1rem;
}

.search-container {
  /* flex-grow: 1; */
  /* flex-basis: 50%; */
  display: flex;
  flex-direction: column;
  flex: 1;
  /* align-items: center; */
  width: 38rem;
  margin-top : 2.5rem;
  margin-bottom: 1rem;
  /* background-color: yellow; */
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: blue; */
}

.input-box {
  position: relative;
  display: flex;
  width: 96%;
  gap: 0.75rem;
  /* background-color: red; */
}

.attraction-input {
  flex-grow: 1;
  height: 3.5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding-left: 3.25rem;
}

.input-box button {
  flex-shrink: 0;
  width: 5rem;
  height: 3.5rem;
  background-color: #f74320;
  font-weight: 600;
  color: #ffffff;
  border-radius: 10px;
}

.icon {
  position: absolute;
  left: 1rem;
  top: 1.15rem;
  width: 1.25rem;
  height: 1.25rem;
  stroke: #bebebe;
}

.card-container {
  margin : 1rem 0;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; 
  justify-content: center; 
}

.image-item {
  position: relative;
  width: 30%; 
  height: 200px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden; 
  cursor: pointer;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}


.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0; 
  transition: opacity 0.3s ease; 
}

.image-item:hover .image-overlay {
  opacity: 1; 
}

.overlay-text {
  color: #ffffff;
  text-align: center;
}

.overlay-text.title {
  font-size: 1rem;
  font-weight: 600;
}

.overlay-text.address {
  font-size: 0.75rem;
}
</style>
