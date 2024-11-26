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
      <div class="picture-container">
        <div class="more-pictures-box">
          <span v-show="attractionInfo.additionalPhotos?.length > 0" class="more-pictures">사진 더보기</span>
        </div>

        <!-- TODO: 슬라이더로 교체 -->
        <div class="picture-input-container">
          <div
            v-for="(photo, index) in attractionInfo.additionalPhotos"
            :key="index"
            class="picture-input-box"
          >
            <!-- TODO: 스타일 수정 -->
            <img :src="photo" :alt="'photo-' + index" class="additional-photo" />
          </div>
        </div>
      </div>

      <button @click="navigateMap" class="submit-button">지도에서 보기</button>
    </div>
  </div>
</template>

<script setup>
import noImage from "@/assets/no-image.jpg";
import { _getAttractionDetail } from "@/api";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useAttractionState } from "@/stores/attractionState";

const route = useRoute();
const router = useRouter();
const attractionState = useAttractionState();
const attractionNum = route.params.id;

// TODO: api 연동 후 빈 문자열로 변경
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
  // TODO: api 연동 후 주석 삭제
  getAttractionInfo();
});

const getAttractionInfo = () => {
  _getAttractionDetail(
    attractionNum,
    (response) => {
      attractionInfo.value = response.data;
      console.log(response.data);
      attractionState.setAttractionState(response.data.title, response.data.latitude, response.data.longitude);
    },
    (error) => {
      console.error("_getAttractionDetail API 요청 실패", error);
    }
  );
};

const navigateMap = () => {
  router.push('/map');
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
</style>
