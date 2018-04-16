import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './authTitle.css'

export default ({ value }) => <div className={styles.title}>{ value }</div>
