import { defineStore } from "pinia";

export const useLoginState = defineStore('loginState', {
    state: () => ({
      isLogin: false,
    }),
    actions: {
      login() {
        this.isLogin = true;
      },
      logout() {
        this.isLogin = false;
      }
    },
    persist: true, 
  });