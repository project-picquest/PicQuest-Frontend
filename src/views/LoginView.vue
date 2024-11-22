<template>
  <div class="container">
    <p class="logo">PicQuest</p>
    <div class="input-container">
      <form @submit.prevent="handleLogin">
        <div class="input-box">
          <label for="email">아이디</label>
          <input
            class="login-input"
            type="email"
            id="email"
            v-model="userInfo.email"
            placeholder="abc@picquest.co.kr"
          />
        </div>
        <div class="input-box">
          <label for="password">비밀번호</label>
          <input
            class="login-input"
            type="password"
            id="password"
            v-model="userInfo.password"
            placeholder="비밀번호를 입력하세요."
          />
        </div>
        <button class="login-button">로그인</button>
      </form>
    </div>
    <div class="navigate-container">
      <p>계정이 없으신가요?</p>
      <p @click="navigateJoin">이메일로 회원가입</p>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { _login } from "@/api";
import { useLoginState } from "@/stores/loginState";

const loginState = useLoginState();

const userInfo = ref({
  email: "",
  password: "",
});

const router = useRouter();

const handleLogin = () => {
  console.log("로그인 시도: ", userInfo.value);
  _login(
    userInfo.value,
    (response) => {
      console.log("로그인 성공", response);
      loginState.login(response.data.email);
      router.push("/");
    },
    (error) => {
      console.error("로그인 실패", error);
      alert("아이디 혹은 비밀번호를 다시 확인해주세요");
    }
  );


};

const navigateJoin = () => {
  router.push("/join");
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background-color: green; */
  overflow-y: auto;
}

.login-input {
  width: 28rem;
  height: 3.5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding-left: 1rem;
}
.login-input::placeholder {
  color: #bfbfbf;
  font-weight: 500;
}

.input-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* height: 100%; */
  /* background-color: green; */
}

.input-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.input-box > label {
  font-size: 0.8rem;
  font-weight: 600;
}

.login-button {
  width: 100%;
  height: 3.5rem;
  background-color: #f74320;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  margin-top: 1rem;
}

.logo {
  font-size: 3.5rem;
  color: #f74320;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.navigate-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.3rem;
}

.navigate-container :nth-child(1) {
  font-weight: 600;
  color: #bfbfbf;
}
.navigate-container :nth-child(2) {
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.2rem;
}
</style>
