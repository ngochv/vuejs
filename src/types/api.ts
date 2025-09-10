// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiResponse<T = any> {
  data: T
  status: number // HTTP status (200, 400, 500...)
  code?: number
  message?: string
}

export interface ApiError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  status: number
  code?: number
  message: string
}
