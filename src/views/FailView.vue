<template>
  <div class="container">
    <div class="message-container">
      <p>앗!</p>
      <p>입력한 관광지 정보가</p>
      <p>일치하지 않아요</p>
    </div>
    <div>
      <ImageSlider
        :title="questInfo.attractionName"
        :image="questInfo.img"
        :score="questInfo.similarity"
      />
    </div>
    <button @click="navigateQuest(id)" class="submit-button">재도전하기</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import ImageSlider from '@/components/ImageSlider.vue';
import { onMounted, ref } from 'vue';
import { useQuestState } from '@/stores/questState';
import { _getQuestDetail } from '@/api';

const route = useRoute();
const router = useRouter();
const questId = route.params.id;

// TODO: API 연동되면 빈 문자열로 변경
const questInfo = ref({
  id: 0,
  date: '',
  attractionName: '',
  img: '',
  similarity: 0,
});

onMounted(() => {
  // TODO: API 연동되면 주석 해제
  getQuestInfo();
});

const getQuestInfo = () => {
  _getQuestDetail(
    questId,
    (response) => {
      questInfo.value = { ...response.data, attractionName: '', similarity: 0 };
      const questState = useQuestState();
      const questSimilarity = questState.questSimilarity;
      const questAttractionName = questState.questAttractionName;
      questInfo.value = {
        ...questInfo.value,
        attractionName: questAttractionName,
        similarity: questSimilarity,
      };
    },
    (error) => {
      console.error('_getQuestDetail API 실패', error);
    }
  );
};
const navigateQuest = (id) => {
  router.push(`/quest/${id}`);
  console.log('클릭');
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
  margin-bottom: 1.5rem;
  /* background-color: beige; */
}

.message-container :nth-child(1) {
  font-size: 4.5rem;
  font-weight: 700;
  transform: rotate(-10deg);
}
.message-container :nth-child(2) {
  font-size: 1.2rem;
  font-weight: 600;
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
