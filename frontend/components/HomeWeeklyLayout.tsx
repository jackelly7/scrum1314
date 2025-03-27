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
  Monday: ['Goal 1', 'Goal 2'],
  Tuesday: ['Goal 3'],
  Wednesday: ['Goal 4'],
  Thursday: ['Goal 5', 'Goal 6'],
  Friday: ['Goal 7'],
  Saturday: ['Goal 8', 'Goal 9'],
  Sunday: ['Goal 10'],
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

  return (
    <div className={styles.weeklyLayout}>
      <h2 className={styles.weeklyTitle}>Weekly Layout</h2>
      <div className={styles.carouselContainer}>
        <button onClick={prevDay} className={styles.navButton}>
          ❮
        </button>
        <div className={styles.weeklyColumn}>
          <h3>{currentDay}</h3>
          {weeklyGoals[currentDay]?.map((goal, index) => (
            <div key={index} className={styles.weeklyGoal}>
              <input type="checkbox" />
              <label>{goal}</label>
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
