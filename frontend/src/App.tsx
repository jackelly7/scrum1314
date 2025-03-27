// // src/App.tsx
// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from 'react-router-dom';
// import LoginPage from './LoginPage';
// // import HomePage from './HomePage'; // Example additional page
// // import Dashboard from './Dashboard'; // Example additional page
// import Footer from './Footer';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <MainContent />
//     </Router>
//   );
// };

// // This component handles route-based rendering
// const MainContent: React.FC = () => {
//   const location = useLocation(); // Get current page path

//   return (
//     <div className="app-container">
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         {/* <Route path="/" element={<HomePage />} /> */}
//         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//         {/* Add other pages here */}
//       </Routes>

//       {/* Footer will be shown on ALL pages EXCEPT the login page */}
//       {location.pathname !== '/login' && <Footer />}
//     </div>
//   );
// };

// export default App;

// src/App.tsx
import React from 'react';
import Footer from './Footer'; // Import the Toolbar component
// import MoodTracker from './MoodTracker'; // Import the LoginPage component
// import HomePage from '../components/HomePage';
// import FriendsPage from '../components/FriendsPage';
import './App.css'; // If using App.css for styling

const App: React.FC = () => {
  return (
    <div>
      {/* className="center"> */}
      <Footer />
      {/* <MoodTracker /> 
      <HomePage/>
      <FriendsPage/> */}
    </div>
  );
};

export default App;
// above is what I had before
