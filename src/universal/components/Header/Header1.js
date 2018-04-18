import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import Logo from './Logo/Logo'
import PromoButton from './PromoButton/PromoButton'
import styles from './header.css'
import settings from './settings.svg'
import logout from './logout.svg'

export default class Header1 extends Component {
  constructor() {
    super()
    this.state = {
      isNavOpen: false,
      isDropdownShown: false
    }
  }

  onLogoutClick = () => this.props.logout()

  render() {
    const {
      isNavOpen,
      isDropdownShown
    } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.wrapperApp}>
          <div className={styles.navToggle} onClick={() => this.setState({ isNavOpen: !isNavOpen })}>
            <div className={cn(styles.nav, { [styles.open]: isNavOpen })}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.cellAppWrapper}>
            <div className={styles.cellApp}><Logo /></div>
            <div className={styles.premiumButton}>PREMIUM ACCESS</div>
          </div>
          <div className={styles.user}>
            <div className={styles.username}>Stan Makrushin</div>
          </div>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar} onClick={() => this.setState({ isDropdownShown: !isDropdownShown })} />
            {
              isDropdownShown && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <span>settings</span>
                    <img src={settings} />
                  </li>
                  <li onClick={this.onLogoutClick}>
                    <span>logout</span>
                    <img src={logout} />
                  </li>
                </ul>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
