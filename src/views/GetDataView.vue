<template>
  <div class="d-flex flex-column align-center ga-4">
    <v-btn @click="fetchData" :disabled="loading" color="primary"> Gọi API </v-btn>

    <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>

    <pre v-if="dataDemo">{{ dataDemo }}</pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useApi } from '@/composables/useApi'
import demoApi from '@/api/demoApi'
import { useToast } from 'vue-toastification'

const toast = useToast()

const {
  data: dataDemo,
  loading,
  execute,
} = useApi<any>(() =>
  demoApi.getDemo({
    name: 'Tom',
    age: 20,
  })
)

onMounted(fetchData)

async function fetchData() {
  try {
    await execute()
    toast.success('Get Data Success!')
  } catch (err) {
    toast.error((err as string) || 'Get Data Failed')
  }
}
</script>
