import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import Login from 'modules/Auth/containers/Login'

export default class LoginPage extends Component {
  render() {
    return (
      <AuthLayout>
        <Login />
      </AuthLayout>
    )
  }
}
