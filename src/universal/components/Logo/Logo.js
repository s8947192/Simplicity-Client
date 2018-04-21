import React from 'react'

import logo from './assets/logo.svg'
import styles from './logo.css'

const Logo = () => (
  <div className={styles.wrapper}>
    <img className={styles.logo} src={logo} />
    <span className={styles.name}>
      <span>
        <span className={styles.titleMainPart}>Simpli</span>
        <span className={styles.titleLeadingPart}>city</span>
      </span>
      <span className={styles.desc}>online scheduling</span>
    </span>
  </div>
)

export default Logo
