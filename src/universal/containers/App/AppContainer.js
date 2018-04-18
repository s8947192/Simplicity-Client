import { connect } from 'react-redux'

import App from 'components/App/App'
import { getUser } from 'selectors/auth'
import { reAuthenticate } from 'actions/auth'

const mapStateToProps = state => ({
  user: getUser(state)
})

const mapDispatchToProps = dispatch => ({
  reAuthenticate: () => dispatch(reAuthenticate())
})

export default connect(mapStateToProps, null)(App)
