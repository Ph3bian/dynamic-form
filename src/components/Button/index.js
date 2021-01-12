import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

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

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "",
  text: "Submit",
  onClick: () => null,
};

export default Button;
