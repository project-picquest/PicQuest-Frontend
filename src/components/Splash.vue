<template>
  <div class="container">
    <div class="text-box" :class="{ visible: isVisible }">
      <p class="text">PicQuest</p>
      <!-- <p class="slogun">여행의 순간을 담다</p> -->
    </div>
    <!-- <div class="spinner-box">
      <div class="spinner-container">
        <div class="spinner" :class="{ visible: isVisible }">
          <div class="loader"></div>
          <div class="loader"></div>
          <div class="loader"></div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// visible 상태를 위한 ref
const isVisible = ref(false);

onMounted(() => {
  // 컴포넌트가 마운트될 때 1초 후에 visible을 true로 설정
  setTimeout(() => {
    isVisible.value = true;
  }, 100); // 0.5초 후에 나타나도록 설정
  setTimeout(() => {
    isVisible.value = false;
  }, 2000); // 1초 후에 사라지도록 설정
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 42rem;
  height: 100vh;
  background-color: #ffffff;
}

.text-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.text-box.visible {
  opacity: 1;
}

.text {
  font-size: 4rem;
  font-weight: 800;
  color: #f74320;
}

.slogun {
  font-size: 1rem;
  font-weight: 600;
}

.spinner-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 0.3em;
}

.spinner-box {
  position: absolute;
  bottom: 8rem;
  width: 100%;
  /* background-color: beige; */
}

.spinner {
  width: 3.2rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  opacity: 0;
  transition: opacity 0.7s ease-in-out;
}

.spinner.visible {
  opacity: 1;
}

.spinner .loader {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #f74320;
  animation: animloader46 1.2s linear infinite;
}

@keyframes animloader46 {
  0% {
    transform: translateY(0);
    background-color: #ff8f8f;
  }
  40% {
    transform: translateY(10px);
    background-color: #f74320;
  }
  60% {
    transform: translateY(0px);
    background-color: #f74320;
  }
  100% {
    transform: translateY(0);
    background-color: #ff8f8f;
  }
}

/* 애니메이션 딜레이 설정 */
.spinner .loader:nth-child(1) {
  animation-delay: 0s;
}

.spinner .loader:nth-child(2) {
  animation-delay: 0.25s;
}

.spinner .loader:nth-child(3) {
  animation-delay: 0.5s;
}

.spinner .loader:nth-child(4) {
  animation-delay: 0.75s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
