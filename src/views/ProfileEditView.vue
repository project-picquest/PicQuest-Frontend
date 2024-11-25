<template>
  <div class="container">
    <Form class="form-container" @submit="handleUpdate">
      <div class="image-container">
        <div>
          <div @click="handleClick" class="image-box">
            <input type="file" ref="inputRef" @change="handleFileUpload" accept="image/*" />
            <img :src="userInfo.profileImage" alt="profile-image" />
          </div>
          <div class="change-button-box"><i data-feather="camera" class="icon"></i></div>
        </div>
      </div>

      <div class="input-container">
        <div class="input-box">
          <div class="label-box">
            <div class="label">
              닉네임
              <div class="required-dot"></div>
            </div>

            <ErrorMessage name="nickname" class="error-message" />
          </div>
          <Field
            class="update-input"
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
            <div class="label">
              비밀번호
              <div class="required-dot"></div>
            </div>

            <ErrorMessage name="password" class="error-message" />
          </div>
          <Field
            class="update-input"
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
            <div class="label">
              비밀번호 확인
              <div class="required-dot"></div>
            </div>

            <ErrorMessage name="checkpassword" class="error-message" />
          </div>
          <Field
            class="update-input"
            type="password"
            id="checkpassword"
            name="checkpassword"
            v-model="userInfo.checkpassword"
            placeholder="위 비밀번호와 동일하게 입력"
            :rules="passwordConfirmRules"
          />
        </div>
      </div>
      <button class="update-button">완료</button>
    </Form>
  </div>
</template>
<script setup>
import { _getUserProfile, _putUserProfile } from "@/api";
import feather from "feather-icons";
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref, onMounted } from "vue";
import { useLoginState } from "@/stores/loginState";
import { useRouter } from 'vue-router'

const userInfo = ref({
  profileImage: "",
  nickname: "",
  password: "",
  checkpassword :""
});
const checkpassword = ref("");
const imageFile = ref(null);

const loginState = useLoginState();
const inputRef = ref(null);
const router = useRouter();
// const uploadedImageUrl = ref('')

onMounted(() => {
  feather.replace();
  getUserInfo();
});

const getUserInfo = () => {
  const requestData = {
    email : loginState.login
  }
  _getUserProfile(loginState.email, requestData, (response) => {
    userInfo.value.profileImage = response.data.profileImage;
    userInfo.value.nickname = response.data.nickname;
  }, error => {
    console.error("_getUserProfile 실패", error)
  })
}

const putUserInfo = () => {
  const formData = new FormData();
const newUserInfo = {
  email: loginState.email,
  nickname: userInfo.value.nickname,
  password: userInfo.value.password,
}

  formData.append("form", JSON.stringify(newUserInfo));
  formData.append("image", imageFile.value);

  _putUserProfile(formData, (response) => {
    console.log(response.data);
    router.push(`/profile/${loginState.email}`)
  }, error => {
    console.error("_putUserProfile API 실패", error)
  })
}

const isFileImage = (file) => {
  return file && file.type.split("/")[0] === "image";
};

const handleFileUpload = (e) => {
  const $input = e.target;
  const file = $input.files[0];
  imageFile.value = file;
  if (!isFileImage(file)) {
    // TODO: 실행 순서 이상함
    alert("이미지만 업로드 가능합니다.");
    $input.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    userInfo.value.profileImage = reader.result;
  };
  reader.readAsDataURL(file);
};

const handleClick = () => {
  inputRef.value.click();
}

const handleUpdate = () => {
  putUserInfo();
}

const nicknameRules = (value) => {
  if (!value) {
    return "닉네임을 필수로 입력해주세요";
  }

  if (value.length < 2) {
    return "닉네임은 최소 2자 이상이어야 해요";
  }

  if (value.length > 8) {
    return "닉네임은 최대 8자 이하이어야 해요";
  }

  const nicknameRegex = /^[a-zA-Z가-힣0-9]+$/;
  if (!nicknameRegex.test(value)) {
    return "닉네임은 공백이나 특수문자를 포함할 수 없어요";
  }

  return true;
};

const passwordRules = (value) => {
  if (!value) {
    return "비밀번호를 입력해주세요";
  }

  if (value.length < 8) {
    return "비밀번호는 최소 8자 이상이어야 해요";
  }

  return true;
};

const passwordConfirmRules = (value) => {
  console.log(userInfo.value.checkpassword)
  console.log(userInfo.value.password)
  if (!value) {
    return "위 비밀번호를 다시 한 번 입력해주세요";
  }

  if (userInfo.value.checkpassword !== userInfo.value.password) {
    return "위 비밀번호와 일치하지 않아요";
  }

  return true;
};
</script>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  /* width: 100%; */
  /* height: 13rem; */
  /* background-color: red; */
}

.image-box {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  overflow: hidden;
  margin: auto auto;
  border: 2px solid #dadada;
  cursor: pointer;
}

.image-box > input {
  display: none;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.change-button-box {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid #ececec;
  background-color: #ffffff;
  cursor: pointer;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

.input-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.update-input {
  width: 28rem;
  height: 3.5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding-left: 1rem;
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
  position: relative;
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  font-weight: 600;
}

.required-dot {
  position: absolute;
  top: 0.2rem;
  right: -0.4rem;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background-color: #f74320;
}

.error-message {
  font-size: 0.8rem;
  font-weight: 500;
  color: #f74320;
}

.update-button {
  width: 28rem;
  height: 3.5rem;
  background-color: #f74320;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  margin-top: 1rem;
}

.icon {
  width: 1.3rem;
  height: 1.3rem;
  stroke-width: 1.5px;
  fill: #575757;
  stroke: #ffffff;
}
</style>
