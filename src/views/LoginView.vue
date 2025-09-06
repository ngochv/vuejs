<template>
  <v-container>
    <v-text-field v-model="username" label="Username" />
    <v-text-field v-model="password" label="Password" type="password" />
    <v-btn color="primary" :loading="loading" @click="handleLogin">Login</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useToast } from 'vue-toastification'

const router = useRouter()
const auth = useAuthStore()
const toast = useToast()

const username = ref('admin')
const password = ref('admin')
const loading = ref(false)

async function handleLogin() {
  loading.value = true
  try {
    await auth.login(username.value, password.value)
    router.push({ name: 'about' })
  } catch (err: any) {
    toast.error('Đăng nhập thất bại')
  } finally {
    loading.value = false
  }
}
</script>
