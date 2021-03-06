import typeToReducer from 'type-to-reducer'

import { LOGIN } from 'actions/auth'

const initialState = {
  user: null,
  isPending: false,
  isTokenPending: false,
  error: null
}

export default typeToReducer({
  [LOGIN]: {
    PENDING: () => ({
      ...initialState,
      isPending: true
    }),
    FULFILLED: (state, action) => ({
      ...initialState,
      user: action.user,
      isPending: false,
      error: null
    }),
    REJECTED: (state, action) => ({
      ...initialState,
      error: action.message,
      isPending: false
    })
  }
}, initialState)
