import axiosClient from './axios'
import type { Post } from '@/types/post'

const postApi = {
  getAll: async (): Promise<Post[]> => {
    const res = await axiosClient.get('/posts')
    return res.data
  },
}

export default postApi
