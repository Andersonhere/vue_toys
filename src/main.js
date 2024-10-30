import Vue from 'vue';
import App from './App.vue';
import VueGrabbingBox from 'vue-grabbing-box';
import Draggable from 'vuedraggable';
import router from './router'; // 导入 router

Vue.use(VueGrabbingBox);
Vue.use(Draggable);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router, // 注册 router
}).$mount('#app');

