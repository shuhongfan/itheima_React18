// 封装基于ls存取删三个方法

const TOKENKEY = 'token_key'

function setToken (token) {
  return localStorage.setItem(TOKENKEY, token)
}

function getToken () {
  return localStorage.getItem(TOKENKEY)
}

function removeToken () {
  return localStorage.removeItem(TOKENKEY)
}

export {
  setToken,
  getToken,
  removeToken
}