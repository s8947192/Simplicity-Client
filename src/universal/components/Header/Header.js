import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from './Logo/Logo'
import PromoButton from './PromoButton/PromoButton'
import styles from './header.css'
import cn from 'classnames'

const Header = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.cell}><Logo /></div>
      <NavLink to='/features' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>features</NavLink>
      <NavLink to='/pricing' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>pricing</NavLink>
      <NavLink to='/contacts' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>contacts</NavLink>
      { /*
          <NavLink to='/registration' activeClassName={styles.active} className={styles.cell}><PromoButton /></NavLink>
        */ }
      <NavLink to='/login' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>login</NavLink>
      <NavLink to='/registration' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>registration</NavLink>
    </div>
  </div>
)

export default Header
