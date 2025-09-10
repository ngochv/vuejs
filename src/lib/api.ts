import axiosInstance from './axiosInstance'
import type { ApiResponse } from '@/types/api'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const api = {
  // ====== CRUD ======
  get<T = any>(url: string, params?: object): Promise<ApiResponse<T>> {
    return axiosInstance.get(url, { params })
  },

  post<T = any>(url: string, data?: object): Promise<ApiResponse<T>> {
    return axiosInstance.post(url, data)
  },

  put<T = any>(url: string, data?: object): Promise<ApiResponse<T>> {
    return axiosInstance.put(url, data)
  },

  patch<T = any>(url: string, data?: object): Promise<ApiResponse<T>> {
    return axiosInstance.patch(url, data)
  },

  delete<T = any>(url: string, params?: object): Promise<ApiResponse<T>> {
    return axiosInstance.delete(url, { params })
  },

  // ====== Single file upload via backend ======
  upload<T = any>(
    url: string,
    file: File,
    extraData?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    const formData = new FormData()
    formData.append('file', file)

    if (extraData) {
      Object.entries(extraData).forEach(([key, value]) => {
        formData.append(key, value as any)
      })
    }

    return axiosInstance.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  // ====== Multiple files upload via backend ======
  uploadMultiple<T = any>(
    url: string,
    files: File[],
    extraData?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(`files[${i}]`, file)
    })

    if (extraData) {
      Object.entries(extraData).forEach(([key, value]) => {
        formData.append(key, value as any)
      })
    }

    return axiosInstance.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  // ====== Direct upload to S3 using a pre-signed URL ======
  async uploadToS3(presignedUrl: string, file: File): Promise<void> {
    await axiosInstance.put(presignedUrl, file, {
      headers: { 'Content-Type': file.type },
    })
  },
}
/* eslint-enable @typescript-eslint/no-explicit-any */
