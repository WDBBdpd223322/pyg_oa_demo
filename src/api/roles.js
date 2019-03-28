import http from '@/utils/http'

export const getRolesList = () => {
  return http.get('/roles').then(res => res.data)
}
