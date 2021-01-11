import React from "react";
import styles from "./module.scss";

const Button = ({ type, children, text, onClick, variant, ...rest }) => (
  <button
    type={type || "button"}
    onClick={onClick}
    className={[styles.Button, styles[variant]].join(" ")}
    {...rest}
  >
    {text || children}
  </button>
);
export default Button;
