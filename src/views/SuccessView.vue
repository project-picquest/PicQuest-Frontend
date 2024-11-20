<template>
  <div class="container">
    <div class="message-container">
      <p>🎉</p>
      <p>축하합니다</p>
      <p>입력한 관광지 정보가 일치해요.</p>
    </div>
    <div>
        <ImageSlider />
        
        <v-divider style="margin: 1.8rem 0;"></v-divider>
        <UserSlider />
    </div>
    <button class="submit-button">나의 정보 보러가기</button>
    
  </div>
</template>
<script>
    import ImageSlider from '@/components/ImageSlider.vue'
    import UserSlider from '@/components/UserSlider.vue'
    export default {
        components: {
            ImageSlider,
            UserSlider
        }
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
    margin-bottom: 2.5rem;
    /* background-color: beige; */
}
.message-container :nth-child(1) {
    font-size: 2.5rem;
    font-weight: 700;
}
.message-container :nth-child(2) {
    font-size: 3rem;
    font-weight: 700;
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
