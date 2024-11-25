<template>
  <div class="container">
    <div class="left-container">
      <div class="image-container">
        <img :src="props.profileImage" />
      </div>
    </div>
    <div class="center-container">
      <div class="text-box">
        <span>{{ props.nickname }}</span>
      </div>
      <div>
        <div class="root-bar">
          <div class="level-bar" :style="{ width: `${widthByScore}%` }"></div>
        </div>
      </div>
    </div>
    <div class="right-container">
      <span>{{ props.userScore }}</span>
      <span> (+20)</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  profileImage: String,
  nickname: String,
  userScore: Number,
});

const widthByScore = ref(0);

onMounted(() => {
  setTimeout(() => {
    widthByScore.value = props.userScore;
  }, 50);
});

watch(
  () => props.userScore,
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
  gap: 1.2rem;
}

.left-container {
  width: 5rem;
  /* background-color: green; */
}

.image-container {
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  overflow: hidden;
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

.text-box span {
  font-size: 1.1rem;
  font-weight: 700;
}

.right-container {
  width: 3.5rem;
  /* background-color: red; */
  margin-top: 2rem;
}

.right-container span {
  /* font-size: 1rem; */
  font-weight: 700;
  color: #f74320;
}
</style>
