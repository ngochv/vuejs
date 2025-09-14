<template>
  <v-container>
    <div class="p-4">
      <v-file-upload density="compact" variant="compact" @change="onFileChange" />
    </div>

    <v-btn
      class="mt-4 px-4 py-2 bg-blue-500 rounded disabled:opacity-50"
      @click="uploadImage"
      :disabled="!selectedFile || upload?.isUploading"
    >
      <template v-if="upload?.isUploading">
        <v-progress-circular indeterminate size="20" width="2" color="white" class="mr-2" />
        Đang upload...
      </template>
      <template v-else>
        <v-icon class="mr-2">mdi-upload</v-icon>
        Upload
      </template>
    </v-btn>

    <div v-if="upload?.response" class="mt-4 p-2 border rounded bg-gray-100">
      <p class="font-medium">Server Response:</p>
      <pre>{{ upload.response }}</pre>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useApiUpload } from '@/composables/useApiUpload'

const selectedFile = ref<File>()

const { getUpload, uploadFile } = useApiUpload()

function onFileChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) selectedFile.value = file
}

async function uploadImage() {
  if (!selectedFile.value) return
  await uploadFile('file1', selectedFile.value, 'post')
}

const upload = computed(() => getUpload('file1'))

watch(
  () => upload.value?.response,
  (newVal) => {
    if (newVal) {
      selectedFile.value = undefined
    }
  }
)
</script>
