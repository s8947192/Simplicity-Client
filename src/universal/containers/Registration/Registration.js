import { connect } from 'react-redux'

import Registration from 'components/Registration/Registration'
// import { login } from 'actions/auth'
// import { getIsLoginPending, getLoginError } from 'selectors/auth'

// const mapStateToProps = state => ({
//   isLoginPending: getIsLoginPending(state),
//   loginError: getLoginError(state)
// })
//
// const mapDispatchToProps = dispatch => ({
//   login: (email, password) => dispatch(login(email, password))
// })

export default connect(null, null)(Registration)
