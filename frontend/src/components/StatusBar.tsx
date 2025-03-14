import React from 'react';
import styles from './StatusBar.module.css';

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBar}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandSpacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d90a5dc2b58802a5a0b84168307331d61b956e1a9def8820efdaa169f919a9c2?placeholderIfAbsent=true&apiKey=49eabda1992149c1b97e50fbf1ac946d"
            alt="Signal indicator"
            className={styles.signalIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d46be684d7e99260dfbe33c619a1dd17f6e6f1556c09e886dbeecb94e7b56b?placeholderIfAbsent=true&apiKey=49eabda1992149c1b97e50fbf1ac946d"
            alt="Battery indicator"
            className={styles.batteryIcon}
          />
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
