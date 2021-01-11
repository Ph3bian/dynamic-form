import React, { Fragment } from "react";
import styles from "./select.module.scss";
const Select = ({ options, defaultValue, label, ...rest }) => {
  console.log(options);
  return (
    <div  className={styles.Select} >
      <label>{label}</label>
      <select value={defaultValue} {...rest}>
        <option>Select {label}</option>
        {options &&
          options.length > 0 &&
          options.map((option) => <option value={option}>{option}</option>)}
      </select>
    </div>
  );
};
export default Select;
