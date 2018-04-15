import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './registration.css'

import Auth from 'layouts/Auth/Auth'
import AuthInput from 'components/UI/AuthInput/AuthInput'
import AuthButton from 'components/UI/AuthButton/AuthButton'
import AuthAccessControl from 'components/UI/AuthAccessControl/AuthAccessControl'

export default class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: '',
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isLoginPending: PropTypes.bool.isRequired,
    loginError: PropTypes.string
  }

  onBlur = () => this.setState({ focus: '' })
  onFocus = e => this.setState({ focus: e.target.id })

  onChange = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value}, () => { this.validateField(name, value) })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : 'email is invalid'
        break
      case 'password':
        passwordValid = value.length >= 6
        fieldValidationErrors.password = passwordValid ? '': 'password is too short'
        break
      default:
        break
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm)
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid})
  }

  onLogin = () => {
    const { email, password } = this.state
    this.props.login(email, password)
  }

  render() {
    const {
      formValid,
      formErrors,
      emailValid,
      passwordValid
    } = this.state
    return (
      <Auth>
        <div className={styles.title}>Sign In</div>
      </Auth>
    )
  }
}
