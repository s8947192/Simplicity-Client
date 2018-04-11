import React, { Component } from 'react'
import cn from 'classnames'

import styles from './loginForm.css'
import EmailSVG from './assets/EmailSVG'
import PasswordSVG from './assets/PasswordSVG'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: '',
      email: '',
      password: ''
    }
  }

  onBlur = () => this.setState({ focus: '' })
  onFocus = e => this.setState({ focus: e.target.id })
  onChange = e => this.setState({ [e.target.id]: e.target.value })

  render() {
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
              <input id='email' type='text'
                className={styles.input}
                placeholder='enter your email address'
                value={this.state.email}
                value={this.state.email}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
            </div>
          </div>
          <div className={styles.elWrapper}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <PasswordSVG
                className={styles.inputImg}
                isInFocus={this.state.focus === 'password'}
              />
              <input id='password' type='text'
                className={styles.input}
                placeholder='enter your password'
                value={this.state.password}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
            </div>
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
            <div className={styles.signInButton}>login</div>
          </div>
        </div>
        <div className={styles.banner} />
      </div>
    )
  }
}
