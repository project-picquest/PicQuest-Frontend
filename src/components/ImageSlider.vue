<template>
  <div class="container">
    <div class="left-container">
      <div class="image-container">
        <img :src="props.image" />
      </div>
    </div>
    <div class="center-container">
      <div class="text-box">
        <span>{{ props.title }}</span>
        <span>에 대한 유사도 검사</span>
      </div>
      <div>
        <div class="root-bar">
          <div class="level-bar" :style="{ width: `${widthByScore}%` }"></div>
        </div>
      </div>
    </div>
    <div class="right-container">
      <span>{{ props.score }}%</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  title: String,
  image: String,
  score: Number,
});

const widthByScore = ref(0);

onMounted(() => {
  setTimeout(() => {
    widthByScore.value = props.score;
  }, 50);
});

watch(
  () => props.score,
  (newScore) => {
    widthByScore.value = newScore;
  }
);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row !important;
  width: 33rem;
  height: 6rem;
  gap: 1.2rem;
  /* background-color: red; */
}

.left-container {
  display: flex;
  align-items: center;
  width: 5rem;
  height: 100%;
  /* background-color: green; */
}

.image-container {
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.12);
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  height: 6rem;
  /* background-color: blue; */
}

.root-bar {
  position: relative;
  width: 100%;
  height: 0.5rem;
  background-color: #d9d9d9;
  border-radius: 3px;
}

.level-bar {
  position: absolute;
  height: 0.5rem;
  background-color: #f74320;
  border-radius: 3px;
  transition: width 1.5s ease-out;
}

.text-box {
  margin-bottom: 0.3rem;
}

.text-box :nth-child(1) {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f74320;
}

.text-box :nth-child(2) {
  font-size: 1.1rem;
  font-weight: 700;
}

.right-container {
  position: relative;
  align-items: center;
  width: 2.5rem;
  height: 100%;
  /* background-color: yellow; */
}

.right-container span {
  position: absolute;
  top: 3.2rem;
  font-weight: 700;
  color: #f74320;
}
</style>
