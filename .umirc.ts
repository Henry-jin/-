import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: 'index' },
        {
          path: '/user', component: 'user',
          wrappers: [
            '@/wrappers/auth',
          ],
        },
        { component: '@/pages/404' }
      ]
    },
    { component: '@/pages/404' }
    // { path: '/', component: '@/pages/index' },
  ],
});
