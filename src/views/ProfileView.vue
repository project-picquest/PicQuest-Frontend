<template>
  <div class="view-container">
    <div class="profile-container">
      <div class="top-container">
        <div class="image-container">
          <img src="https://picsum.photos/600/600" />
        </div>
        <div class="userinfo-container">
          <span>🥇🥇🥇</span>
          <p>hellosonic</p>
        </div>
      </div>

      <button class="submit-button">프로필 수정</button>
    </div>
    <div class="level-container">
      <p>여행레벨</p>
      <div>
        <div class="profile-root-bar"><div class="profile-level-bar"></div></div>
      </div>
    </div>
    <div class="quest-container">
      <p>최근 완료한 퀘스트</p>
      <div class="quest-box">
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageSlider from '@/components/ImageSlider.vue'
</script>

<style scoped>
.view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  /* background-color: yellow; */
}

.image-container {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  overflow: hidden;
  margin: auto auto;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35rem;
  height: 18rem;
  gap: 1rem;
  /* background-color: blue; */
}

.top-container {
  display: flex;
  gap: 1.5rem;
}

.userinfo-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* background-color: red;
   */
  justify-content: center;
}

.userinfo-container p {
  font-size: 1.2rem;
  font-weight: 700;
}

.submit-button {
  width: 100%;
  height: 2.8rem;
  background-color: #d9d9d9;
  font-weight: 600;
  /* color: white; */
  border-radius: 10px;
  margin-top: 0.8rem;
}

.level-container {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 35rem;
  height: 8rem;
  /* background-color: blue; */
}

.level-container p {
  font-weight: 700;
  font-size: 1.1rem;
  margin-left: 0.3rem;
}

.profile-root-bar {
  position: relative;
  width: 100%;
  height: 0.8rem;
  background-color: #d9d9d9;
  border-radius: 10px;
}

.profile-level-bar {
  position: absolute;
  width: 77%;
  height: 0.8rem;
  background-color: #f74320;
  border-radius: 10px;
  animation: fillLevel 1.5s ease-out forwards;
}

.quest-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 35rem;
  height: 4rem;
  /* background-color: red; */
}

.quest-container p {
  font-weight: 700;
  font-size: 1.1rem;
  margin-left: 0.3rem;
}

.quest-box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
}

@keyframes fillLevel {
  0% {
    width: 0;
  }
  100% {
    width: 77%;
  }
}
</style>
