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
      path: '/quest/:id',
      name: 'quest',
      component: () => import('@/views/QuestView.vue'),
    },
    {
      path: '/attraction/:id',
      name: 'attraction',
      component: () => import('@/views/AttractionView.vue')
    },
    {
      path: '/result',
      name: 'result',
      children : [{
        path: 'success/:id',
        name: 'success',
        component: () => import('@/views/SuccessView.vue')
      }, {
        path: 'fail/:id',
        name: 'fail',
        component: () => import('@/views/FailView.vue')
      }]
    },
    {
      path: '/profile/:nickname',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue')

    },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: () => import('@/views/ErrorView.vue')
    }
  ],
});

export default router;
