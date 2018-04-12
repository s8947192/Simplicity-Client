import { fetch } from 'utils/fetch'

export const authRequest = (email, password) => {
  return fetch.post('CustomUsers/login', {
    email,
    password
  }).then(response => ({
    token: response.data.id,
    userId: response.data.userId
  }))
}
