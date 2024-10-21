import Vue from 'vue';
import App from './App.vue';
import VueGrabbingBox from 'vue-grabbing-box';
import Draggable from 'vuedraggable';

Vue.use(VueGrabbingBox);
Vue.use(Draggable);

new Vue({
  render: h => h(App),
}).$mount('#app');
