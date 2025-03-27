import GoalList from './GoalList';
import React from 'react';

function Stats() {
  const styles: Record<string, React.CSSProperties> = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh", // Ensures the container takes up the full viewport height
      width: "100%", // Ensures it stretches across the full width of the screen
      textAlign: "center",
      backgroundColor: "#ffffff", // White background
      color: "#000000", // Black text
      fontFamily: "Arial, sans-serif", // Ensures the font matches across components
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <GoalList />
    </div>
  );
}

export default Stats;