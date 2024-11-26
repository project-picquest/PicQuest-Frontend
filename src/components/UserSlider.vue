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
        <div style="display:flex; align-items: center; margin-top: 0.1rem; margin-left: 0.3rem;"><img class="star-image" :src="star" alt="star"></div>
      </div>
      <div>
        <div class="root-bar">
          <div class="level-bar" :style="{ width: `${widthByScore}%` }"></div>
        </div>
      </div>
    </div>
    <div class="right-container">
      <span>{{ props.userScore % 100 }}</span>
      <span> (+{{ Math.floor(questState.questSimilarity * 0.2) }})</span>
      <!-- <span>{{ props.userScore % 100}} / 100</span> -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useQuestState } from "@/stores/questState";
import star1 from "@/assets/star/star1.png";
import star2 from "@/assets/star/star2.png";
import star3 from "@/assets/star/star3.png";

const props = defineProps({
  profileImage: String,
  nickname: String,
  userScore: Number,
});
const questState = useQuestState();
const widthByScore = ref(0);
const star = ref('');

onMounted(() => {
  setTimeout(() => {
    widthByScore.value = props.userScore  % 100 ;
  }, 50);
});

watch(
  () => props.userScore,
  (newScore) => {
    widthByScore.value = newScore % 100;
    if (newScore > 200) {
  star.value = star3;
} else if (newScore > 1) {
  star.value = star2;
} else {
  star.value = star1;
}
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
  display: flex;
  align-items: center;
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

.star-image {
  width: 4rem;
}
</style>
