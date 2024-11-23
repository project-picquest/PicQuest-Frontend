import { defineStore } from 'pinia';

export const useQuestState = defineStore('questState', {
  state: () => ({
    questId: 0,
    questSimilarity: 0,
  }),
  actions: {
    setQuestInfo(questId, score) {
      this.questId = questId;
      this.questSimilarity = score;
    },
  },
  persist: true,
});
