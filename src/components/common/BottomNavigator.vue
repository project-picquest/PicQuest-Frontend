<template>
  <div class="container">
    <div class="icon-container" @click="navigateHome" :class="{'active-hm' : currentPath[1] === 'home'}">
      <i data-feather="home" class="icon"></i>
      <p>홈</p>
    </div>
    <div>
      <div class="icon-container" @click="navigateQuest" :class="{'active-qp' : currentPath[1] === 'quest'}">
        <i data-feather="star" class="icon"></i>
        <p>일일 퀘스트</p>
      </div>
    </div>
    <div>
      <div class="icon-container" @click="navigateMap" :class="{'active-hm' : currentPath[1] === 'map'}">
        <i data-feather="map-pin" class="icon"></i>
        <p>지도</p>
      </div>
    </div>
    <div>
      <div class="icon-container" @click="navigateProfile" :class="{'active-qp' : currentPath[1] === 'profile'}">
        <i data-feather="user" class="icon"></i>
        <p>나의 정보</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import feather from "feather-icons";
import { onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useLoginState } from "@/stores/loginState";

const router = useRouter();
const route = useRoute();
const currentPath = ref("");
const loginState = useLoginState();

const navigateHome = () => {
  router.push("/home");
};
const navigateQuest = () => {
  router.push("/quest/1");
};
const navigateMap = () => {
  router.push('/map')
};
const navigateProfile = () => {
  router.push(`/profile/${loginState.email}`);
};

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath.split("/");
  },
  { immediate: true }
);

onMounted(() => {
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

.icon-container.active-qp .icon{
    fill: #2b3d4f;
}
.icon-container.active-hm .icon{
    stroke-width: 1px;
    stroke: #ffffff;
    fill: #2b3d4f;
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
