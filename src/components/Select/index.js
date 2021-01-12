import React from "react";
import styles from "./select.module.scss";
const Select = ({ options, defaultValue, label, error, ...rest }) => {
  return (
    <div className={styles.Select} tabIndex={0}>
      <label htmlFor={`select${label}`}>{label}</label>
      <div>
        <select
          id={`select${label}`}
          value={defaultValue}
          {...rest}
          data-testid={"TextSelect"}
          className={error && "error"}
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
        {error && (
          <div>
            <span className={styles.InputError}> {error}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Select;
