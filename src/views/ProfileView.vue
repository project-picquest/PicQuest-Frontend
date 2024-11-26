<template>
  <div class="view-container">
    <div class="profile-container">
      <div class="top-container">
        <div class="image-container">
          <!-- TODO: api 응답 오는 이미지로 수정해야함 -->
          <img :src="userInfo.profileImage ? userInfo.profileImage : defaultProfileImage" />
        </div>
        <div class="userinfo-container">
          <div><img class="star-image" :src="star" alt="star" /></div>
          <span>{{ userInfo.nickname }}</span>
        </div>
      </div>

      <button @click="navigateProfileEdit" class="submit-button">프로필 수정</button>
    </div>
    <div class="level-container">
      <div style="display: flex; flex-direction: row; width: 100%; justify-content: space-between; align-items: center">
        <p>여행레벨</p>
        <div v-show="userInfo.userScore < 300" style="display: flex; margin-top:0.1rem;"><span style="font-size:0.8rem; color: #a2a2a2; margin-right:0.6rem;">다음 등급</span><img class="star-image" :src="nextStar" alt="" /></div>
      </div>

      <div>
        <div class="profile-root-bar">
          <div
            class="profile-level-bar"
            :style="{ width: `${widthByScore % 100}%` }"
          ></div>
        </div>
      </div>
      <div class="score-box">
        <span class="score" :style="{ left: `${(widthByScore % 100) / 3.1}rem` }"
          >{{ userInfo.userScore % 100 }} pt</span
        >
      </div>
    </div>
    <div class="quest-container">
      <p>최근 완료한 퀘스트</p>
      <div
        v-for="(completedQuest, index) in userInfo.completeQuestList"
        :key="index"
        class="quest-box"
      >
        <ImageSlider
          :title="completedQuest.title"
          :image="completedQuest.img"
          :score="completedQuest.questScore"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { _getUserProfile } from "@/api";
import ImageSlider from "@/components/ImageSlider.vue";
import star1 from "@/assets/star/star1.png";
import star2 from "@/assets/star/star2.png";
import star3 from "@/assets/star/star3.png";
import defaultProfileImage from "@/assets/default-profileImage.png";

import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useLoginState } from "@/stores/loginState";
import { onMounted, ref, watch } from "vue";

const route = useRoute();
const router = useRouter();
const email = route.params.email;
const loginState = useLoginState();
// TODO: api연동 후 데이터 프로퍼티에 따라 달라져야 함
const userInfo = ref({
  profileImage: "",
  nickname: "",
  userScore: 0,
  completeQuestList: [],
});

console.log(star1)

const star = ref("");
const nextStar = ref("");
const widthByScore = ref(0);

const setStarImage = () => {
  const score = userInfo.value.userScore;
  if (score >= 200) {
    star.value = star3;
    nextStar.value = '';
  } else if (score >= 100) {
    star.value = star2;
    nextStar.value = star3;
  } else {
    star.value = star1;
    nextStar.value = star2;
  }
};

onMounted(() => {
  // TODO: api 연동 후 주석 해제
  getUserInfo();
});

// TODO: api연동 후 데이터 프로퍼티에 따라 ref 로직 달라질 수 있음
const getUserInfo = () => {
  const requestParam = { email: loginState.isLogin ? loginState.email : null };
  _getUserProfile(
    email,
    requestParam,
    (response) => {
      userInfo.value = response.data;
      setStarImage();
      // TODO: 체크해봐야함
      setTimeout(() => {
        widthByScore.value = response.data.userScore;
      }, 50);
    },
    (error) => {
      console.error("_getUserProfile API 요청 실패", error);
    }
  );
};
watch(
  () => userInfo.value.userScore,
  (newScore) => {
    widthByScore.value = newScore;
  }
);

const navigateProfileEdit = () => {
  router.push("/profile/edit");
};
</script>

<style scoped>
.view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  /* background-color: yellow; */
}

.image-container {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  overflow: hidden;
  margin: auto auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.12);
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35rem;
  height: 18rem;
  gap: 1rem;
  /* background-color: blue; */
}

.top-container {
  display: flex;
  gap: 1.5rem;
}

.userinfo-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* background-color: red;
   */
  justify-content: center;
}

.userinfo-container span {
  font-size: 1.2rem;
  font-weight: 700;
}

.submit-button {
  width: 100%;
  height: 2.8rem;
  background-color: #d9d9d9;
  font-weight: 600;
  /* color: white; */
  border-radius: 10px;
  margin-top: 0.8rem;
}

.level-container {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 35rem;
  height: 8rem;
  /* background-color: blue; */
}

.level-container p {
  font-weight: 700;
  font-size: 1.1rem;
  margin-left: 0.3rem;
}

.profile-root-bar {
  position: relative;
  width: 100%;
  height: 0.8rem;
  background-color: #d9d9d9;
  border-radius: 10px;
}

.profile-level-bar {
  position: absolute;
  /* width: 77%; */
  height: 0.8rem;
  background-color: #f74320;
  border-radius: 10px;
  transition: width 1.5s ease-out forwards;
}

.score-box {
  position: relative;
  width: 100%;
  height: 1rem;
  /* background-color: yellow; */
}

.score {
  position: absolute;
  top: -0.4rem;
  left: 2rem;
  color: #f74320;
  font-weight: 700;
}

.quest-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 35rem;
  height: 4rem;
  /* background-color: red; */
}

.quest-container p {
  font-weight: 700;
  font-size: 1.1rem;
  margin-left: 0.3rem;
}

.quest-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
}

/* @keyframes fillLevel {
  0% {
    width: 0;
  }
  100% {
    width: 77%;
  }
} */

.star-image {
  width: 4rem;
  margin-left: -0.4rem;
}
</style>
