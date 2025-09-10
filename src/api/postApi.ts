import { api } from '@/lib/api'
import type { Post } from '@/types/post'

const postApi = {
  getAll: () => api.get<Post[]>('/posts?_limit=10'),
}

export default postApi
