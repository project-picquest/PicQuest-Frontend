<template>
  <div class="container">
    <div class="quest-container">
      <div class="title-box">
        <span>일일 퀘스트</span>
      </div>
      <!-- <Carousel :quests="quests" /> -->

      <!-- completed -->
      <Carousel
        v-if="quests.length > 0"
        :quests="quests"
        @onImageClick="handleQuestClick"
      />
    </div>
    <div class="search-container">
      <div class="title-box">
        <span>국내 여행지</span>
      </div>
      <div class="input-container">
        <form @submit.prevent="handleSearch" class="input-box">
          <input
            class="attraction-input"
            type="text"
            id="title"
            v-model="searchTitle"
            placeholder="여행지를 검색해보세요"
          />
          <i data-feather="search" class="icon"></i>
          <button type="submit">검색</button>
        </form>
      </div>

      <div class="card-container">
        <div class="image-grid">
          <div
            class="image-item"
            v-for="(attraction, index) in attractions"
            :key="index"
          >
            <img
              :src="
                attraction.firstImage1 && attraction.firstImage1
                  ? attraction.firstImage1
                  : noImage
              "
              alt="attraction-image"
              class="image"
            />
            <div class="image-overlay" @click="handleAttraction(attraction.no)">
              <div class="overlay-text title">{{ attraction.title }}</div>
              <div class="overlay-text address">{{ attraction.addr1 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { _getAttractions, _getAttractionsByTitle, _getQuests } from '@/api';
import Carousel from '@/components/Carousel.vue';
import feather from 'feather-icons';
import { onMounted, ref } from 'vue';
import noImage from '@/assets/no-image.jpg';
import { useRouter } from 'vue-router';
import { useLoginState } from '@/stores/loginState';
import { useAvailableQuestState } from '@/stores/availableQuestsState';

const router = useRouter();
const loginState = useLoginState();
const availableQuestsState = useAvailableQuestState();
const quests = ref([]);
const attractions = ref([]);
const searchTitle = ref('');

onMounted(() => {
  feather.replace();
  getQuests();
  getAttractions();
});

const getQuests = () => {
  const requestParam = {
    email: loginState.isLogin ? loginState.email : null,
  };
  _getQuests(
    requestParam,
    (response) => {
      quests.value = response.data;
      response.data.map(quest => { 
        if (!quest.completed) {
          if (!availableQuestsState.quests.includes(quest.idx)) {
            availableQuestsState.addAvailableQuests(quest.idx);

          }
        } 
      })
      console.log("quests 정보: ",response);
    },
    (error) => {
      console.error('_getQuests 실패', error);
    }
  );
};

const getAttractions = () => {
  _getAttractions(
    (response) => {
      // console.log(response.data);
      attractions.value = response.data;
    },
    (error) => {
      console.error('_getAttractions 실패', error);
    }
  );
};

const handleSearch = () => {
  if (searchTitle.value) {
    _getAttractionsByTitle(
      searchTitle.value,
      (response) => {
        attractions.value = response.data;
      },
      (error) => {
        console.error('_getAttractionsByTitle 실패', error);
      }
    );
  } else {
    _getAttractions(
      (response) => {
        console.log(response.data);
        attractions.value = response.data;
      },
      (error) => {
        console.error('_getAttractions 실패', error);
      }
    );
  }
};

const handleAttraction = (num) => {
  router.push(`/attraction/${num}`);
};

const handleQuestClick = (id) => {
  router.push(`/quest/${id}`);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
  margin-top: 1.5rem;
  /* background-color: green; */
}
.container::-webkit-scrollbar {
  display: none;
}

.quest-container {
  /* flex-basis: 50%; */
  height: 14rem;
  width: 38rem;
  /* background-color: blue; */
}

.title-box {
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start; */
  margin-left: 1.25rem;
  margin-bottom: 0.5rem;
}

.title-box span {
  display: block;
  font-weight: 700;
  font-size: 1rem;
}

.search-container {
  /* flex-grow: 1; */
  /* flex-basis: 50%; */
  display: flex;
  flex-direction: column;
  flex: 1;
  /* align-items: center; */
  width: 38rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  /* background-color: yellow; */
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: blue; */
}

.input-box {
  position: relative;
  display: flex;
  width: 96%;
  gap: 0.75rem;
  /* background-color: red; */
}

.attraction-input {
  flex-grow: 1;
  height: 3.5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding-left: 3.25rem;
}

.input-box button {
  flex-shrink: 0;
  width: 5rem;
  height: 3.5rem;
  background-color: #f74320;
  font-weight: 600;
  color: #ffffff;
  border-radius: 10px;
}

.icon {
  position: absolute;
  left: 1rem;
  top: 1.15rem;
  width: 1.25rem;
  height: 1.25rem;
  stroke: #bebebe;
}

.card-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  width: 37rem;
  /* background-color: green; */
}

.image-item {
  position: relative;
  width: 31.4%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-item:hover .image-overlay {
  opacity: 1;
}

.overlay-text {
  color: #ffffff;
  text-align: center;
}

.overlay-text.title {
  font-size: 1rem;
  font-weight: 600;
}

.overlay-text.address {
  font-size: 0.75rem;
}
</style>
