import React from 'react'

import Logo from './Logo/Logo'
import PromoButton from './PromoButton/PromoButton'
import styles from './header.css'
import cn from 'classnames'

const Header = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.cell}><Logo /></div>
      <div className={cn(styles.cell, styles.animated)}>features</div>
      <div className={cn(styles.cell, styles.active)}>pricing</div>
      <div className={cn(styles.cell, styles.animated)}>contacts</div>
      <div className={styles.cell}><PromoButton /></div>
      <div className={cn(styles.cell, styles.animated)}>login</div>
    </div>
  </div>
)

export default Header
