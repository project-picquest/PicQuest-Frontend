<template>
  <div class="container">
    <div class="message-container">
      <p>앗!</p>
      <p>입력한 관광지 정보가</p>
      <p>일치하지 않아요</p>
    </div>
    <div>
      <ImageSlider />

    </div>
    <button @click="navigateQuest(id)" class="submit-button">재도전하기</button>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import ImageSlider from "@/components/ImageSlider.vue";

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const navigateQuest = (id) => {
  router.push(`/quest/${id}`)
  console.log('클릭')
}

</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  /* background-color: beige; */
}

.message-container :nth-child(1) {
  font-size: 4.5rem;
  font-weight: 700;
  transform: rotate(-10deg)
}
.message-container :nth-child(2) {
  font-size: 1.2rem;
  font-weight: 600;
}
.message-container :nth-child(3) {
  font-size: 1.2rem;
  font-weight: 600;
}

.submit-button {
  width: 30rem;
  height: 3.5rem;
  background-color: #f74320;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  margin-top: 2.5rem;
}
</style>
