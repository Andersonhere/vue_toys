// src/router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Gallery from './views/Gallery.vue';
import First from './views/First.vue';
import Second from './views/Second.vue';
import ImageGrid from './views/ImageGrid.vue';
import Third from './views/Third.vue';
import Four from './views/Four.vue';
import Five from './views/Five.vue';
import Six from './views/Six.vue';

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
  {
    path: '/third',
    name: 'Third',
    component: Third,
  },
  {
    path: '/four',
    name: 'Four',
    component: Four,
  },
  {
    path: '/five',
    name: 'Five',
    component: Five,
  },
  {
    path: '/six',
    name: 'Six',
    component: Six,
  },
];

const router = new Router({
  mode: 'history', // 使用 HTML5 History 模式
  routes,
});

export default router;
