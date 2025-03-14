import React from 'react';
import styles from './MoodMap.module.css';
import StatusBar from './StatusBar';
import MoodTimeline from './MoodTimeline';
import CurrentMoodInput from './CurrentMoodInput';
import PastMoodHistory from './PastMoodHistory';

const MoodMap: React.FC = () => {
  return (
    <main className={styles.moodMap}>
      <StatusBar />
      <div className={styles.content}>
        <h1 className={styles.title}>Mood Map</h1>
        <div className={styles.separator} />
        <MoodTimeline />
        <CurrentMoodInput />
        <PastMoodHistory />
      </div>
    </main>
  );
};

export default MoodMap;
