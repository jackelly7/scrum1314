import React from 'react';
import styles from './CurrentMoodInput.module.css';

const CurrentMoodInput: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>How Do You Feel Today?</h2>
      <div className={styles.separator} />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef46d86c50868a8404af00d006ea89139021a95c84b0784c879e333801a0ed22?placeholderIfAbsent=true&apiKey=49eabda1992149c1b97e50fbf1ac946d"
        alt="Mood selection options"
        className={styles.moodOptions}
      />
      <p className={styles.prompt}>Describe how you're feeling</p>
    </section>
  );
};

export default CurrentMoodInput;
