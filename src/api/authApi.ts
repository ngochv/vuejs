import type { LoginResponse } from '@/types/auth'

export async function loginApi(username: string, password: string): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        const fakeResponse: LoginResponse = {
          token: 'fake-jwt-token-123456',
          user: {
            id: 1,
            username,
            role: 'admin',
          },
        }
        resolve(fakeResponse)
      } else {
        reject(new Error('Sai tài khoản hoặc mật khẩu'))
      }
    }, 800) // delay
  })
}
