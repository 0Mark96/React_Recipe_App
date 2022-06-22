import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Error.module.scss'
const Error = () => {
  return (
    <div className={styles.errorContainer}>
        <span>404</span>
        <h1>Page Not Found</h1>
        <Link to='/'>Home Page</Link>
    </div>
  )
}

export default Error