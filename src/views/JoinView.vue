<template>
  <div class="container">
    <p class="logo">PicQuest</p>
    <div class="input-container">
      <Form @submit="handleJoin">
        <div class="input-box">
          <div class="label-box">
            <span class="label">이메일</span>
            <ErrorMessage name="email" class="error-message" />
          </div>
          <Field
            class="join-input"
            type="email"
            id="email"
            name="email"
            v-model="userInfo.email"
            placeholder="abc@picquest.co.kr"
            :rules="emailRules"
          />
        </div>
        <div class="input-box">
          <div class="label-box">
            <span class="label">닉네임</span>
            <ErrorMessage name="nickname" class="error-message" />
          </div>
          <Field
            class="join-input"
            type="text"
            id="nickname"
            name="nickname"
            v-model="userInfo.nickname"
            placeholder="홍길동"
            :rules="nicknameRules"
          />
        </div>
        <div class="input-box">
          <div class="label-box">
            <span class="label">비밀번호</span>
            <ErrorMessage name="password" class="error-message" />
          </div>
          <Field
            class="join-input"
            type="password"
            id="password"
            name="password"
            v-model="userInfo.password"
            placeholder="최소 8자 이상"
            :rules="passwordRules"
          />
        </div>
        <div class="input-box">
          <div class="label-box">
            <span class="label">비밀번호 확인</span>
            <ErrorMessage name="checkpassword" class="error-message" />
          </div>
          <Field
            class="join-input"
            type="password"
            id="checkpassword"
            name="checkpassword"
            v-model="userInfo.checkpassword"
            placeholder="위 비밀번호와 동일하게 입력"
            :rules="passwordConfirmRules"
          />
        </div>
        <button class="join-button">회원가입</button>
      </Form>
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
import { Form, Field, ErrorMessage } from 'vee-validate';

const loginState = useLoginState();

const userInfo = ref({
  email: '',
  nickname: '',
  password: '',
  checkpassword: '',
});

const router = useRouter();

const handleJoin = () => {
  _join(
    userInfo.value,
    (response) => {
      console.log('로그인 성공', response);
      loginState.login();
      router.push('/');
    },
    (error) => {
      console.error('로그인 실패', error);
    }
  );
  console.log(userInfo.value);
};

const navigateLogin = () => {
  router.push('/login');
};

const emailRules = (value) => {
  if (!value) {
    return '이메일을 필수로 입력해주세요';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return '이메일 형식을 다시 확인해주세요';
  }

  return true;
};

const nicknameRules = (value) => {
  if (!value) {
    return '닉네임을 필수로 입력해주세요';
  }

  if (value.length < 2) {
    return '닉네임은 최소 2자 이상이어야 해요';
  }

  if (value.length > 8) {
    return '닉네임은 최대 8자 이하이어야 해요';
  }

  const nicknameRegex = /^[a-zA-Z가-힣0-9]+$/;
  if (!nicknameRegex.test(value)) {
    return '닉네임은 공백이나 특수문자를 포함할 수 없어요';
  }

  return true;
};

const passwordRules = (value) => {
  if (!value) {
    return '비밀번호를 입력해주세요';
  }

  if (value.length < 8) {
    return '비밀번호는 최소 8자 이상이어야 해요';
  }

  return true;
};

const passwordConfirmRules = (value) => {
  if (!value) {
    return '위 비밀번호를 다시 한 번 입력해주세요';
  }

  if (userInfo.value.checkpassword !== userInfo.value.password) {
    return '위 비밀번호와 일치하지 않아요';
  }

  return true;
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

.label-box {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
  padding: 0 0.3rem;
}

.label {
  font-size: 0.8rem;
  font-weight: 600;
}

.error-message {
  font-size: 0.8rem;
  font-weight: 500;
  color: #f74320;
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
