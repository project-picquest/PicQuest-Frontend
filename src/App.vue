<template>
  <div class="app-container">
    <Splash v-if="isFirstVisit" />

    <div v-else class="app-box">
      <TopNavigator />
      <router-view></router-view>
      <div class="help-box" @mouseover="showManual" @mouseleave="hideManual">
        <i data-feather="help-circle" class="icon"></i>
      </div>
      <Manual v-if="isHover" />
      <BottomNavigator />
    </div>
  </div>
</template>

<script setup>
import BottomNavigator from './components/common/BottomNavigator.vue';
import TopNavigator from './components/common/TopNavigator.vue';
import Manual from './components/Manual.vue';
import Splash from './components/Splash.vue';
import feather from 'feather-icons';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isHover = ref(false);

const showManual = () => {
  isHover.value = true;
};

const hideManual = () => {
  isHover.value = false;
};

const isFirstVisit = ref(true);

onMounted(() => {
  feather.replace();
  // if (localStorage.getItem('hasVisited')) {
  //   isFirstVisit.value = false;
  // } else {
  //   localStorage.setItem('hasVisited', true);
  // }
  setTimeout(() => {
    isFirstVisit.value = false;
  }, 2500); // 2초 후에 Splash 숨기기
});

onBeforeUnmount(() => {
  localStorage.setItem('hasVisited', false);
});
</script>
<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
}
.app-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 42rem;
  height: 100vh;
  background-color: white;
}

.help-box {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  right: 2rem;
  bottom: 6rem;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #e9e9e9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 999;
}

.icon {
  width: 1.8rem;
  height: 1.8rem;
  stroke-width: 1.8px;
  stroke: #aaaaaa;
}
</style>
