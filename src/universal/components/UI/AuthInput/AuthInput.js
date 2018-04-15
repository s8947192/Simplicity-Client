import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './authInput.css'
import EmailSVG from './assets/EmailSVG'
import PasswordSVG from './assets/PasswordSVG'

export default ({
  name,
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  isInFocus
}) => (
  <div className={styles.container}>
    <label className={styles.label}>{ label }</label>
    <div className={styles.inputWrapper}>
      { name === 'email' && <EmailSVG className={styles.inputImg} isInFocus={isInFocus} /> }
      { name === 'password' && <PasswordSVG className={styles.inputImg} isInFocus={isInFocus} /> }
      <input id={name} type='text' name={name}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
    { error && <div className={styles.inputError}>{ error }</div> }
  </div>
)
