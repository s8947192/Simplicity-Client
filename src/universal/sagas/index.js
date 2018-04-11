import { all, fork } from 'redux-saga/effects';

import watchRequestAuth from 'sagas/auth';
import watchRequestAlbums from 'sagas/albums';
import watchRequestPhotos from 'sagas/photos';

export default function* rootSaga() {
  yield all([
    fork(watchRequestAuth),
    fork(watchRequestAlbums),
    fork(watchRequestPhotos),
  ]);
}
