import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const NameKey = 'vue_admin_template_name'
const RoleKey = 'vue_admin_template_role'

export const getToken = () => {
  return Cookies.get(TokenKey)
}

export const setToken = token => {
  return Cookies.set(TokenKey, token)
}

export const removeToken = () => {
  return Cookies.remove(TokenKey)
}

export const setName = name => {
  return Cookies.set(NameKey, name)
}
export const getName = () => {
  return Cookies.get(NameKey)
}
export const setRole = role => {
  return Cookies.set(RoleKey, role)
}
export const getRole = () => {
  return Cookies.get(RoleKey)
}
