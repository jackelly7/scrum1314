import { useState } from "react";
import React from 'react'; // Import React

// Importing images correctly
import goToGym from "./assets/goToGym.jpg";
import makeBed from "./assets/makeBed.jpg";
import noSugar from "./assets/noSugar.jpg";
import pray from "./assets/pray.jpg";
import readScriptures from "./assets/readScriptures.jpg";

function GoalDescription() {
    const [selectedGoal, setSelectedGoal] = useState<string>("");

    // Hardcoded goals
    const goals = [
        "Go to the gym for 60 minutes",
        "Make my bed",
        "Don't eat sugar",
        "Read my scriptures",
        "Say my prayers"
    ];

    // Hardcoded images for each goal
    const goalImages: Record<string, string> = {
        "Go to the gym for 60 minutes": goToGym,
        "Make my bed": makeBed,
        "Don't eat sugar": noSugar,
        "Read my scriptures": readScriptures,
        "Say my prayers": pray,
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Stats</h1>
            <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                style={styles.dropdown}
            >
                <option value="">-- Select a Goal --</option>
                {goals.map((g) => (
                    <option key={g} value={g}>{g}</option>
                ))}
            </select>

            {selectedGoal && (
                <div style={styles.goalContainer}>
                    <h2 style={styles.goalTitle}>{selectedGoal}</h2>
                    <img
                        src={goalImages[selectedGoal]}
                        alt={selectedGoal}
                        style={styles.image}
                    />
                </div>
            )}
        </div>
    );
}

// Explicitly typing styles as React.CSSProperties
const styles: Record<string, React.CSSProperties> = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Center content vertically
        minHeight: "100vh",
        width: "100%",
        textAlign: "center",
        backgroundColor: "#ffffff",
        color: "#000000",
        paddingTop: "20px",
    },
    heading: {
        fontSize: "2rem",
        marginBottom: "20px",
        color: "#000000",
    },
    dropdown: {
        width: "300px",
        padding: "10px",
        fontSize: "1.2rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "20px",
        backgroundColor: "#ffffff",
        color: "#000000",
    },
    goalContainer: {
        width: "100%",
        maxWidth: "600px", // Adjusted to prevent image from stretching too much
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    goalTitle: {
        fontSize: "2rem",
        marginBottom: "20px",
        color: "#000000",
    },
    image: {
        width: "100%",
        maxWidth: "500px", // Keeps the image at a reasonable size
        height: "auto",
        objectFit: "contain",
        borderRadius: "0px",
        boxShadow: "none",
    },
};

export default GoalDescription;
