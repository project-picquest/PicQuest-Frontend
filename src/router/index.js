import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('@/views/JoinView.vue'),
    },
    {
      path: '/quest',
      name: 'quest',
      component: () => import('@/views/QuestView.vue'),
    },
    {
      path: '/attraction/:id',
      name: 'attraction',
      component: () => import('@/views/AttractionView.vue')
    },
  ],
});

export default router;
