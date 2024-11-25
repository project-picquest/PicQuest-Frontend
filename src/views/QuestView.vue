<template>
  <div class="container">
    <div class="quest_info-box">
      <span
        >{{ questInfo.date.split('-')[0] }}년
        {{ questInfo.date.split('-')[1] }}월
        {{ questInfo.date.split('-')[2] }}일 오늘의 퀘스트</span
      >
    </div>
    <div class="image-container">
      <img :src="questInfo.img" />
    </div>
    <p class="guide-text">
      위 관광지 사진을 보고 이름과 사진을 제출하여 방문을 인증하세요
    </p>

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
      <button type="submit" class="submit-button">제출하기</button>
    </form>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import feather from 'feather-icons';
import { _getQuestDetail, _postImage } from '@/api';
import { useRoute, useRouter } from 'vue-router';
import { useQuestState } from '@/stores/questState';

// TODO: api 켜지면 빈 문자열로 변경
const questInfo = ref({
  id: 0,
  date: '',
  img: '',
});
const title = ref('');
const uploadedImageUrl = ref(null);
const inputRef = ref(null);
const route = useRoute();
const router = useRouter();
const questId = route.params.id;
const questState = useQuestState();

onMounted(() => {
  feather.replace();
  // TODO: API 연동 후 주석 해제
  getQuestDetail(questId);
});

// API
const getQuestDetail = (questId) => {
  _getQuestDetail(
    questId,
    (response) => {
      questInfo.value = response.data;
    },
    (error) => {
      console.error('_getQuestDetail 요청 실패', error);
    }
  );
};

// FILE UPLOAD
const isFileImage = (file) => {
  return file && file.type.split('/')[0] === 'image';
};

const handleClick = () => {
  inputRef.value.click();
};

const handleFileUpload = (e) => {
  const $input = e.target;
  const file = $input.files[0];
  if (!isFileImage(file)) {
    // TODO: 실행 순서 이상함
    alert('이미지만 업로드 가능합니다.');
    $input.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    uploadedImageUrl.value = reader.result;
  };
  reader.readAsDataURL(file);
  console.log(uploadedImageUrl.value);
};

// SUBMIT, FILE ENCODING
const handleSubmit = () => {
  const requestData = {
    first_image: questInfo.value.img,
    second_image: uploadedImageUrl.value,
  };

  const formData = new FormData();

  const addImageToFormData = (imageUrl, formData, fieldName) => {
    return fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], fieldName + '.jpg', {
          type: 'image/jpeg',
        });
        formData.append(fieldName, file);
      })
      .catch((error) => {
        console.error('이미지 로드 실패:', error);
      });
  };

  addImageToFormData(requestData.first_image, formData, 'first_image')
    .then(() => {
      return addImageToFormData(
        requestData.second_image,
        formData,
        'second_image'
      );
    })
    .then(() => {
      _postImage(
        formData,
        (response) => {
          console.log('파이썬 서버에 전송 성공');
          console.log(response);

          const similarity = Math.floor(response.data.유사도 * 100);
          questState.setQuestInfo(questId, title.value, uploadedImageUrl.value, similarity);

          // TODO: 실제 받는 데이터 활용
          if (response.data.유사도 > 0.9) {
            router.push(`/result/success/${questId}`);
            // 여기서 점수 업데이트 api 
          } else {
            router.push(`/result/fail/${questId}`);
          }
        },
        (error) => {
          console.error('파이썬 서버에 전송 실패', error);
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

.quest_info-box {
  width: 38rem;
  padding-left: 1rem;
  margin-top: 1.5rem;
  /* height: 10rem; */
  /* background-color: yellow; */
}
.quest_info-box span {
  font-size: 1.1rem;
  font-weight: 700;
}

.container::-webkit-scrollbar {
  display: none;
}

.image-container {
  width: 38rem;
  height: 40rem;
  border-radius: 1rem;
  overflow: hidden;
  margin: 1rem 0 0.3rem 0;
  flex-shrink: 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guide-text {
  font-size: 0.75rem;
  font-weight: 400;
  color: #777777;
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
  stroke: #d9d9d9;
}
</style>
