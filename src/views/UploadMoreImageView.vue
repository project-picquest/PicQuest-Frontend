<template>
  <div class="container">
    <div class="image-container">
      <img :src="attractionInfo.firstImage1 ? attractionInfo.firstImage1 : noImage" />
    </div>

    <div class="main-container">
      <div class="info-container">
        <div class="title-box">
          <p>{{ attractionInfo.title }}</p>
          <p>{{ attractionInfo.addr1 }} {{ attractionInfo.addr2 }}</p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="form-container">
        <div class="picture-container">
          <div @click="handleClick" class="picture-input-box">
            <input
              type="file"
              ref="inputRef"
              @change="handleFileUpload"
              accept="image/*"
            />
            <img
              v-show="uploadedImageUrl"
              class="uploaded-image"
              :src="uploadedImageUrl"
              alt=""
            />
            <div v-show="!uploadedImageUrl">
              <i data-feather="plus" class="icon"></i>
            </div>
          </div>
        </div>
        <button @click="navigateMap" class="submit-button">사진 등록하기</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import feather from "feather-icons";
import { _getAttractionDetail, _postAddPhoto } from "@/api";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const attractionNum = route.params.id;
const uploadedImageUrl = ref(null);
const inputRef = ref(null);

const attractionInfo = ref({
  no: 0,
  title: "",
  firstImage1: "",
  addr1: "",
  addr2: "",
  additionalPhotos: [
    "http://tong.visitkorea.or.kr/cms/resource/09/3303909_image2_1.jpg",
    "http://tong.visitkorea.or.kr/cms/resource/09/3303909_image2_1.jpg",
    "http://tong.visitkorea.or.kr/cms/resource/09/3303909_image2_1.jpg",
    "http://tong.visitkorea.or.kr/cms/resource/09/3303909_image2_1.jpg",
  ],
});

onMounted(() => {
  feather.replace();
  // TODO: api 연동 후 주석 삭제
  getAttractionInfo();
  window.scrollTo(0, document.documentElement.scrollHeight);
});

const isFileImage = (file) => {
  return file && file.type.split("/")[0] === "image";
};

const handleClick = () => {
  inputRef.value.click();
};

const handleFileUpload = (e) => {
  const $input = e.target;
  const file = $input.files[0];
  if (!isFileImage(file)) {
    // TODO: 실행 순서 이상함
    alert("이미지만 업로드 가능합니다.");
    $input.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    uploadedImageUrl.value = reader.result;
  };
  reader.readAsDataURL(file);
  console.log(uploadedImageUrl.value);
};

const getAttractionInfo = () => {
  _getAttractionDetail(
    attractionNum,
    (response) => {
      attractionInfo.value = response.data;
    },
    (error) => {
      console.error("_getAttractionDetail API 요청 실패", error);
    }
  );
};

const handleSubmit = () => {
  const formData = new FormData();
  formData.append("attractionNo", JSON.stringify(attractionNum));

  const addImageToFormData = (imageUrl, formData, fieldName) => {
    return fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], fieldName + ".jpg", {
          type: "image/jpeg",
        });
        formData.append(fieldName, file);
      })
      .catch((error) => {
        console.error("이미지 로드 실패:", error);
      });
  };

  addImageToFormData(uploadedImageUrl.value, formData, "image").then(() => {
    _postAddPhoto(
      formData,
      (response) => {
        console.log("사진 더보기 추가");
        console.log(response.data);
        router.push(`/attraction/${attractionNum}`);
      },
      (error) => {
        console.error(error);
      }
    );
  });
};
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
  border-radius: 1rem;
  overflow: hidden;
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

.form-container {
  display: flex;
  flex-direction: column;
  width: 38rem;
  height: 100%;
  /* background-color: blue; */
  /* flex-grow: 1; */
  /* margin-top: 2rem; */
  /* margin-bottom: 2rem; */
}

.picture-container {
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  margin-top: 2rem;
  margin-bottom: 1rem;
  /* background-color: red; */
}

.picture-input-container {
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  justify-content: start;
  gap: 0.9rem;
  width: 37rem;
  /* background-color: green; */
}

.picture-input-box {
  /* flex-grow: 1; */
  width: 31.7%;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  border: 2px solid #d9d9d9;
  /* background-color: yellow; */
  /* margin-left: 0.5rem; */
  overflow: hidden;
}
.additional-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-container {
  width: 38rem;
  display: flex;
}

.more-pictures-box {
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}

.more-pictures-box span {
  font-size: 1.1rem;
  font-weight: 700;
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
  stroke: #d9d9d9;
}
</style>
