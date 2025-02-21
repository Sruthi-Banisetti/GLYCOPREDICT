import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutDiabetes from './components/AboutDiabetes';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import HealthWellness from './components/HealthWellness';
import PredictionPage from './components/PredictionPage';
import FoodNutrition from './components/FoodNutrition';
import Header from './components/Header';
import LoginSignup from './components/LoginSignup';
import './App.css';
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [showLoginModal, setShowLoginModal] = useState(false); // Modal visibility state

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update login status
    setShowLoginModal(false); // Close the login/signup modal
  };

  return (
    <Router>
      <div className="App">
        {/* Header and Navbar should be outside of Routes so they appear on all pages */}
        <Header />
        <Navbar />

        {/* Show Login/Signup modal conditionally */}
        {showLoginModal && (
          <LoginSignup
            onClose={() => setShowLoginModal(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}

        {/* Main content area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health" element={<HealthWellness />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/FoodNutrition" element={<FoodNutrition />} />
            <Route path="/about" element={<AboutDiabetes />} />
            <Route path="/" element={<PredictionPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/predict"
              element={
                <PredictionPage
                  isLoggedIn={isLoggedIn}
                  onShowLogin={() => setShowLoginModal(true)} // Trigger the modal if not logged in
                />
              }
            />
          </Routes>
        </div>

        {/* Footer should be placed after the Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
