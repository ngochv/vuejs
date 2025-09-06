import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import { useAuthStore } from '@/stores/auth'
import LoginView from '@/views/LoginView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    meta: { requiresAuth: true },
    component: About,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return next({ name: 'login' })
  }

  if (to.name === 'login' && auth.isLoggedIn) {
    return next({ name: 'home' })
  }

  next()
})

export default router
