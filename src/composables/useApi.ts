import { ref } from 'vue'
import type { ApiResponse, ApiError } from '@/types/api'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useApi<T>(
  apiFn: (...args: any[]) => Promise<ApiResponse<T>>,
  transform?: (data: T) => T
) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const status = ref<number | null>(null)
  const code = ref<number | null>(null)
  const message = ref<string | null>(null)

  const execute = async (...args: any[]) => {
    loading.value = true
    error.value = null
    try {
      const res = await apiFn(...args)
      status.value = res.status
      code.value = res.code ?? null
      message.value = res.message ?? null
      data.value = transform ? transform(res.data) : res.data
      return res
    } catch (err: any) {
      const apiError = err as ApiError
      error.value = apiError.message ?? 'Unknown error'
      status.value = apiError.status ?? null
      code.value = apiError.code ?? null
      message.value = apiError.message ?? null
      throw apiError
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, status, code, message, execute }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
