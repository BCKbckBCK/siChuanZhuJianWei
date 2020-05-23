import request from '@/utils/request'

export const login = params => {
  return request({
    url: '/auth/login',
    method: 'get',
    params
  })
}

export const logout = () => {
  return request({
    url: '/auth/logout',
    method: 'get'
  })
}

export const getUserList = data => {
    return request({
      url: '/user/search',
      method: 'post',
      data
    })
  }
export const deleteUser = id => {
  return request({
    url: '/user/' + id,
    method: 'delete'
  })
}
export const getUserInfo = id => {
  return request({
    url: '/user/' + id,
    method: 'get'
  })
}
export const getUserDetailInfo = id => {
  return request({
    url: '/user/detail/' + id,
    method: 'get'
  })
}
export const addUser = data => {
    return request({
      url: '/user',
      method: 'post',
      data
    })
  }
export const editUser = data => {
    return request({
      url: '/user',
      method: 'put',
      data
    })
  }
