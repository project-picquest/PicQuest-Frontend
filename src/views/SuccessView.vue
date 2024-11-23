<template>
  <div class="container">
    <div class="message-container">
      <p>🎉</p>
      <p>축하합니다</p>
      <p>입력한 관광지 정보가 일치해요.</p>
    </div>
    <div>
      <ImageSlider />

      <v-divider style="margin: 1.8rem 0"></v-divider>
      <UserSlider :nickname="userInfo.nickname" :score="userInfo.score" />
    </div>
    <button @click="navigateProfile" class="submit-button">
      나의 정보 보러가기
    </button>
  </div>
</template>
<script setup>
import ImageSlider from '@/components/ImageSlider.vue';
import UserSlider from '@/components/UserSlider.vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useLoginState } from '@/stores/loginState';
import { useQuestState } from '@/stores/questState';
import { onMounted, ref } from 'vue';
import { _getQuestDetail, _getUserProfile } from '@/api';

const route = useRoute();
const router = useRouter();
const loginState = useLoginState();
const questId = route.params.id;
// TODO: API 연동되면 빈 문자열로 변경
const questInfo = ref({
  id: 1,
  date: '2024-11-23',
  img: 'https://picsum.photos/600/600',
  similarity: 0,
});

const userInfo = ref({ nickname: 'test', score: 70 });
onMounted(() => {
  // TODO: API 연동되면 주석 해제
  // getQuestInfo();
  // getUserInfo();
});

const getQuestInfo = () => {
  _getQuestDetail(
    questId,
    (response) => {
      questInfo.value = { ...response.data, similarity: 0 };
    },
    (error) => {
      console.error('_getQuestDetail API 실패', error);
    }
  );

  const questState = useQuestState();
  const questSimilarity = questState.questSimilarity;
  questInfo.value = { ...questInfo.value, similarity: questSimilarity };
};

const getUserInfo = () => {
  const requestParam = { email: loginState.isLogin ? loginState.email : null };
  // TODO: 등급 post에 대한 회의 필요
  // TODO: 프로필 이미지가 없음 현재

  _getUserProfile(
    loginState.email,
    requestParam,
    (response) => {
      userInfo.value = response.data;
    },
    (error) => {
      console.error('_getUserProfile API 실패', error);
    }
  );
};

const navigateProfile = () => {
  const email = loginState.email;
  router.push(`/profile/${email}`);
};
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
  width: 33rem;
  height: 3.5rem;
  background-color: #f74320;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  margin-top: 2.5rem;
}
</style>
