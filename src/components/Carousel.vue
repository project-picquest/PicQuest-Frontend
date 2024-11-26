<template>
  <div class="carousel-container">
    <button v-show="currentIndex !== 0" @click="prev" class="carousel-button prev">‹</button>

    <div class="carousel">
      <div class="carousel-item" v-for="(item, index) in visibleImages" :key="index">
        <div class="item-box">
          <img
            :src="item.img"
            alt="carousel image"
            class="carousel-image"
            @click="handleImageClick(item.idx)"
          />
          <!-- item.completed가 true일 때만 image-overlay를 표시 -->
          <div v-if="item.completed" class="image-overlay">
            <div class="overlay-text">완료한 퀘스트</div>
          </div>
        </div>
      </div>
    </div>
    <button v-show="currentIndex + 3 < data.length" @click="next" class="carousel-button next">›</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
  quests: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits();

const data = ref(props.quests);

const visibleImages = ref(data.value.slice(0, 3));

const currentIndex = ref(0);


const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    console.log(currentIndex)
  } else {
    currentIndex.value = data.value.length - 3;
  }
  updateVisibleImages();
};

const next = () => {
  if (currentIndex.value < data.value.length - 3) {
    currentIndex.value++;
    console.log(currentIndex)
  } else {
    currentIndex.value = 0;
  }
  updateVisibleImages();
};

const updateVisibleImages = () => {
  visibleImages.value = data.value.slice(currentIndex.value, currentIndex.value + 3);
};

const handleImageClick = (item) => {
  emit("onImageClick", item);
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
  aspect-ratio: 1/1;
  margin: 0 0.5rem;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 0.75rem;
  cursor: pointer;
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
  z-index: 999;
}

.carousel-button.next {
  right: 0.15rem;
  z-index: 999;
}

.item-box {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 0.75rem;
  overflow: hidden;

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
  padding: 1rem;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.overlay-text {
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  cursor: default;
}

</style>
