import { defineStore } from 'pinia';

export const useQuestState = defineStore('questState', {
  state: () => ({
    questId: 0,
    questAttractionName: '',
    questImage:'',
    questSimilarity: 0,
  }),
  actions: {
    setQuestInfo(questId, title, image, score) {
      this.questId = questId;
      this.questAttractionName = title;
      this.questImage = image
      this.questSimilarity = score;
    },
  },
  persist: true,
});
