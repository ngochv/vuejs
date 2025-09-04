<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h4 font-weight-bold">ℹ️ About Page</h1>
        <p>This is the About page. You can add project info or team details here.</p>

        <v-btn color="secondary" @click="goHome"> Back to Home </v-btn>
        <h2 class="text-h5 mt-6">Posts:</h2>
        <v-list>
          <v-list-item v-for="post in posts" :key="post.id">
            <v-list-item-title>{{ post.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-btn color="primary" class="mt-4" @click="fetchPosts"> Load Posts </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import postApi from '@/api/postApi'
import type { Post } from '@/types/post'

const router = useRouter()
const posts = ref<Post[]>([])

function goHome() {
  router.push({ name: 'home' })
}

async function fetchPosts() {
  try {
    const data = await postApi.getAll()
    posts.value = data.slice(0, 5)
  } catch (err) {
    console.error('Error fetching posts:', err)
  }
}
</script>

<style scoped>
p {
  margin-top: 8px;
  color: #777;
}
</style>
