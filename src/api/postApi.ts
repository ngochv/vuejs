import { api } from '@/lib/api'
import type { Post } from '@/types/post'

const postApi = {
  getAll: (limit: number = 10) => {
    return api.get<Post[]>('/posts', { _limit: limit })
  },
}

export default postApi
