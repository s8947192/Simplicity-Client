/* eslint global-require: 0 */

import React from 'react'
import { PropTypes } from 'prop-types'

function syncComponent(chunkName, mod) {
  const Component = mod.default ? mod.default : mod // es6 module compat

  function SyncComponent(props) {
    if (props.staticContext && props.staticContext.splitPoints) {
      // PropTypes are set and wrong error is shown
      /* eslint react/prop-types: 0 */
      props.staticContext.splitPoints.push(chunkName)
    }

    return <Component {...props} />
  }

  SyncComponent.defaultProps = {
    staticContext: []
  }

  SyncComponent.propTypes = {
    staticContext: PropTypes.arrayOf(PropTypes.shape({ splitPoints: PropTypes.array }))
  }

  return SyncComponent
}

export const Home = syncComponent('Home', require('components/Home/Home'))
export const Login = syncComponent('Login', require('containers/Login/Login'))
export const Registration = syncComponent('Registration', require('containers/Registration/Registration'))
export const Profile = syncComponent('Profile', require('modules/Profile/components/Profile'))
