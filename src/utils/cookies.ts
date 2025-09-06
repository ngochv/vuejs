import Cookies from 'js-cookie'

export function saveToken(token: string) {
  Cookies.set('access_token', token, { expires: 1 }) // 1 day
}

export function getToken() {
  return Cookies.get('access_token')
}

export function clearToken() {
  Cookies.remove('access_token')
}
