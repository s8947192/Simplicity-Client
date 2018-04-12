import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './loginForm.css'
import EmailSVG from './assets/EmailSVG'
import PasswordSVG from './assets/PasswordSVG'
import AuthPreloader from 'components/UI/AuthPreloader/AuthPreloader'

export default class LoginForm extends Component {
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
  // onChange = e => this.setState({ [e.target.id]: e.target.value })

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
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.nav}>
            <div className={cn(styles.navEl, styles.active)}>sign in</div>
            <div className={styles.navEl}>sign up</div>
          </div>
          <div className={styles.title}>Sign In</div>
          <div className={styles.elWrapper}>
            <label className={styles.label}>Email address</label>
            <div className={cn(styles.inputWrapper, styles.emailImg)}>
              <EmailSVG
                className={styles.inputImg}
                isInFocus={this.state.focus === 'email'}
              />
              <input id='email' type='text' name='email'
                className={cn(styles.input)}
                placeholder='enter your email address'
                value={this.state.email}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
            </div>
            { formErrors.email && <div className={styles.inputError}>{ formErrors.email }</div> }
          </div>
          <div className={styles.elWrapper}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <PasswordSVG
                className={styles.inputImg}
                isInFocus={this.state.focus === 'password'}
              />
              <input id='password' type='text' name='password'
                className={cn(styles.input)}
                placeholder='enter your password'
                value={this.state.password}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
            </div>
            { formErrors.password && <div className={styles.inputError}>{ formErrors.password }</div> }
          </div>
          <div className={styles.accessCheckContainer}>
            <div className={styles.checkboxWrapper}>
              <input className={styles.checkbox} id='accessCheckbox' type='checkbox' />
              <label htmlFor='accessCheckbox' />
            </div>
            <div className={styles.labelContaienr}>
              <div className={styles.labelTitle}>Not My Computer</div>
              <div className={styles.labelDesc}>if checked, current session is not going to be saved</div>
            </div>
          </div>
          <div className={styles.signInButtonContainer}>
            { isLoginPending && <AuthPreloader /> }
            {
              !isLoginPending && !loginError &&
                <div
                  className={cn(styles.signInButton, {[styles.valid]: formValid})}
                  onClick={formValid && this.onLogin}
                >login</div>
            }
            {
              loginError && (
                <div className={styles.errorContainer}>
                  <div className={styles.errorMessage}>{ loginError }</div>
                  <div
                    className={cn(styles.signInButton, {[styles.valid]: formValid})}
                    onClick={formValid && this.onLogin}
                  >try login again</div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
