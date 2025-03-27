'use client';
import React, { useState } from 'react';
import styles from './InputDesign.module.css';
import { useNavigate } from 'react-router-dom';
const GoalForm: React.FC = () => {
  const navigate = useNavigate();
  const [goalText, setGoalText] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Goal submitted:', goalText, 'Date:', goalDate);
  };
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h1 className={styles.formTitle}>Create New Goal</h1>
      <section className={styles.inputGroup}>
        <label htmlFor="goalInput" className={styles.inputLabel}>
          Enter Goal:
        </label>
        <input
          type="text"
          id="goalInput"
          placeholder="Enter your goal"
          className={styles.textInput}
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
        />
      </section>
      <section className={styles.inputGroup}>
        <label htmlFor="goalDate" className={styles.inputLabel}>
          Completion Date:
        </label>
        <input
          type="date"
          id="goalDate"
          className={styles.textInput}
          value={goalDate}
          onChange={(e) => setGoalDate(e.target.value)}
        />
      </section>
      <section className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" id="notifications" defaultChecked />
          <span>Notifications</span>
          <div className={styles.checkboxDescription}></div>
        </label>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" id="shareWithFriends" defaultChecked />
          <span>Share With Friends</span>
          <div className={styles.checkboxDescription}></div>
        </label>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" id="streak" defaultChecked />
          <span>Track Streak</span>
          <div className={styles.checkboxDescription}></div>
        </label>
      </section>
      <button
        type="button"
        className={styles.submitButton}
        onClick={() => console.log('More options clicked')}
      >
        More Options
      </button>
      <br />
      <br />
      <button
        onClick={() => navigate('/home')}
        type="submit"
        className={styles.submitButton}
      >
        Create Goal
      </button>
    </form>
  );
};
export default GoalForm;
