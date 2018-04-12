export const LOGIN = 'LOGIN'
export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_REJECTED = 'LOGIN_REJECTED'

export const login = (email, password) => ({ type: LOGIN, email, password })
export const loginPending = () => ({ type: LOGIN_PENDING })
export const loginRejected = message => ({ type: LOGIN_REJECTED, message })
