<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h4 font-weight-bold">🏠 Home Page</h1>
        <p>Welcome to the Home page of your Vue 3 + Vuetify app 🚀</p>

        <v-btn color="primary" @click="goAbout"> Go to About </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goAbout() {
  router.push({ name: 'about' })
}
</script>

<style scoped>
p {
  margin-top: 8px;
  color: #555;
}
</style>
