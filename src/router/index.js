import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashView from '../views/DashView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dash',
    name: 'dash',
    component: DashView
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
