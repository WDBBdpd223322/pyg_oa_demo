const TOKEN_KEY = 'token'

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY)
}

export const setToken = token => {
  window.localStorage.setItem(TOKEN_KEY, token)
}
