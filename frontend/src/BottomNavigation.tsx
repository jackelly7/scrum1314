"use client";
import React, { useState } from "react";
import styles from "./InputDesign.module.css";

const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // This is a placeholder for actual icons
  // In a real implementation, you would use proper icon components
  const renderIcon = (index: number) => {
    const iconClass =
      index === activeTab ? styles.activeIcon : styles.inactiveIcon;
    return <span className={`${styles.navIcon} ${iconClass}`}>●</span>;
  };

  return (
    <nav className={styles.bottomNav}>
      <button
        className={styles.navItem}
        onClick={() => setActiveTab(0)}
        aria-label="Home"
      >
        {renderIcon(0)}
      </button>
      <button
        className={styles.navItem}
        onClick={() => setActiveTab(1)}
        aria-label="Search"
      >
        {renderIcon(1)}
      </button>
      <button
        className={styles.navItem}
        onClick={() => setActiveTab(2)}
        aria-label="Mood"
      >
        {renderIcon(2)}
      </button>
      <button
        className={styles.navItem}
        onClick={() => setActiveTab(3)}
        aria-label="Chart"
      >
        {renderIcon(3)}
      </button>
      <button
        className={styles.navItem}
        onClick={() => setActiveTab(4)}
        aria-label="User"
      >
        {renderIcon(4)}
      </button>
    </nav>
  );
};

export default BottomNavigation;
