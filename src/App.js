import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import PersonalPage from './pages/PersonalPage';
import TimePage from './pages/TimePage';
import PetPage from './pages/PetPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Movie</Link></li>
            <li><Link to="/personal">Personal Page</Link></li>
            <li><Link to="/time">Current Time</Link></li>
            <li><Link to="/pet">Pet Info</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/time" element={<TimePage />} />
          <Route path="/pet" element={<PetPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
