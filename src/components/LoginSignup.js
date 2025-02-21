import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = ({ onClose, onLoginSuccess = () => {} }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp && !name) {
      setErrorMessage("Name is required for sign-up.");
      return;
    }

    if (!email || !password) {
      setErrorMessage("Both email and password are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const userData = JSON.parse(localStorage.getItem("userData")) || {};

    if (isSignUp) {
      if (userData[email]) {
        setErrorMessage("An account with this email already exists.");
        return;
      }
      userData[email] = { name, password };
      localStorage.setItem("userData", JSON.stringify(userData));
      setErrorMessage("");
      setShowSuccessPopup(true);
    } else {
      if (!userData[email] || userData[email].password !== password) {
        setErrorMessage("Don't have an account, please sign up.");
        return;
      }
      setName(userData[email].name);
      setErrorMessage("");
      setShowSuccessPopup(true);
    }

    onLoginSuccess();
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage("");
  };

  const handleGoToDashboard = () => {
    setShowSuccessPopup(false);
    onClose();
    navigate("/dashboard", {
      state: {
        name: name || "User",
        email,
      },
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="modal-overlay">
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>
              {isSignUp
                ? `Sign-up successful! Welcome, ${name || "User"}!`
                : `Login successful! Welcome back, ${name || "User"}!`}
            </p>
            <button onClick={handleGoToDashboard}>Go to Dashboard</button>
            <button onClick={() => setShowSuccessPopup(false)}>Back</button>
          </div>
        </div>
      )}

      {!showSuccessPopup && (
        <div className="modal-content">
          <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your name"
                />
              </div>
            )}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="password-container">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
              <span
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁" : "👁‍🗨"}
              </span>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
          </form>
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={toggleAuthMode}>
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </p>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
