import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import halamanChat from '../views/halamanChat.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/halamanChat',
    name: 'halamanChat',
    component: halamanChat
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
