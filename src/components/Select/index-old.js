import React, { useState, useRef, useCallback, useEffect } from "react";
import { DropDown } from "assets/svg";
import styles from "./select.module.scss";
const Select = ({ options, setActive, active }) => {
  const [isSelect, setIsSelect] = useState(false);
  let activeOption = {};
  if (options) {
    activeOption = options.find((item) => item === active);
  }
  const node = useRef(null);
  const handleHide = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setIsSelect(false);
        return;
      }
    },
    [setIsSelect]
  );

  const handleClick = useCallback(
    (event) => {
      if (node.current && !node.current.contains(event.target)) {
        setIsSelect(false);
        return;
      }
    },
    [setIsSelect]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleHide, true);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("keydown", handleHide, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, [handleClick, handleHide]);

  return (
    <div className={styles.Select} ref={node}>
      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => setIsSelect(!isSelect)}
        onClick={() => setIsSelect(!isSelect)}
        className={styles.SelectActive}
      >
        {activeOption} <DropDown />
      </div>
      {isSelect && (
        <div className={styles.SelectOptions}>
          {options.map(
            ({ option }) =>
              option !== active && (
                <div
                  tabIndex={0}
                  role="button"
                  className={styles.option}
                  key={option}
                  onKeyDown={() => {
                    setActive(option);
                    return setIsSelect(false);
                  }}
                  onClick={() => {
                    setActive(option);
                    return setIsSelect(false);
                  }}
                >
                  {option}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
