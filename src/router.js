// src/router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Gallery from './views/Gallery.vue';
import First from './views/First.vue';
import Second from './views/Second.vue';
import ImageGrid from './views/ImageGrid.vue';

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
    path: '/first',
    name: 'First',
    component: First,
  },
  {
    path: '/second',
    name: 'Second',
    component: Second,
  },
  {
    path: '/imageGrid',
    name: 'ImageGrid',
    component: ImageGrid,
  },
];

const router = new Router({
  mode: 'history', // 使用 HTML5 History 模式
  routes,
});

export default router;
