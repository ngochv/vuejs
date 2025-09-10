<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h4 font-weight-bold">ℹ️ About Page</h1>
        <p>This is the About page. You can add project info or team details here.</p>

        <v-btn color="secondary" @click="goHome"> Back to Home </v-btn>

        <h2 class="text-h5 mt-6">Posts:</h2>

        <!-- Loading indicator -->
        <div v-if="loading" class="d-flex justify-center my-4">
          <v-progress-circular indeterminate color="primary" />
        </div>

        <!-- Posts list -->
        <v-list v-else>
          <v-list-item v-for="post in dataPost" :key="post.id">
            <v-list-item-title>{{ post.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <!-- Button with spinner -->
        <v-btn color="primary" class="mt-4" :loading="loading" @click="fetchPosts">
          Load Posts
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import postApi from '@/api/postApi'
import type { Post } from '@/types/post'
import { useApi } from '@/composables/useApi'
import { onMounted, watch } from 'vue'

const router = useRouter()
const toast = useToast()

function goHome() {
  router.push({ name: 'home' })
}

const { data: dataPost, loading, error, execute: fetchPosts } = useApi<Post[]>(postApi.getAll)

watch(error, (err) => {
  if (err) toast.error(err)
})

onMounted(() => {
  fetchPosts()
    .then(() => toast.success('Posts loaded!'))
    .catch(() => toast.error('Failed to load posts'))
})
</script>

<style scoped>
p {
  margin-top: 8px;
  color: #777;
}
</style>
