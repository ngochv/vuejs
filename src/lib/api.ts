import axiosInstance from './axiosInstance'
import type { ApiResponse } from '@/types/api'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const api = {
  // ====== CRUD JSON ======
  get<T = any>(url: string, params?: object): Promise<ApiResponse<T>> {
    return axiosInstance.get(url, { params })
  },

  post<T = any>(url: string, data?: object): Promise<ApiResponse<T>> {
    return axiosInstance.post(url, data, {
      headers: { 'Content-Type': 'application/json' },
    })
  },

  put<T = any>(url: string, data?: object): Promise<ApiResponse<T>> {
    return axiosInstance.put(url, data, {
      headers: { 'Content-Type': 'application/json' },
    })
  },

  patch<T = any>(url: string, data?: object): Promise<ApiResponse<T>> {
    return axiosInstance.patch(url, data, {
      headers: { 'Content-Type': 'application/json' },
    })
  },

  delete<T = any>(url: string, params?: object): Promise<ApiResponse<T>> {
    return axiosInstance.delete(url, { params })
  },

  // ====== UPLOAD ======
  uploadFile<T = any>(url: string, formData: FormData, config?: object): Promise<ApiResponse<T>> {
    return axiosInstance.post(url, formData, {
      ...config,
      headers: {
        ...(config as any)?.headers,
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  uploadMultipleFiles<T = any>(
    url: string,
    formData: FormData,
    config?: object
  ): Promise<ApiResponse<T>> {
    return axiosInstance.post(url, formData, {
      ...config,
      headers: {
        ...(config as any)?.headers,
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  // ====== UPLOAD TO S3 (presigned URL) ======
  uploadToS3(presignedUrl: string, file: File, config?: object): Promise<void> {
    return axiosInstance.put(presignedUrl, file, {
      ...config,
      headers: {
        ...(config as any)?.headers,
        'Content-Type': file.type || 'application/octet-stream',
      },
    })
  },
}
/* eslint-enable @typescript-eslint/no-explicit-any */
