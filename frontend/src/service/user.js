import request from 'src/service/request'

export function ListarUsuarios(params) {
  return request({
    url: '/users/',
    method: 'get',
    params
  })
}

export function CriarUsuario(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}

export function AdminListarUsuarios (params) {
  return request({
    url: '/admin/users/',
    method: 'get',
    params
  })
}

export function UpdateUsuarios(userId, data) {
  return request({
    url: `/users/${userId}`,
    method: 'put',
    data
  })
}

export function AdminUpdateUsuarios(userId, data) {
  return request({
    url: `/admin/users/${userId}`,
    method: 'put',
    data
  })
}

export function UpdateConfiguracoesUsuarios(userId, data) {
  return request({
    url: `/users/${userId}/configs`,
    method: 'put',
    data
  })
}

export function DadosUsuario(userId) {
  return request({
    url: `/users/${userId}`,
    method: 'get'
  })
}

export function DeleteUsuario(userId) {
  return request({
    url: `/users/${userId}`,
    method: 'delete'
  })
}

export function ListarUsuariosChatInterno(params) {
  return request({
    url: '/users/chat-interno/',
    method: 'get',
    params
  })
}

export function getQuantidadeUsuarios() {
  return request({
    url: '/admin/userstotal',
    method: 'get'
  })
}

export function getMediaAvaliacao(userId) {
  return request({
    url: `/users/average-rating/${userId}`,
    method: 'get'
  })
}
