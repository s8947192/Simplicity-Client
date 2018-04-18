import { connect } from 'react-redux'

import Header1 from 'components/Header/Header1'
import { logout } from 'actions/auth'

// const mapStateToProps = state => ({
//   isReauthenticatePending: getIsReauthenticatePending(state),
//   user: getUser(state)
// })

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Header1)
