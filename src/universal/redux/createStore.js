/* eslint global-require: 0 */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSaga, { END } from 'redux-saga'

import rootReducer from 'redux/reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

export default (history, reduxState = undefined) => {
  const saga = createSaga()
  const router = routerMiddleware(history)

  const enhancer = composeWithDevTools(applyMiddleware(saga, router))

  const store = createStore(
    rootReducer,
    reduxState,
    enhancer,
  )

  store.runSaga = saga.run
  store.closeSagas = () => store.dispatch(END)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('redux/reducers/index', () => {
      store.replaceReducer('redux/reducers/index').default
    })
  }

  return store
}
