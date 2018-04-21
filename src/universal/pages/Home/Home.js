import React from 'react'
import { Route, Switch } from 'react-router'

import HomeHeader from 'components/HomeHeader/HomeHeader'
import RouteMap from 'routes/RouteMap'

const Home = ({ match }) => (
  <div>
    <HomeHeader />
    <Switch>
      <Route exact path='/features' component={RouteMap.Features} />
      <Route exact path='/pricing' component={RouteMap.Pricing} />
      <Route exact path='/contacts' component={RouteMap.Contacts} />
      <Route exact path='/login' component={RouteMap.Login} />
      <Route exact path='/registration' component={RouteMap.Registration} />
    </Switch>
  </div>
)

export default Home
