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

export const addUser = userInfo => {
  return http.post('/users', userInfo).then(res => res.data)
}

export const destroyUser = uId => {
  return http.delete(`/users/${uId}`).then(res => res.data)
}

export const getUserInfoById = id => {
  return http.get(`/users/${id}`).then(res => res.data)
}

export const editUser = (id, userInfo) => {
  return http.put(`/users/${id}`, userInfo).then(res => res.data)
}
