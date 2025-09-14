import { api } from '@/lib/api'
import type { Post } from '@/types/post'

const demoApi = {
  getDemo: (params: any) => {
    return api.get<Post[]>('/get', params)
  },
  uploadFile: () => '/post',
}

export default demoApi
