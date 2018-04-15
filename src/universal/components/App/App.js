import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header/Header'
import styles from './App.css'

const App = props => (
  <div className={styles.app}>
    <Header />
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
