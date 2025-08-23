import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Test from '@/views/test.vue';

Vue.use(Router);

// Webpack 兼容的模块导入方式
const requireContext = require.context('./modules', true, /\.js$/);
const dynamicRoutes = requireContext.keys()
  .map(path => requireContext(path).default)
  .flat();

// 核心路由配置
const coreRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  }
];

// 合并所有路由
const routes = [...coreRoutes, ...dynamicRoutes];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;