<template>
  <div class="container">
    <div class="image-container">
      <img src="https://picsum.photos/600/600" />
    </div>

    <div class="main-container">
      <div class="title-container">
        <div class="title-box">
          <span>관광지 이름 입력하기</span>
        </div>
        <div class="input-container">
          <div class="input-box">
            <input
              class="login-input"
              type="email"
              id="email"
              v-model="email"
              placeholder="abc@picquest.co.kr"
            />
            <button>저장</button>
          </div>
        </div>
      </div>

      <div class="picture-container">
        <div class="title-box">
          <span>관광지 사진 등록하기</span>
        </div>
        <div class="picture-input-box"></div>
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
.image-container {
  width: 38rem;
  height: 40rem;
  border-radius: 2rem; /* 컨테이너 둥글게 */
  overflow: hidden; /* 컨테이너 밖 이미지 잘리도록 설정 */
  margin-top: 2rem;
  flex-shrink: 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.input-container {
  display: flex;
  justify-content: center;
  width: 100%;
  /* background-color: blue; */
}

.input-box {
  display: flex;
  width: 98%;
  gap: 1rem;
  /* background-color: red; */
}

.login-input {
  flex-grow: 1;
  height: 3.5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding-left: 1rem;
}

.input-box button {
  flex-shrink: 0;
  width: 5rem;
  height: 3.5rem;
  background-color: #696969;
  font-weight: 600;
  color: white;
  border-radius: 10px;
}

.title-container {
  /* background-color: green; */
  /* flex-grow: 1; */
}

.title-box {
  margin-left: 1rem;
  margin-bottom: 0.3rem;
}

.title-box span {
  font-weight: 700;
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
}


.picture-input-box {
  flex-grow: 1;
  width: 30%;
  padding-top: 30%;
  border-radius: 1rem;
  border: 2px solid #d9d9d9;
  /* background-color: yellow; */
  margin-left : 0.5rem;
}
</style>
