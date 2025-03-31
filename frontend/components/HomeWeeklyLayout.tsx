import { FC, useState } from 'react';
import styles from '../src/styles/HomePage.module.css';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const weeklyGoals: Record<string, string[]> = {
  Monday: ['🏋️ Gym', '🛏️ Make Bed', '🚫 No Sugar', '📖 Scriptures', '🙏 Pray'],
  Tuesday: ['🛏️ Make Bed', '🚫 No Sugar', '📖 Scriptures', '🙏 Pray'],
  Wednesday: [
    '🏋️ Gym',
    '🛏️ Make Bed',
    '🚫 No Sugar',
    '📖 Scriptures',
    '🙏 Pray',
  ],
  Thursday: ['🛏️ Make Bed', '🚫 No Sugar', '📖 Scriptures', '🙏 Pray'],
  Friday: ['🏋️ Gym', '🛏️ Make Bed', '🚫 No Sugar', '📖 Scriptures', '🙏 Pray'],
  Saturday: [
    '🏋️ Gym',
    '🛏️ Make Bed',
    '🚫 No Sugar',
    '📖 Scriptures',
    '🙏 Pray',
  ],
  Sunday: ['🛏️ Make Bed', '🚫 No Sugar', '📖 Scriptures', '🙏 Pray'],
};

export const WeeklyLayout: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDay = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % daysOfWeek.length);
  };

  const prevDay = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + daysOfWeek.length) % daysOfWeek.length
    );
  };

  const currentDay = daysOfWeek[currentIndex];
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isToday = currentDay === today;

  return (
    <div className={styles.weeklyLayout}>
      <h2 className={styles.weeklyTitle}>Weekly Layout</h2>
      <div className={styles.carouselContainer}>
        <button onClick={prevDay} className={styles.navButton}>
          ❮
        </button>
        <div
          className={
            isToday
              ? `${styles.weeklyColumn} ${styles.currentDay}`
              : styles.weeklyColumn
          }
        >
          <h3>{currentDay}</h3>
          {weeklyGoals[currentDay]?.map((goal, index) => (
            <div key={index} className={styles.weeklyGoal}>
              <span className={styles.bullet}>•</span>
              <label className={styles.goalLabel}>{goal}</label>
            </div>
          ))}
        </div>
        <button onClick={nextDay} className={styles.navButton}>
          ❯
        </button>
      </div>
    </div>
  );
};
