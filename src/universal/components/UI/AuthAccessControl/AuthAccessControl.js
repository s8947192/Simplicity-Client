import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './authAccessControl.css'

export default () => (
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
)
