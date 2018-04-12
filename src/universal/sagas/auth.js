import { takeLatest, call, put } from 'redux-saga/effects'

import { authRequest } from 'api/auth'
import { LOGIN } from 'actions/auth'
import { loginPending, loginRejected } from 'actions/auth'

function* requestLogin({ email, password }) {
  try {
    yield put(loginPending())
    const user = yield call(authRequest, email, password)
    console.log(user)
  } catch (e) {
    console.log({ e })
    yield put(loginRejected(e.response.data.error.message))
  }
}

export default function* watchRequestAuth() {
  yield takeLatest(LOGIN, requestLogin)
}
