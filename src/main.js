import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routes from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
