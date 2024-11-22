<template>
  <div class="container">
    <div class="image-container">
      <img src="https://picsum.photos/600/600" />
    </div>

    <form @submit.prevent="handleSubmit" class="main-container">
      <div class="title-container">
        <div class="title-box">
          <span>관광지 이름 입력하기</span>
        </div>
        <div class="input-container">
          <div class="input-box">
            <input
              class="login-input"
              type="text"
              id="title"
              v-model="title"
              placeholder="ex) 석굴암"
            />
          </div>
        </div>
      </div>

      <div class="picture-container">
        <div class="title-box">
          <span>관광지 사진 등록하기</span>
        </div>
        <div @click="handleClick" class="picture-input-box">
          <input
            type="file"
            ref="inputRef"
            @change="handleFileUpload"
            accept="image/*"
          />
          <img v-show="uploadedImageUrl" class="uploaded-image" :src="uploadedImageUrl" alt="" />
          <div v-show="!uploadedImageUrl"><i  data-feather="plus" class="icon"></i></div>
        </div>
      </div>
      <button type="submit" class="submit-button">제출하기</button>
    </form>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import  feather  from "feather-icons";

const title = ref('');
const uploadedImageUrl = ref(null);
const inputRef = ref(null);

onMounted(() => {
  feather.replace();
});

const isFileImage = (file) => {
  return file && file.type.split("/")[0] === "image";
};

const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (!isFileImage(file)) {
    // TODO: 왜 파일만 올라가지
    alert("이미지만 업로드 가능합니다.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    uploadedImageUrl.value = reader.result;
  };
  reader.readAsDataURL(file);

  console.log(uploadedImageUrl.value);
};

const handleClick = () => {
  inputRef.value.click();
}

const handleSubmit = () => {
  const requestData = {
    title : title.value,
    uploadedImageUrl : uploadedImageUrl.value,
  }

  console.log(requestData)
}

</script>
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
  display: none;
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

.title-box {
  margin-left: 1rem;
  margin-bottom: 0.3rem;
}

.title-box span {
  font-weight: 700;
  font-size: 1.1rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 30%;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  border: 2px solid #d9d9d9;
  margin-left: 0.5rem;
  overflow: hidden;
  cursor: pointer;
}

.picture-input-box input {
  display: none;
}

.uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon {
  width: 5rem;
  height: 5rem;
  stroke-width: 0.05rem;
  stroke: #d9d9d9
}
</style>
