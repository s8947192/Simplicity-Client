import { connect } from 'react-redux'

import Registration from 'components/Registration/Registration'
import { registration } from 'actions/auth'
import { getIsRegistrationPending, getRegistrationError } from 'selectors/auth'

const mapStateToProps = state => ({
  isRegistrationPending: getIsRegistrationPending(state),
  registrationError: getRegistrationError(state)
})

const mapDispatchToProps = dispatch => ({
  registrate: (email, password) => dispatch(registration(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
