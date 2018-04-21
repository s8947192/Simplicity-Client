import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import AuthPreloader from '../AuthPreloader/AuthPreloader'
import styles from './authButton.css'

export default ({
  name,
  isPending,
  isActive,
  onClick,
  error,
  errorLabel
}) => (
  <div className={styles.signInButtonContainer}>
    { isPending && <AuthPreloader /> }
    {
      !isPending && !error &&
        <div
          className={cn(styles.signInButton, {[styles.valid]: isActive})}
          onClick={isActive && onClick}
        >{ name }</div>
    }
    {
      error && (
        <div className={styles.errorContainer}>
          <div className={styles.errorMessage}>{ error }</div>
          <div
            className={cn(styles.signInButton, {[styles.valid]: isActive})}
            onClick={isActive && onClick}
          >{ errorLabel }</div>
        </div>
      )
    }
  </div>
)
