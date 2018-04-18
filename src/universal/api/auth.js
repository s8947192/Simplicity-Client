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

export const registrationRequest = (email, password) => {
  return fetch.post('CustomUsers', {
    email,
    password
  })
}

export const logoutRequest = () => {
  console.log(localStorage.getItem('token'))
  return fetch.post('CustomUsers/logout')
}

export const reAuthenticateRequest = userId => fetch.get(`CustomUsers/${userId}`)
  .then(response => response.data)
