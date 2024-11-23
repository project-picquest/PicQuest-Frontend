import { defineStore } from 'pinia';

export const useQuestState = defineStore('questState', {
  state: () => ({
    questId: 0,
    title: '',
    questSimilarity: 0,
  }),
  actions: {
    setQuestInfo(questId, title, score) {
      this.questId = questId;
      this.questAttractionName = title;
      this.questSimilarity = score;
    },
  },
  persist: true,
});
