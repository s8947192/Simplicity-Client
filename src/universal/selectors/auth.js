export const getIsLoginPending = state => state.login.isPending
export const getLoginError = state => state.login.error

export const getIsRegistrationPending = state => state.registration.isPending
export const getRegistrationError = state => state.registration.error

export const getUser = state => state.login.user
export const getIsReauthenticatePending = state => state.login.isTokenPending
