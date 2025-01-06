import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import EditTaskPage from '../pages/EditTaskPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/edit/:id', component: EditTaskPage, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
