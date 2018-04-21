import { connect } from 'react-redux'

import ProfileHeader from 'components/ProfileHeader/ProfileHeader'
import { logout } from 'actions/auth'

// const mapStateToProps = state => ({
//   isReauthenticatePending: getIsReauthenticatePending(state),
//   user: getUser(state)
// })

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(ProfileHeader)
