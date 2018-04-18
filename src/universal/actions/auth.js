export const LOGIN = 'LOGIN'
export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_REJECTED = 'LOGIN_REJECTED'
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED'

export const REGISTRATION = 'REGISTRATION'
export const REGISTRATION_PENDING = 'REGISTRATION_PENDING'
export const REGISTRATION_REJECTED = 'REGISTRATION_REJECTED'

export const LOGOUT = 'LOGOUT'
export const LOGOUT_PENDING = 'LOGOUT_PENDING'
export const LOGOUT_REJECTED = 'LOGOUT_REJECTED'
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED'

export const login = (email, password) => ({ type: LOGIN, email, password })
export const loginPending = () => ({ type: LOGIN_PENDING })
export const loginRejected = message => ({ type: LOGIN_REJECTED, message })
export const loginFulfilled = user => ({ type: LOGIN_FULFILLED, user })

export const registration = (email, password) => ({ type: REGISTRATION, email, password })
export const registrationPending = () => ({ type: REGISTRATION_PENDING })
export const registrationRejected = message => ({ type: REGISTRATION_REJECTED, message })

export const logout = () => ({ type: LOGOUT })
export const logoutPending = () => ({ type: LOGOUT_PENDING })
export const logoutRejected = () => ({ type: LOGOUT_REJECTED })
