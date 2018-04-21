import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import Logo from 'components/Logo/Logo'
import SettingsDropdown from './SettingsDropdown/SettingsDropdown'
import PremiumButton from './PremiumButton/PremiumButton'
import styles from './profileHeader.css'

export default class ProfileHeader extends Component {
  constructor() {
    super()
    this.state = {
      isNavOpen: false,
      isDropdownShown: false
    }
  }

  onLogoutClick = () => this.props.logout()
  toggleDropdown = () => this.setState({ isDropdownShown: !this.state.isDropdownShown })
  toggleNavBar = () => this.setState({ isNavOpen: !this.state.isNavOpen })

  render() {
    const {
      isNavOpen,
      isDropdownShown
    } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.wrapperApp}>
          <div className={styles.navToggle} onClick={this.toggleNavBar}>
            <div className={cn(styles.nav, { [styles.open]: isNavOpen })}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.cellAppWrapper}>
            <div className={styles.cellApp}>
              <Logo />
            </div>
            <PremiumButton />
          </div>
          <div className={styles.user}>
            <div className={styles.username}>Stan Makrushin</div>
          </div>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar} onClick={this.toggleDropdown} />
            <SettingsDropdown
              isShown={isDropdownShown}
              onLogoutClick={this.onLogoutClick}
            />
          </div>
        </div>
      </div>
    )
  }
}
