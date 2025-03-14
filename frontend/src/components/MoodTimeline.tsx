import React from 'react';
import styles from './MoodTimeline.module.css';

const MoodTimeline: React.FC = () => {
  return (
    <section className={styles.timelineContainer}>
      <div className={styles.verticalLine} />
      <div className={styles.moodContent}>
        <div className={styles.emojiRow}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cfe552f70629ab8bee0343b1d96bed0036e2eb3c2d343b586b1b296f3ffa793?placeholderIfAbsent=true&apiKey=49eabda1992149c1b97e50fbf1ac946d"
            alt="Mood emoji"
            className={styles.emojiIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cfe552f70629ab8bee0343b1d96bed0036e2eb3c2d343b586b1b296f3ffa793?placeholderIfAbsent=true&apiKey=49eabda1992149c1b97e50fbf1ac946d"
            alt="Mood emoji"
            className={styles.emojiIcon}
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfc3f5cb76fdf070d01a3fbb79c7a8f0f0f6cd9dbad6478969fee1bdece922f?placeholderIfAbsent=true&apiKey=49eabda1992149c1b97e50fbf1ac946d"
          alt="Mood emoji"
          className={styles.singleEmoji}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cf247f4e1db9cf19f1a8c25577cfb20c9bbe2e33c808ededfe820e8c07cfe1c?placeholderIfAbsent=true&apiKey=49eabda1992149c1b97e50fbf1ac946d"
          alt="Mood emoji"
          className={styles.offsetEmoji}
        />
        <div className={styles.horizontalLine} />
      </div>
      <div className={styles.dateRow}>
        <time className={styles.date}>11/12</time>
        <time className={styles.date}>11/13</time>
        <time className={styles.date}>11/14</time>
        <time className={styles.date}>11/15</time>
      </div>
    </section>
  );
};

export default MoodTimeline;
