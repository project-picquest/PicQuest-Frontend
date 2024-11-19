
<template>
    <div class="container">
    <form @submit.prevent="handleLogin">
        <input class="login-input" type="email" id="email" v-model="email" placeholder="abc@picquest.co.kr">
        <input class="login-input" type="password" id="password" v-model="password" placeholder="비밀번호를 입력하세요.">
    </form>
    </div>

</template>
<script setup>
const handleLogin = () => {
    console.log('로그인')
}
</script>

<style scoped>
    .container {
        height: 100%;
        /* background-color: green; */
        overflow-y: auto;
    }

    .login-input {
        width: 25rem;
        height: 3.5rem;
        background-color: #f5f5f5;
        border-radius: 10px;
        padding-left: 1rem;
    }
    .login-input::placeholder {
        color: #bfbfbf;
        font-weight: 500;
    }
    
</style>
