import React from 'react'
import { Route, Switch } from 'react-router'

import ProfileHeader from 'components/ProfileHeader/ProfileHeader'
import RouteMap from 'routes/RouteMap'

const Profile = ({ match }) => (
  <div>
    <ProfileHeader />
    <Switch>
      <Route exact path={`${match.path}/home`} component={RouteMap.Features} />
      <Route exact path={`${match.path}/students`} component={RouteMap.Features} />
      <Route exact path={`${match.path}/calendar`} component={RouteMap.Features} />
      <Route exact path={`${match.path}/invoices`} component={RouteMap.Features} />
      <Route exact path={`${match.path}/statistics`} component={RouteMap.Features} />
      <Route exact path={`${match.path}/notifications`} component={RouteMap.Features} />
      <Route exact path={`${match.path}/help`} component={RouteMap.Features} />
      <Route exact path={`${match.path}/settings`} component={RouteMap.Features} />
    </Switch>
  </div>
)

export default Profile
