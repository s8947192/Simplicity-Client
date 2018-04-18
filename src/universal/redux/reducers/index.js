import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import login from './login'
import registration from './registration'

export default combineReducers({
  login,
  registration,
  router: routerReducer
})
