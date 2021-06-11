import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory('/block-studio-test/'),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/view/Index.vue'),
    },
    {
      path: '/single',
      name: 'Single',
      component: () => import('@/view/Single.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router