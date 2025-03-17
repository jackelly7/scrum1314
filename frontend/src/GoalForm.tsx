"use client";
import React, { useState } from "react";
import styles from "./InputDesign.module.css";
import CheckboxOption from "./CheckboxOption";

const GoalForm: React.FC = () => {
  const [goalText, setGoalText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Goal submitted:", goalText);
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
          placeholder="Goal"
          className={styles.textInput}
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
        />
      </section>

      <section className={styles.inputGroup}>
        <label className={styles.inputLabel}>Complete Goal By:</label>
        <div className={styles.dateDisplay}>Jun 10, 2024</div>
      </section>

      <section className={styles.checkboxGroup}>
        <CheckboxOption
          id="notifications"
          label="Notifications"
          description="Check box to receive notifications"
          defaultChecked={true}
        />

        <CheckboxOption
          id="shareWithFriends"
          label="Share With Friends"
          description="Check box to allow friends to see your goal"
          defaultChecked={true}
        />

        <CheckboxOption
          id="streak"
          label="Streak"
          description="Check box to include streak tracking"
          defaultChecked={true}
        />
      </section>

      <button type="submit" className={styles.submitButton}>
        Create Goal
      </button>
    </form>
  );
};

export default GoalForm;
