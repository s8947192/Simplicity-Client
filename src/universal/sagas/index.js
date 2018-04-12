import { all, fork } from 'redux-saga/effects'

import watchRequestAuth from 'sagas/auth'

export default function* rootSaga() {
  yield all([
    fork(watchRequestAuth)
  ])
}
