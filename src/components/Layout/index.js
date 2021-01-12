import React from 'react'
import styles from './layout.module.scss'
import {Italy } from 'assets/svg'
import ErrorBoundary from "../ErrorBoundary"
export const Layout = ({ children }) => (
 
  <div className={styles.Layout}>
    <div className={styles.LayoutBg}>
      <h1>Welcome</h1>
      <Italy />
    </div>
    <div className={styles.LayoutContent}> {children}</div>
  </div>
 
)
export default Layout
