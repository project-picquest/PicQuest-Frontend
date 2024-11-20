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
  </div>
</template>
<script>
import ImageSlider from "@/components/ImageSlider.vue";
import UserSlider from "@/components/UserSlider.vue";
export default {
  components: {
    ImageSlider,
    UserSlider,
  },
};
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
</style>
