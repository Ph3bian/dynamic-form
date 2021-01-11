import React from 'react'
import styles from './layout.module.scss'
import {Italy } from '../../assets/svg'

export const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <div className={styles.LayoutBg}>
      <h2>Welcome</h2>
      <Italy />
    </div>
    <div className={styles.LayoutContent}> {children}</div>
  </div>
)
export default Layout
