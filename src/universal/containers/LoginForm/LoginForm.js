import { connect } from 'react-redux'

import LoginForm from 'components/LoginForm/LoginForm'
import { login } from 'actions/auth'
import { getIsLoginPending, getLoginError } from 'selectors/auth'

const mapStateToProps = state => ({
  isLoginPending: getIsLoginPending(state),
  loginError: getLoginError(state)
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
