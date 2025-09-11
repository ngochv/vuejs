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

  uploadFile<T = any>(url: string, formData: FormData, config?: object): Promise<ApiResponse<T>> {
    return axiosInstance.post(url, formData, config)
  },

  uploadMultipleFiles<T = any>(
    url: string,
    formData: FormData,
    config?: object
  ): Promise<ApiResponse<T>> {
    return axiosInstance.post(url, formData, config)
  },

  uploadToS3(presignedUrl: string, file: File, config?: object): Promise<void> {
    return axiosInstance.put(presignedUrl, file, config)
  },
}
/* eslint-enable @typescript-eslint/no-explicit-any */
