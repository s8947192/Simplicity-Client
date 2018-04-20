import { takeLatest, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { authRequest, registrationRequest, logoutRequest } from 'api/auth'
import { LOGIN, REGISTRATION, LOGOUT } from 'actions/auth'
import { loginPending, loginRejected, loginFulfilled } from 'actions/auth'
import { registrationPending, registrationRejected } from 'actions/auth'

function* requestRegistration({ email, password }) {
  try {
    yield put(registrationPending())
    const { data: user } = yield call(registrationRequest, email, password)
    yield put(push(`/user/${user.id}`))
  } catch (e) {
    yield put(registrationRejected(e.response.data.error.details.messages.email[0]))
  }
}

function* requestLogin({ email, password }) {
  try {
    yield put(loginPending())
    const user = yield call(authRequest, email, password)
    localStorage.setItem('token', user.token)
    yield put(loginFulfilled(user))
    yield put(push(`/user/${user.userId}`))
  } catch (e) {
    yield put(loginRejected(e.response.data.error.message))
  }
}

function* requestLogout() {
  try {
    yield call(logoutRequest)
    localStorage.removeItem('token')
    yield put(push('/login'))
  } catch (e) {
    console.log({ e })
  }
}

export default function* watchRequestAuth() {
  yield takeLatest(LOGIN, requestLogin)
  yield takeLatest(REGISTRATION, requestRegistration)
  yield takeLatest(LOGOUT, requestLogout)
}
