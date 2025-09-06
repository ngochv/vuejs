import axios from 'axios'
import type { ApiResponse } from '@/types/api'

// Tạo instance axios
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 180000,
})

// Interceptor request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

/* eslint-disable @typescript-eslint/no-explicit-any */
axiosInstance.interceptors.response.use(
  (response): any => {
    return {
      data: response.data,
      status: response.status,
    } as ApiResponse
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error.response?.data || error.message)
  }
)

// Wrapper methods
const axiosClient = {
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
}

export default axiosClient
