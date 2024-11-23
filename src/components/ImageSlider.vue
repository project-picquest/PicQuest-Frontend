<template>
  <div class="container">
    <div class="left-container">
      <div class="image-container">
        <img :src="props.image" />
      </div>
    </div>
    <div class="center-container">
      <div class="text-box">
        <span>{{ props.title }}</span>
        <span>에 대한 유사도 검사</span>
      </div>
      <div>
        <div class="root-bar"><div class="level-bar"></div></div>
      </div>
    </div>
    <div class="right-container">
      <span>{{ props.score }}%</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  score: Number,
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row !important;
  width: 33rem;
  height: 6rem;
  gap: 1.2rem;
  /* background-color: red; */
}

.left-container {
  display: flex;
  align-items: center;
  width: 5rem;
  height: 100%;
  /* background-color: green; */
}

.image-container {
  width: 5rem;
  height: 5rem;
  border-radius: 1rem; /* 컨테이너 둥글게 */
  overflow: hidden; /* 컨테이너 밖 이미지 잘리도록 설정 */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  height: 6rem;
  /* background-color: blue; */
}

.root-bar {
  position: relative;
  width: 100%;
  height: 0.5rem;
  background-color: #d9d9d9;
  border-radius: 3px;
}

.level-bar {
  position: absolute;

  /* width: 10rem; */
  width: 77%;
  height: 0.5rem;
  background-color: #f74320;
  border-radius: 3px;
  animation: fillLevel 1.5s ease-out forwards;
}

.text-box {
  margin-bottom: 0.3rem;
}

.text-box :nth-child(1) {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f74320;
}

.text-box :nth-child(2) {
  font-size: 1.1rem;
  font-weight: 700;
}

.right-container {
  position: relative;
  align-items: center;
  width: 2.5rem;
  height: 100%;
  /* background-color: yellow; */
}

.right-container span {
  position: absolute;
  top: 3.2rem;
  font-weight: 700;
  color: #f74320;
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
