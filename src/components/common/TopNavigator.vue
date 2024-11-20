<template>
  <div class="container">
    <div class="left-container">
      <span>PicQuest</span>
    </div>
    <div class="center-container"></div>
    <div class="right-container">
      <button @click="navigateLogin">로그인/회원가입</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const navigateLogin = () => {
  router.push("/login");
};
</script>
<style scoped>
.container {
  display: flex;
  height: 4rem;
  /* background-color: beige; */
  flex-shrink: 0;
  border-bottom: 1px solid #ececec;
  margin: 0 1.5rem;
}

.left-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 25%;
  /* background-color: green; */
}
.center-container {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 50%;
  /* background-color: blue; */
}
.right-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 25%;
  /* background-color: red; */
  cursor: pointer;
}

.right-container button {
  width: 8rem;
  height: 2.25rem;
  border: 1px solid #ececec;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.4rem;
}

.left-container span {
  color: #f74320;
  font-weight: 800;
  font-size: 1.5rem;
}
</style>
