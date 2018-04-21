import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'assets/favicon.ico'
import Header from 'components/Header/Header'
import styles from './App.css'

export default class App extends Component {
  // componentWillMount() {
  //   this.props.reAuthenticate()
  // }
  render() {
    const {
      user, children
    } = this.props
    return (
      <div className={styles.app}>
        { children }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}
