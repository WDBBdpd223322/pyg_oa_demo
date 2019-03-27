import http from '@/utils/http'

export const getUserList = ({ pagenum = 1, pagesize = 2, query = '' }) => {
  return http.get('/users', {
    params: {
      pagenum,
      pagesize,
      query
    }
  }).then(res => res.data)
}

export const changeState = (id, state) => {
  return http.put(`/users/${id}/state/${state}`).then(res => res.data)
}
