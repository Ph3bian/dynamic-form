import React from "react";
import styles from "./select.module.scss";
const Select = ({ options, defaultValue, label, error, ...rest }) => {
  return (
    <div className={styles.Select} tabIndex={0}>
      <label htmlFor={`listbox-${label}`}>{label}</label>
      <div>
        <select
          id={`listbox-${label}`}
          value={defaultValue}
          {...rest}
          data-testid={"TextSelect"}
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
