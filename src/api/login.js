import http from '@/utils/http'

export const userLogin = function (data) {
  return http.post('/login', data).then(res => res.data)
}
