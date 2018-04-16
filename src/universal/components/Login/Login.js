import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './login.css'

import Auth from 'layouts/Auth/Auth'
import AuthTitle from 'components/UI/AuthTitle/AuthTitle'
import AuthInput from 'components/UI/AuthInput/AuthInput'
import AuthButton from 'components/UI/AuthButton/AuthButton'
import AuthAccessControl from 'components/UI/AuthAccessControl/AuthAccessControl'

export default class Login extends Component {
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
      isLoginPending,
      loginError
    } = this.props
    const {
      formValid,
      formErrors,
      emailValid,
      passwordValid
    } = this.state
    return (
      <Auth>
        <AuthTitle value='Sign In' />
        <AuthInput
          name='email'
          label='Email'
          placeholder='enter your email address'
          value={this.state.email}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          error={formErrors.email}
          isInFocus={this.state.focus === 'email'}
        />
        <AuthInput
          name='password'
          label='Password'
          placeholder='enter your password'
          value={this.state.password}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          error={formErrors.password}
          isInFocus={this.state.focus === 'password'}
        />
        <AuthAccessControl
          title='Keep me sign in'
          desc='if checked, current session is not going to be saved'
        />
        <AuthButton
          name='login'
          isPending={isLoginPending}
          isActive={formValid}
          onClick={this.onLogin}
          error={loginError}
          errorLabel='try login again'
        />
      </Auth>
    )
  }
}
