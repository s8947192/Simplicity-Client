import React from 'react'

import styles from './settingsDropdown.css'
import settings from './assets/settings.svg'
import logout from './assets/logout.svg'

const SettingsDropdown = ({ isShown, onLogoutClick }) => {
  return !isShown
    ? <div />
    : (
      <ul className={styles.dropdownMenu}>
        <li>
          <span>settings</span>
          <img src={settings} />
        </li>
        <li onClick={onLogoutClick}>
          <span>logout</span>
          <img src={logout} />
        </li>
      </ul>
    )
}

export default SettingsDropdown
