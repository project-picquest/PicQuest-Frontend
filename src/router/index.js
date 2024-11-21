import { createRouter, createWebHistory } from 'vue-router';
import { useLoginState } from '@/stores/loginState';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect :'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
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
      beforeEnter: (to, from, next) => {
        const loginState = useLoginState();
        if (!loginState.isLogin) {
          alert('로그인 후 이용 가능합니다.')
          next('/login');
        } else {
          next();
        }
      } 
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
      component: () => import('@/views/ProfileView.vue'),
      beforeEnter: (to, from, next) => {
        const loginState = useLoginState();
        if (!loginState.isLogin) {
          alert('로그인 후 이용 가능합니다.')
          next('/login');
        } else {
          next();
        }
      } 

    },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: () => import('@/views/ErrorView.vue')
    }
  ],
});

export default router;
