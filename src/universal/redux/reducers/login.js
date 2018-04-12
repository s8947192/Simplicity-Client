import typeToReducer from 'type-to-reducer'

import { LOGIN } from 'actions/auth'

const initialState = {
  user: null,
  isPending: false,
  error: null
}

export default typeToReducer({
  [LOGIN]: {
    PENDING: () => ({
      ...initialState,
      isPending: true
    }),
    REJECTED: (state, action) => ({
      ...initialState,
      error: action.message,
      isPending: false
    })
  }
}, initialState)
