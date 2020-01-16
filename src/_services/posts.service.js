import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const postsService = {
  getAll,
  getPorId,
  register,
  update,
  delete: _delete
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/posts`, requestOptions).then(handleResponse)
}
 function getPorId () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/posts/1`, requestOptions).then(handleResponse)
}
function register (posts) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(posts)
  }
  return fetch(`${config.apiUrl}/posts`, requestOptions).then(handleResponse)
}

function update (posts) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(posts)
  }
  return fetch(`${config.apiUrl}/posts/1`, requestOptions).then(handleResponse)
}

function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/posts/1/${id}`, requestOptions).then(handleResponse)
} 

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        userService.logout()
        location.reload(true)
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
