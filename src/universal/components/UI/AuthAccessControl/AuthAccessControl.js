import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './authAccessControl.css'

export default ({ title, desc, link, onCheck }) => (
  <div className={styles.accessCheckContainer}>
    <div className={styles.checkboxWrapper}>
      <input className={styles.checkbox} onClick={onCheck} id='accessCheckbox' type='checkbox' />
      <label htmlFor='accessCheckbox' />
    </div>
    <div className={styles.labelContaienr}>
      <div className={styles.labelTitle}>{ title }</div>
      <div className={styles.labelDesc}>{ desc }</div>
      {
        link && (
          <div className={styles.linkWrapper}>
            <div className={styles.linkLabel}>read</div>
            <Link target='_blank' to={link} className={styles.link}>terms and conditions</Link>
          </div>
        )
      }
    </div>
  </div>
)
