import { ref, reactive } from 'vue'
import { api } from '@/lib/api'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useApiUpload() {
  type UploadStatus = {
    progress: number
    isUploading: boolean
    error: string | null
    response: any
  }

  const uploads = reactive<Map<string, UploadStatus>>(new Map())

  function initUpload(key: string) {
    uploads.set(key, { progress: 0, isUploading: false, error: null, response: null })
  }

  function getUpload(key: string) {
    return uploads.get(key)
  }

  async function uploadFile(
    key: string,
    file: File,
    folder: string,
    extraData?: Record<string, any>
  ) {
    initUpload(key)
    const status = uploads.get(key)!
    const formData = new FormData()
    formData.append('file', file)
    if (extraData) Object.entries(extraData).forEach(([k, v]) => formData.append(k, v as any))
    const url = `${import.meta.env.VITE_API_UPLOAD_URL}/${folder}`

    status.isUploading = true
    status.progress = 0
    status.error = null

    try {
      const res = await api.uploadFile(url, formData, {
        onUploadProgress: (event: any) => {
          if (event.total) status.progress = Math.round((event.loaded * 100) / event.total)
        },
      })
      status.response = res
      return res
    } catch (err: any) {
      status.error = err.message || 'Upload failed'
      throw err
    } finally {
      status.isUploading = false
    }
  }

  async function uploadMultipleFiles(
    key: string,
    files: File[],
    folder: string,
    extraData?: Record<string, any>
  ) {
    initUpload(key)
    const status = uploads.get(key)!
    const formData = new FormData()
    files.forEach((file, i) => formData.append(`files[${i}]`, file))
    if (extraData) Object.entries(extraData).forEach(([k, v]) => formData.append(k, v as any))
    const url = `${import.meta.env.VITE_API_UPLOAD_URL}/${folder}`

    status.isUploading = true
    status.progress = 0
    status.error = null

    try {
      const res = await api.uploadMultipleFiles(url, formData, {
        onUploadProgress: (event: any) => {
          if (event.total) status.progress = Math.round((event.loaded * 100) / event.total)
        },
      })
      status.response = res
      return res
    } catch (err: any) {
      status.error = err.message || 'Upload failed'
      throw err
    } finally {
      status.isUploading = false
    }
  }

  return {
    uploads,
    getUpload,
    uploadFile,
    uploadMultipleFiles,
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
