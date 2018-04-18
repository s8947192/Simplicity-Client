import React from 'react'
import styles from './Home.css'
import Header from 'components/Header/Header'
import RouteMap from 'routes/RouteMap'
import { Route } from 'react-router'

const Home = ({ match }) => (
  <div>
    <Header />
    <div>HOME PAGE</div>
    <Route exact path='/login' component={RouteMap.Login} />
    <Route exact path='/registration' component={RouteMap.Registration} />
  </div>
)

export default Home
