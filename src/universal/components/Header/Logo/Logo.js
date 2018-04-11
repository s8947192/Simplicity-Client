import React from 'react'

import logo from './assets/logo.svg'
import styles from './logo.css'

const Logo = () => (
  <div className={styles.wrapper}>
    <img className={styles.logo} src={logo} />
    <span className={styles.name}>Simplicity</span>
  </div>
)

export default Logo
