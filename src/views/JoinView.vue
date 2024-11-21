<template>
  <div class="container">
    <p class="logo">PicQuest</p>
    <div class="input-container">
      <form @submit.prevent="handleJoin">
        <div class="input-box">
          <label for="email">아이디</label>
          <input
            class="join-input"
            type="email"
            id="email"
            v-model="userInfo.email"
            placeholder="abc@picquest.co.kr"
          />
        </div>
        <div class="input-box">
          <label for="nickname">닉네임</label>
          <input
            class="join-input"
            type="text"
            id="nickname"
            v-model="userInfo.nickname"
            placeholder="홍길동"
          />
        </div>
        <div class="input-box">
          <label for="password">비밀번호</label>
          <input
            class="join-input"
            type="password"
            id="password"
            v-model="userInfo.password"
            placeholder="최소 8자 이상"
          />
        </div>
        <div class="input-box">
          <label for="checkpassword">비밀번호</label>
          <input
            class="join-input"
            type="password"
            id="checkpassword"
            v-model="checkpassword"
            placeholder="위 비밀번호와 동일하게 입력"
          />
        </div>
        <button class="join-button">회원가입</button>
      </form>
    </div>
    <div class="navigate-container">
      <p>이미 아이디가 있으신가요?</p>
      <p @click="navigateLogin">이메일로 로그인</p>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useLoginState } from '@/stores/loginState';
import { ref } from 'vue';
import { _join } from '@/api';

const loginState = useLoginState();

const userInfo = ref({
  email : '',
  nickname : '',
  password : ''
})

const router = useRouter();

const handleJoin = () => {
  _join(userInfo.value, (response) => {
    console.log('로그인 성공', response);
    loginState.login();
    router.push('/')
  }, (error) => {
    console.error('로그인 실패', error)
  })
};

const navigateLogin = () => {
  router.push('/login');
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

.join-input {
  width: 28rem;
  height: 3.5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding-left: 1rem;
}
.join-input::placeholder {
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

.join-button {
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
