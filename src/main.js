




import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Homescreen from './components/Homescreen.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/Homescreen', component: Homescreen },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
