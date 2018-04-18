import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './registration.css'

import Auth from 'layouts/Auth/Auth'
import AuthTitle from 'components/UI/AuthTitle/AuthTitle'
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
      passwordRepeat: '',
      formErrors: { email: '', password: '', passwordRepeat: '' },
      emailValid: false,
      passwordValid: false,
      passwordRepeatValid: false,
      termsAccepted: false,
      formValid: false
    }
  }

  static propTypes = {
    registrate: PropTypes.func.isRequired,
    isRegistrationPending: PropTypes.bool.isRequired,
    registrationError: PropTypes.string
  }

  onBlur = () => this.setState({ focus: '' })
  onFocus = e => this.setState({ focus: e.target.id })

  onChange = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value}, () => { this.validateField(name, value) })
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid
    let passwordRepeatValid = this.state.passwordRepeatValid

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : 'email is invalid'
        break
      case 'password':
        passwordValid = value.length >= 6
        fieldValidationErrors.password = passwordValid ? '': 'password is too short'
        passwordRepeatValid = value === this.state.passwordRepeat
        fieldValidationErrors.passwordRepeat = passwordRepeatValid ? '': 'passwords don\'t match'
        break
      case 'passwordRepeat':
        const ruleLength = value.length >= 6
        const ruleMatch = value === this.state.password
        passwordRepeatValid = ruleLength && ruleMatch
        fieldValidationErrors.passwordRepeat = !ruleMatch ? 'passwords don\'t match' : !ruleLength ? 'password is too short' : ''
        break
      default:
        break
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      passwordRepeatValid: passwordRepeatValid
    }, this.validateForm)
  }

  validateForm = () => {
    const { emailValid, passwordValid, passwordRepeatValid, termsAccepted } = this.state
    this.setState({
      formValid: emailValid && passwordValid && passwordRepeatValid && termsAccepted
    })
  }

  toggleCheck = () => {
    this.setState({
      termsAccepted: !this.state.termsAccepted
    }, this.validateForm)
  }

  onRegister = () => {
    const { email, password } = this.state
    this.props.registrate(email, password)
  }

  render() {
    const {
      isRegistrationPending,
      registrationError
    } = this.props
    const {
      formValid,
      formErrors,
      emailValid,
      passwordValid,
      email,
      password,
      passwordRepeat,
      focus
    } = this.state
    return (
      <Auth>
        <AuthTitle value='Sign Up' />
        <AuthInput
          name='email'
          label='Email'
          placeholder='enter your email address'
          value={email}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          error={email && formErrors.email}
          isInFocus={focus === 'email'}
        />
        <AuthInput
          name='password'
          label='Password'
          placeholder='enter new password'
          value={password}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          error={password && formErrors.password}
          isInFocus={focus === 'password'}
        />
        <AuthInput
          name='passwordRepeat'
          placeholder='repeat password'
          value={passwordRepeat}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          error={passwordRepeat && formErrors.passwordRepeat}
          isInFocus={focus === 'passwordRepeat'}
        />
        <AuthAccessControl
          onCheck={this.toggleCheck}
          title='Terms and  conditions'
          desc='By signing up, you are accepting Simplicity terms and conditions'
          link='terms'
        />
        <AuthButton
          name='register'
          isPending={isRegistrationPending}
          isActive={formValid}
          onClick={this.onRegister}
          error={registrationError}
          errorLabel='try register again'
        />
      </Auth>
    )
  }
}
