import http from '@/utils/http'

export const getRightsList = (type = 'tree') => {
  return http.get(`/rights/${type}`).then(res => res.data)
}
