import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'

import AppContainer from 'containers/App/AppContainer'
import RouteMap from './RouteMap'

const Routes = props => {
  const { location } = props
  return (
    <AppContainer>
      <Switch>
        <Route path='/user/:userId' component={RouteMap.Profile} />
        <Route path='/' component={RouteMap.Home} />
      </Switch>
    </AppContainer>
  )
}

Routes.propTypes = {
  location: PropTypes.shape({}).isRequired,
}

export default Routes
