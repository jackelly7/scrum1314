import React from "react";
import styles from "./InputDesign.module.css";

interface CheckboxOptionProps {
  id: string;
  label: string;
  description: string;
  defaultChecked?: boolean;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({
  id,
  label,
  description,
  defaultChecked = false,
}) => {
  return (
    <div className={styles.checkboxOption}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox}
        defaultChecked={defaultChecked}
      />
      <div className={styles.checkboxContent}>
        <label htmlFor={id} className={styles.checkboxLabel}>
          {label}
        </label>
        <p className={styles.checkboxDescription}>{description}</p>
      </div>
    </div>
  );
};

export default CheckboxOption;
