import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import ProfilView from '@/views/ProfilView'
import LoginView from '@/views/LoginView'

const routes = [
  {path: '/', component: HomeView},
  {path: '/profil', component: ProfilView},
  {path: '/bejelentkezes', component: LoginView},


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
