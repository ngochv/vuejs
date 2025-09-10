import axios from 'axios'
import type { ApiError, ApiResponse } from '@/types/api'
import { getToken } from '@/utils/cookies'

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
    const token = getToken()
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
      message: response.data?.message || 'Success',
    } as ApiResponse
  },
  (error): any => {
    const apiError: ApiError = {
      data: error.response?.data,
      status: error.response?.status,
      message: error.response?.data?.message || error.message || 'Unknown error',
    }
    return Promise.reject(apiError)
  }
)

export default axiosInstance
