import React from 'react';
import styles from './PastMoodHistory.module.css';

const PastMoodHistory: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Past Days</h2>
      <div className={styles.separator} />

      <div className={styles.historyEntry}>
        <time className={styles.date}>11/8</time>
        <p className={styles.description}>I felt happy</p>
      </div>

      <div className={styles.historyEntry}>
        <time className={styles.date}>11/9</time>
        <div className={styles.entryWithImage}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7c86b7033717254d2cd06ad0eec1c1961810fcb4969690148fdf3fee22eb83f?placeholderIfAbsent=true&apiKey=49eabda1992149c1b97e50fbf1ac946d"
            alt="Mood indicator"
            className={styles.moodIcon}
          />
          <p className={styles.description}>I did my goals.</p>
        </div>
      </div>
    </section>
  );
};

export default PastMoodHistory;
