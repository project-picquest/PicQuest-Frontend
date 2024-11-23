<template>
  <div class="container">
    <div class="image-container">
      <img
        :src="attractionInfo.firstImage1 ? attractionInfo.firstImage1 : noImage"
      />
    </div>

    <div class="main-container">
      <div class="info-container">
        <div class="title-box">
          <p>{{ attractionInfo.title }}</p>
          <p>{{ attractionInfo.add1 }} {{ attractionInfo.add2 }}</p>
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

      <!-- <button class="submit-button">제출하기</button> -->
    </div>
  </div>
</template>

<!-- {
  "no": 3818,
  "title": "가회동성당",
  "firstImage1": "http://tong.visitkorea.or.kr/cms/resource/09/3303909_image2_1.jpg",
  "addr1": "서울특별시 종로구 북촌로 57 (가회동)",
  "addr2": ""
}, -->

<script setup>
import noImage from '@/assets/no-image.jpg';
import { _getAttractionDetail } from '@/api';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const attractionNum = route.params.id;

// TODO: api 연동 후 빈 문자열로 변경
const attractionInfo = ref({
  no: 1,
  title: '석굴암',
  firstImage1:
    'http://tong.visitkorea.or.kr/cms/resource/09/3303909_image2_1.jpg',
  add1: '서울특별시 종로구 북촌로 57',
  add2: '(가회동)',
});

onMounted(() => {
  // TODO: api 연동 후 주석 삭제
  // getAttractionInfo();
});

const getAttractionInfo = () => {
  _getAttractionDetail(
    attractionNum,
    (response) => {
      attractionInfo.value = response.data;
    },
    (error) => {
      consoele.error('_getAttractionDetail API 요청 실패', error);
    }
  );
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
