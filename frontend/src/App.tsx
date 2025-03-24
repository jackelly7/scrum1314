// src/App.tsx
import React from 'react';
// import InputDesign from '../components/InputDesign'; // Import the Toolbar component
import Login from './Login'; // Import the LoginPage component
import './App.css'; // If using App.css for styling

const App: React.FC = () => {
  return (
    <div>
      {/* className="center"> */}
      {/* <InputDesign /> Render the Toolbar */}
      <Login /> {/* Render the LoginPage */}
    </div>
  );
};

export default App;
