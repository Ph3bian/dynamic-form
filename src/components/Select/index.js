import React from "react";
import styles from "./select.module.scss";
const Select = ({ options, defaultValue, label, ...rest }) => {
  return (
    <div className={styles.Select} tabIndex={0}>
      <label htmlFor={`listbox-${label}`}>{label}</label>
      <select
        id={`listbox-${label}`}
        value={defaultValue}
        {...rest}
        data-testid={'TextSelect'}
       
      >
        <option>Select {label}</option>
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};
export default Select;
