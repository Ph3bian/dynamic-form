import React from "react";
import styles from "./layout.module.scss";
import { Italy } from "assets/svg";
import ErrorBoundary from "../ErrorBoundary";
export const Layout = ({ children }) => (
  <ErrorBoundary>
    <div className={styles.Layout}>
      <div className={styles.LayoutBg}>
        <Italy />
      </div>
      <div className={styles.LayoutContent}> {children}</div>
    </div>
  </ErrorBoundary>
);
export default Layout;
