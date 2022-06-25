import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import ProfilView from '@/views/ProfilView'
import LoginView from '@/views/LoginView'
import LogoutView from '@/views/LogoutView'

import store from '@/store'

const routes = [
  {path: '/', component: HomeView},
  {path: '/profil', component: ProfilView},
  {path: '/bejelentkezes', component: LoginView},
  {path: '/kijelentkezes', component: LogoutView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// védelem az útvonalakhoz  (hova, honnan, mehet-e?)
// ami nincs bent a konstansba, azok az oldalak "védettek"
router.beforeEach((to,from,next)=>{
  const publicPage = ['/', '/bejelentkezes', 'kijelentkezes']
  const autRequired = !publicPage.includes(to.path)
  const isAuthenticated = store.state.user.status
  console.log(store.state.user)
  if(autRequired && !isAuthenticated){
    
    return next('/bejelentkezes')
  } else {

    next()
  }
})


export default router
