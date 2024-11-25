<template>
  <div class="container">
    <Confetti />
    <div class="message-container">
      
      <p>🎉</p>
      <p>축하합니다</p>
      <p>입력한 관광지 정보가 일치해요.</p>
    </div>
    <div>
      <ImageSliderAtResult
        :title="questInfo.attractionName"
        :firstImage="questInfo.img"
        :secondImage="questState.questImage"
        :score="questInfo.similarity"
      />

      <v-divider style="margin: 1.8rem 0"></v-divider>
      <UserSlider :profileImage="userInfo.profileImage" :nickname="userInfo.nickname" :userScore="userInfo.userScore" />
    </div>
    <button @click="navigateProfile" class="submit-button">나의 정보 보러가기</button>
  </div>
</template>
<script setup>
import ImageSlider from "@/components/ImageSlider.vue";
import UserSlider from "@/components/UserSlider.vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useLoginState } from "@/stores/loginState";
import { useQuestState } from "@/stores/questState";
import { onMounted, ref } from "vue";
import { _getQuestDetail, _getUserProfile } from "@/api";
import Confetti from "@/components/Confetti.vue";
import ImageSliderAtResult from "@/components/ImageSliderAtResult.vue";

const route = useRoute();
const router = useRouter();
const loginState = useLoginState();
const questState = useQuestState();
const questId = route.params.id;
// TODO: API 연동되면 빈 문자열로 변경
const questInfo = ref({
  id: 0,
  date: "",
  attractionName: "",
  img: "",
  similarity: 0,
});

const userInfo = ref({ profileImage: "", nickname: '',userScore: 0 });
onMounted(() => {
  // TODO: API 연동되면 주석 해제
  getQuestInfo();
  getUserInfo();
});

const getQuestInfo = () => {
  _getQuestDetail(
    questId,
    (response) => {
      console.log('resultView questInfo', response.data);
      questInfo.value = { ...response.data, attractionName: "", similarity: 0 };
      
      const questSimilarity = questState.questSimilarity;
      const questAttractionName = questState.questAttractionName;
      questInfo.value = {
        ...questInfo.value,
        attractionName: questAttractionName,
        similarity: questSimilarity,
      };
    },
    (error) => {
      console.error("_getQuestDetail API 실패", error);
    }
  );
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
      console.error("_getUserProfile API 실패", error);
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
  z-index: 99;
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
