import axios from 'axios'
import type { ApiResponse } from '@/types/api'

// Tạo instance axios
const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 180000,
})

// Interceptor request
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Interceptor response
axiosClient.interceptors.response.use(
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

export default axiosClient
