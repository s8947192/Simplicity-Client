import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import styles from './authLayout.css'

const AuthLayout = props => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <NavLink to='/login' activeClassName={styles.active} className={styles.navEl}>sign in</NavLink>
        <NavLink to='/registration' activeClassName={styles.active} className={styles.navEl}>sign up</NavLink>
      </div>
      { props.children }
    </div>
  </div>
)

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
}

export default AuthLayout
