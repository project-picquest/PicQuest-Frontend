<template>
  <div class="container">
    <div class="spinner">
      <div class="loader"></div>
      <div class="loader"></div>
      <div class="loader"></div>
    </div>
    <p class="text" :class="{ fade: isFading }">{{ message }}</p>
    <p class="text"></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const message = ref('유사도를 검사하고 있어요');
const isFading = ref(false);

onMounted(() => {
  setTimeout(() => {
    isFading.value = true;
    setTimeout(() => {
      message.value = '조금만 더 기다려주세요';
      isFading.value = false;
    }, 300);
  }, 700);
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  z-index: 9999;
}

.text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #414141;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.text.fade {
  opacity: 0;
}

.spinner {
  width: 3.5rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.spinner .loader {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background-color: #ececec;
  animation: animloader46 1.2s linear infinite;
}

@keyframes animloader46 {
  0% {
    transform: translateY(0);
    background-color: #949494;
  }
  40% {
    transform: translateY(10px);
    background-color: #ececec;
  }
  60% {
    transform: translateY(0px);
    background-color: #ececec;
  }
  100% {
    transform: translateY(0);
    background-color: #949494;
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
</style>
