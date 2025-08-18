import { createRouter, createWebHistory } from 'vue-router';
import { useMainStore } from '../store';

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

router.beforeEach((to, from, next) => {
  const store = useMainStore();
  if (!store.checkLogin() && to.name !== 'Login') {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;