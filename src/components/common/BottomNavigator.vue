<template>
  <div class="container">
    <div class="icon-container" @click="navigateHome">
      <i data-feather="home" class="icon"></i>
      <p>홈</p>
    </div>
    <div>
      <div class="icon-container" @click="navigateQuest">
        <i data-feather="star" class="icon"></i>
        <p>일일 퀘스트</p>
      </div>
    </div>
    <div>
      <div class="icon-container" @click="navigateMap">
        <i data-feather="map-pin" class="icon"></i>
        <p>지도</p>
      </div>
    </div>
    <div>
      <div class="icon-container" @click="navigateProfile">
        <i data-feather="user" class="icon"></i>
        <p>나의 정보</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import feather from "feather-icons";
import { onMounted } from "vue";
import {useRouter} from "vue-router"

const router = useRouter();

const navigateHome = () => {
    router.push('/');
}
const navigateQuest = () => {
    router.push('/quest/1');
}
const navigateMap = () => {
    alert('추가 예정인 기능입니다.')
}
const navigateProfile = () => {
    router.push('/profile/hellosonic')
}

onMounted(() => {
  // 컴포넌트가 마운트된 후에 아이콘을 SVG로 변환
  feather.replace();
});
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  flex-shrink: 0;
  border-top: 1px solid #ececec;
  margin: 0 1.5rem;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  /* background-color: blue; */
}

.icon-container p {
  font-size: 0.75rem;
  font-weight: 600;
}

.icon {
  width: 1.8rem;
  height: 1.8rem;
  stroke-width: 1.5px;
}
</style>
