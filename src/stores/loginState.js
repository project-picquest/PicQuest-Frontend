import { defineStore } from "pinia";

export const useLoginState = defineStore('loginState', {
    state: () => ({
      isLogin: false,
      email: "",
    }),
    actions: {
      login(email) {
        this.isLogin = true;
        this.email = email;
      },
      logout() {
        this.isLogin = false;
      }
    },
    persist: true, 
  });