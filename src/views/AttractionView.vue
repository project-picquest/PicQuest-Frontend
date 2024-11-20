<template>
  <div class="container">
    <div class="image-container">
      <img src="https://picsum.photos/600/600" />
    </div>

    <div class="main-container">
      <div class="info-container">
        <div class="title-box">
          <p>석굴암</p>
          <p>경상북도 경주시 불국로 873-243</p>
        </div>
      </div>
      <div class="picture-container">
        <div class="more-pictures-box">
          <span class="more-pictures">사진 더보기</span>
        </div>

        <!-- TODO: 슬라이더로 교체 -->
        <div class="picture-input-container">
          <div class="picture-input-box"></div>
          <div class="picture-input-box"></div>
          <div class="picture-input-box"></div>
        </div>
      </div>

      <button class="submit-button">제출하기</button>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.container {
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
}

.container::-webkit-scrollbar {
  display:none;
}

.image-container {
  width: 38rem;
  height: 40rem;
  border-radius: 2rem; /* 컨테이너 둥글게 */
  overflow: hidden; /* 컨테이너 밖 이미지 잘리도록 설정 */
  margin-top: 1.5rem;
  flex-shrink: 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title-box {
  margin-left: 1rem;
  margin-bottom: 0.3rem;
}

.title-box :nth-child(1) {
  font-weight: 700;
  font-size: 1.2rem;
}
.title-box :nth-child(2) {
  font-weight: 600;
  font-size: 1rem;
}

.submit-button {
  width: 100%;
  height: 3.5rem;
  background-color: #f74320;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  margin-top: 0.8rem;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 38rem;
  height: 100%;
  /* background-color: blue; */
  /* flex-grow: 1; */
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.picture-container {
  flex-grow: 1;
  margin-top: 2rem;
  margin-bottom: 1rem;
  /* background-color: green; */
}

.picture-input-box {
  flex-grow: 1;
  width: 30%;
  padding-top: 30%;
  border-radius: 1rem;
  border: 2px solid #d9d9d9;
  /* background-color: yellow; */
  margin-left: 0.5rem;
}

.info-container {
  width: 38rem;
  display: flex;
}

.picture-input-container {
  display: flex;
  gap: 0.5rem;
}

.more-pictures-box {
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}

.more-pictures-box span {
  font-size: 1.1rem;
  font-weight: 700;
}
</style>
