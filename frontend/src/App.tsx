import './App.css';
import CreateGoal from './CreateGoal';
import Footer from './Footer';
import { HomePage } from './HomePage';
import LoginPage from './LoginPage';
import MoodTracker from './MoodTracker';
import Stats from './Stats';
import FriendsPage from '../components/FriendsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/mood" element={<MoodTracker />} />
          <Route path="/createGoal" element={<CreateGoal />} />
          <Route path="/social" element={<FriendsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
