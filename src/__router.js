// src/router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Gallery from './views/Gallery.vue';
import E1G1_1 from './views/E1/G1/E1G1_1.vue';
import E1G1_2 from './views/E1/G1/E1G1_2.vue';
import E1G1_3 from './views/E1/G1/E1G1_3.vue';
import ImageGrid from './views/ImageGrid.vue';
import E1G2_1 from './views/G2/E1G2_1.vue';
import E1G2_2 from './views/G2/E1G2_2.vue';
import E1G2_3 from './views/G2/E1G2_3.vue';

import Test from './views/test.vue';
import E2G1 from './views/E2/G1/E2G1_1.vue';
import E2G1_1 from './views/E2/G1/E2G1_2.vue';
import E2G1_2 from './views/E2/G1/E2G1_3.vue';
import E2G1_3 from './views/E2/G1/E2G1_4.vue';
import E2G1_4 from './views/E2/G1/E2G1_5.vue';
import E2G1_6 from './views/E2/G1/E2G1_6.vue';
import E2G1_7 from './views/E2/G1/E2G1_7.vue';
import E2G1_8 from './views/E2/G1/E2G1_8.vue';

import E2G2 from './views/E2/G2/E2G2_1.vue';
import E2G2_1 from './views/E2/G2/E2G2_2.vue';
import E2G2_2 from './views/E2/G2/E2G2_3.vue';
import E2G2_3 from './views/E2/G2/E2G2_4.vue';
import E2G2_4 from './views/E2/G2/E2G2_5.vue';
import E2G2_6 from './views/E2/G2/E2G2_6.vue';
import E2G2_7 from './views/E2/G2/E2G2_7.vue';
import E2G2_8 from './views/E2/G2/E2G2_8.vue';

import E3G1 from './views/E7/G1/E7G1_1.vue';
import E3G1_2 from './views/E7/G1/E7G1_2.vue';
import E3G1_3 from './views/E7/G1/E7G1_3.vue';

import E3G2 from './views/E7/G2/E7G2_1.vue';
import E3G3 from './views/E7/G3/E7G3_1.vue';


import E4G1 from './views/E4/G1/E4G1_1.vue';
import E4G1_1 from './views/E4/G1/E4G1_2.vue';
import E4G1_2 from './views/E4/G1/E4G1_3.vue';
import E4G1_3 from './views/E4/G1/E4G1_4.vue';

import E4G2 from './views/E4/G2/E4G2_1.vue';
import E4G2_1 from './views/E4/G2/E4G2_2.vue';
import E4G2_2 from './views/E4/G2/E4G2_3.vue';
import E4G2_3 from './views/E4/G2/E4G2_4.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/E1G1_1',
    name: 'E1G1_1',
    component: E1G1_1,
  },
  {
    path: '/E1G1_2',
    name: 'E1G1_2',
    component: E1G1_2,
  },
  {
    path: '/E1G1_3',
    name: 'E1G1_3',
    component: E1G1_3,
  },
  {
    path: '/imageGrid',
    name: 'ImageGrid',
    component: ImageGrid,
  },
  {
    path: '/E1G2_1',
    name: 'E1G2_1',
    component: E1G2_1,
  },
  {
    path: '/E1G2_2',
    name: 'E1G2_2',
    component: E1G2_2,
  },
  {
    path: '/E1G2_3',
    name: 'E1G2_3',
    component: E1G2_3,
  },

  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/E2G1',
    name: 'E2G1',
    component: E2G1,
  },
  {
    path: '/E2G1_1',
    name: 'E2G1_1',
    component: E2G1_1,
  },
  {
    path: '/E2G1_2',
    name: 'E2G1_2',
    component: E2G1_2,
  },
  {
    path: '/E2G1_3',
    name: 'E2G1_3',
    component: E2G1_3,
  },
  {
    path: '/E2G1_4',
    name: 'E2G1_4',
    component: E2G1_4,
  },
  {
    path: '/E2G1_6',
    name: 'E2G1_6',
    component: E2G1_6,
  },
  {
    path: '/E2G1_7',
    name: 'E2G1_7',
    component: E2G1_7,
  },
  {
    path: '/E2G1_8',
    name: 'E2G1_8',
    component: E2G1_8,
  },

  {
    path: '/E2G2',
    name: 'E2G2',
    component: E2G2,
  },
  {
    path: '/E2G2_1',
    name: 'E2G2_1',
    component: E2G2_1,
  },
  {
    path: '/E2G2_2',
    name: 'E2G2_2',
    component: E2G2_2,
  },
  {
    path: '/E2G2_3',
    name: 'E2G2_3',
    component: E2G2_3,
  },
  {
    path: '/E2G2_4',
    name: 'E2G2_4',
    component: E2G2_4,
  },
  {
    path: '/E2G2_6',
    name: 'E2G2_6',
    component: E2G2_6,
  },
  {
    path: '/E2G2_7',
    name: 'E2G2_7',
    component: E2G2_7,
  },
  {
    path: '/E2G2_8',
    name: 'E2G2_8',
    component: E2G2_8,
  },


  {
    path: '/E3G1',
    name: 'E3G1',
    component: E3G1,
  },
  {
    path: '/E3G1_2',
    name: 'E3G1_2',
    component: E3G1_2,
  },
  {
    path: '/E3G1_3',
    name: 'E3G1_3',
    component: E3G1_3,
  },


  {
    path: '/E3G2',
    name: 'E3G2',
    component: E3G2,
  },
  {
    path: '/E3G3',
    name: 'E3G3',
    component: E3G3,
  },

  {
    path: '/E4G1',
    name: 'E4G1',
    component: E4G1,
  },
  {
    path: '/E4G1_1',
    name: 'E4G1_1',
    component: E4G1_1,
  },
  {
    path: '/E4G1_2',
    name: 'E4G1_2',
    component: E4G1_2,
  },
  {
    path: '/E4G1_3',
    name: 'E4G1_3',
    component: E4G1_3,
  },

  {
    path: '/E4G2',
    name: 'E4G2',
    component: E4G2,
  },
  {
    path: '/E4G2_1',
    name: 'E4G2_1',
    component: E4G2_1,
  },
  {
    path: '/E4G2_2',
    name: 'E4G2_2',
    component: E4G2_2,
  },
  {
    path: '/E4G2_3',
    name: 'E4G2_3',
    component: E4G2_3,
  }
];

const router = new Router({
  mode: 'history', // 使用 HTML5 History 模式
  routes,
});

export default router;
