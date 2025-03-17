"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import StatusBar from "./StatusBar";
import GoalForm from "./GoalForm";
import BottomNavigation from "./BottomNavigation";

function InputDesign() {
  return (
    <main className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <StatusBar />
      <GoalForm />
      <BottomNavigation />
    </main>
  );
}

export default InputDesign;
