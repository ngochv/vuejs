<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h4 font-weight-bold">ℹ️ About Page</h1>
        <p>This is the About page. You can add project info or team details here.</p>

        <v-btn color="secondary" @click="goHome">Back to Home</v-btn>

        <h2 class="text-h5 mt-6">Posts:</h2>

        <!-- Loading indicator -->
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="primary"
          class="my-4 d-flex justify-center"
        />

        <!-- Posts list -->
        <v-list v-else>
          <v-list-item v-for="post in dataPost" :key="post.id">
            <v-list-item-title>{{ post.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <!-- Button with spinner -->
        <v-btn color="primary" class="mt-4" :loading="loading" @click="fetchPostsWithToast">
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
import { onMounted } from 'vue'

const router = useRouter()
const toast = useToast()

const goHome = () => router.push({ name: 'home' })

const { data: dataPost, loading, execute } = useApi<Post[]>(postApi.getAll)

const fetchPostsWithToast = async () => {
  try {
    await execute()
    toast.success('Posts loaded!')
  } catch (err) {
    toast.error((err as string) || 'Failed to load posts')
  }
}

onMounted(fetchPostsWithToast)
</script>

<style scoped>
p {
  margin-top: 8px;
  color: #777;
}
</style>
