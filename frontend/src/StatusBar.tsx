import React from "react";
import styles from "./InputDesign.module.css";

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBar}>
      <time className={styles.time}>9:41</time>
      <div className={styles.indicators}>
        <span className={styles.indicator}></span>
        <span className={styles.indicator}></span>
      </div>
    </header>
  );
};

export default StatusBar;
