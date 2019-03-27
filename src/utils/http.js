import axios from 'axios'
import { getToken } from '@/utils/auth'
import router from '@/routes/router'

const http = axios.create({
  baseURL: 'http://localhost:8888/api/private/v1'
})

http.interceptors.request.use(function (config) {
  if (config.url !== '/login') {
    config.headers['Authorization'] = getToken()
  }
  return config
})

http.interceptors.response.use(function (response) {
  const path = router.currentRoute.path
  if (response.data.meta.status === 401) {
    return router.push(`/login?redirect=${path}`)
  }
  return response
})

export default http
