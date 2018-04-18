import typeToReducer from 'type-to-reducer'

import { REGISTRATION } from 'actions/auth'

const initialState = {
  isPending: false,
  error: null
}

export default typeToReducer({
  [REGISTRATION]: {
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
