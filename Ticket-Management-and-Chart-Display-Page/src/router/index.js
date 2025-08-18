import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/home/index.vue'), // 懒加载
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login/index.vue'), // 懒加载
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;