import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Home from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/authStore'
import LoginView from '@/views/LoginView.vue'
import UploadView from '@/views/UploadView.vue'
import GetDataView from '@/views/GetDataView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/get-data',
    name: 'getData',
    meta: { requiresAuth: true },
    component: GetDataView,
  },
  {
    path: '/upload',
    name: 'upload',
    meta: { requiresAuth: true },
    component: UploadView,
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
