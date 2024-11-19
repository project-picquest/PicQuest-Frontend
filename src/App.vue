<template>
  <div class="app-container">
    <div class="app-box">
      <TopNavigator />
      <router-view></router-view>
      <BottomNavigator />
    </div>
  </div>
</template>

<script>
import BottomNavigator from './components/common/BottomNavigator.vue';
import TopNavigator from './components/common/TopNavigator.vue';

export default {
  components: {
    TopNavigator,
    BottomNavigator,
  },
};
</script>
<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: aqua;
}
.app-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35rem;
  height: 100vh;
  background-color: white;
}
</style>
