import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const comentariosService = {
  getAll
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/comments`, requestOptions).then(handleResponse)
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
