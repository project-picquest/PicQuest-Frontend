import { defineStore } from 'pinia';

export const useAvailableQuestState = defineStore('availableQuestState', {
  state: () => ({
    quests : [
  ]}),
  actions: {
    addAvailableQuests(questId) {
        this.quests.push(questId);
    },
    removeAvailableQuest(questId) {
        this.quests = this.quests.filter((id) => id != questId);
    }
  },
  persist: true,
});
