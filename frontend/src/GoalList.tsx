import { useEffect, useState } from "react";
import React from 'react'; // Import React

// Importing images correctly
import goToGym from "./assets/goToGym.jpg";
import makeBed from "./assets/makeBed.jpg";
import noSugar from "./assets/noSugar.jpg";
import pray from "./assets/pray.jpg";
import readScriptures from "./assets/readScriptures.jpg";

function GoalDescription() {
    const [goals, setGoals] = useState<string[]>([]);
    const [selectedGoal, setSelectedGoal] = useState<string>("");

    // Hardcoded images for each goal
    const goalImages: Record<string, string> = {
        "Go to the gym for 60 minutes": goToGym,
        "Make my bed": makeBed,
        "Don't eat sugar": noSugar,
        "Read my scriptures": readScriptures,
        "Say my prayers": pray,
    };

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const response = await fetch('https://localhost:5000/Scrum/GetGoals');
                const data = await response.json();
                setGoals(data);
            } catch (error) {
                console.error("Error fetching goals", error);
            }
        };

        fetchGoals();
    }, []);

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
        justifyContent: "flex-start", // Change to flex-start to allow the image to take full height
        minHeight: "100vh", // Ensure the container takes at least the full viewport height
        width: "100%", // Take up the full width
        textAlign: "center",
        backgroundColor: "#ffffff", // White background
        color: "#000000", // Black text
        paddingTop: "20px", // Add some padding at the top if needed
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
        width: "100%", // Make the container take full width
        maxWidth: "none", // Remove the max width
        textAlign: "center",
        display: "flex", // Use flexbox to center the image
        flexDirection: "column",
        alignItems: "center",
    },
    goalTitle: {
        fontSize: "2rem",
        marginBottom: "20px",
        color: "#000000",
    },
    image: {
        width: "100%", // Make the image take full width of its container
        height: "auto", // Maintain aspect ratio
        maxHeight: "none", // Remove the max height constraint
        objectFit: "contain", // Or 'cover' depending on how you want it to fill
        borderRadius: "0px", // No rounded corners
        boxShadow: "none", // No shadow
    },
};

export default GoalDescription;