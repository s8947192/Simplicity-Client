import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import Logo from 'components/Logo/Logo'
import styles from './homeHeader.css'

const HomeHeader = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.cell}><Logo /></div>
      <NavLink to='/features' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>features</NavLink>
      <NavLink to='/pricing' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>pricing</NavLink>
      <NavLink to='/contacts' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>contacts</NavLink>
      <NavLink to='/login' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>login</NavLink>
      <NavLink to='/registration' activeClassName={styles.active} className={cn(styles.cell, styles.animated)}>registration</NavLink>
    </div>
  </div>
)

export default HomeHeader
