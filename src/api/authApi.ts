import type { LoginResponse } from '@/types/auth'
import type { ApiResponse } from '@/types/api'

export async function loginApi(
  username: string,
  password: string
): Promise<ApiResponse<LoginResponse>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        const fakeResponse: ApiResponse<LoginResponse> = {
          data: {
            token: 'fake-jwt-token-123456',
            user: { id: 1, username, role: 'admin' },
          },
          status: 200,
        }
        resolve(fakeResponse)
      } else {
        reject({ status: 401, message: 'Sai tài khoản hoặc mật khẩu' })
      }
    }, 800)
  })
}
