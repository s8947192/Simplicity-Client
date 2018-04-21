import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import Registration from 'modules/Auth/containers/Registration'

export default class RegistrationPage extends Component {
  render() {
    return (
      <AuthLayout>
        <Registration />
      </AuthLayout>
    )
  }
}
