import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.apiUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    if (process.client) {
      let token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth._token.local='))

      if (token) {
        token = decodeURIComponent(token.split('=')[1])
        config.headers['Authorization'] = token
      }
    }
    return config
  },
  function (error) {
    console.error(`${error}`)
    return Promise.reject(error)
  }
)

export default {
  // Posts
  async getBlogPosts(
    limit = null,
    offset = 0,
    tag = null,
    includeUnpublished = false,
    includeBody = false
  ) {
    let url = `/blog/posts?limit=${limit}&offset=${offset}&includeUnpublished=${includeUnpublished}&includeBody=${includeBody}`
    if (tag) url += `&tag=${tag}`
    let response = await apiClient.get(url)
    return response.data.posts
  },

  async getPostByID(postID) {
    let response = await apiClient.get(`/blog/posts/id/${postID}`)
    return response.data.post
  },

  async createPost(postData) {
    let response = await apiClient.post(`/blog/posts`, postData)
    return response.data.post
  },

  async updatePost(postID, postData) {
    let response = await apiClient.put(`/blog/posts/id/${postID}`, postData)
    return response.data.post
  },

  async deletePost(postID) {
    await apiClient.delete(`/blog/posts/id/${postID}`)
  },

  async createRandomPost() {
    let response = await apiClient.post(`/blog/posts/random`)
    return response.data.post
  },

  // Authors
  async getAuthors() {
    let response = await apiClient.get(`/blog/authors`)
    return response.data.authors
  },

  async getAuthorByID(id) {
    let response = await apiClient.get(`/blog/authors/id/${id}`)
    return response.data.author
  },

  async createAuthor(authorData) {
    let response = await apiClient.post(`/blog/authors`, authorData)
    return response.data.author
  },

  async updateAuthor(id, authorData) {
    let response = await apiClient.put(`/blog/authors/id/${id}`, authorData)
    return response.data.author
  },

  async deleteAuthor(id) {
    let response = await apiClient.delete(`/blog/authors/id/${id}`)
    return response
  },

  // Tags
  async getTags() {
    let response = await apiClient.get(`/blog/tags`)
    return response.data.tags
  },
}
