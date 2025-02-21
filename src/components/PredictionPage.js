import React, { useState } from "react";
import "./PredictionPage.css";
import LoginSignup from "./LoginSignup";
import { useNavigate } from "react-router-dom";
import { makePrediction } from "../services/api"; // Importing the prediction API function

const PredictionPage = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [age, setAge] = useState("");
  const [glucose, setGlucose] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [pregnancies, setPregnancies] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPredictionForm, setShowPredictionForm] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const calculateBMI = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true);
      return;
    }

    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / heightInMeters ** 2).toFixed(1);
      setBmi(calculatedBMI);
    } else {
      alert("Please enter both weight and height!");
    }
  };

  const handlePredictionSubmit = async (e) => {
    e.preventDefault();

    if (age < 20) {
      alert("Age should be at least 20.");
      return;
    }

    setLoading(true);

    // Prepare input data to send to the backend API
    const data = {
      age,
      glucose: parseFloat(glucose),
      bloodPressure: bloodPressure,  // Make sure to handle the format on backend
      bmi: parseFloat(bmi),
      pregnancies: parseInt(pregnancies)
    };

    try {
      // Call the prediction API
      const response = await makePrediction(data);

      if (response.error) {
        alert(response.error);
        setLoading(false);
        return;
      }

      setPrediction(response.result);
      setLoading(false);
      setShowSuccessPopup(true);
    } catch (err) {
      console.error("Error during the prediction:", err);
      setLoading(false);
      alert("An error occurred while making the prediction.");
    }
  };

  const closeLoginSignup = () => {
    setShowLoginPopup(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
    setLoginMessage("Successful login!");
    setTimeout(() => {
      setLoginMessage("");
    }, 3000);
  };

  const handleGoToDashboard = () => {
    if (isLoggedIn) {
      setShowSuccessPopup(false);
      navigate("/dashboard", {
        state: {
          name,
          weight,
          height,
          bmi,
          age,
          pregnancies,
          glucose,
          bloodPressure,
          prediction,
        },
      });
    } else {
      alert("Please log in first.");
    }
  };

  return (
    <div className="prediction-page">
      {showLoginPopup && (
        <LoginSignup
          onClose={closeLoginSignup}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {loginMessage && <p className="login-message">{loginMessage}</p>}
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>
              Prediction complete! {prediction && `You are ${prediction}.`}
            </p>
            <button onClick={handleGoToDashboard}>Go to Dashboard</button>
            <button onClick={() => setShowSuccessPopup(false)}>Back</button>
          </div>
        </div>
      )}
      {!showPredictionForm && !showLoginPopup && !showSuccessPopup ? (
        <div className="bmi-calculator">
          <h3 style={{ fontFamily: "sans-serif", fontStyle: "italic" }}>
            BMI Calculator
          </h3>
          <div className="input-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </div>
          <div className="input-group">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
            />
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
          {bmi && (
            <div className="result">
              <p>
                Your BMI: <strong>{bmi}</strong>
              </p>
              <button onClick={() => setShowPredictionForm(true)}>Next</button>
            </div>
          )}
        </div>
      ) : (
        !showSuccessPopup && (
          <div className="prediction-form">
            <h3 style={{ fontFamily: "sans-serif", fontStyle: "italic" }}>
              Diabetes Prediction
            </h3>
            <form onSubmit={handlePredictionSubmit}>
              <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="input-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your age"
                />
              </div>
              <div className="input-group">
                <label htmlFor="glucose">Glucose Level:</label>
                <input
                  type="number"
                  id="glucose"
                  value={glucose}
                  onChange={(e) => setGlucose(e.target.value)}
                  placeholder="Enter your glucose level"
                />
              </div>
              <div className="input-group">
                <label htmlFor="bloodPressure">Blood Pressure:</label>
                <input
                  type="text"
                  id="bloodPressure"
                  value={bloodPressure}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*\/?\d*$/.test(value)) {
                      setBloodPressure(value);
                    }
                  }}
                  placeholder="Enter your blood pressure (e.g., 120 or 120/80)"
                />
              </div>
              <div className="input-group">
                <label htmlFor="pregnancies">Pregnancies (if applicable):</label>
                <input
                  type="number"
                  id="pregnancies"
                  value={pregnancies}
                  onChange={(e) => setPregnancies(e.target.value >= 0 ? e.target.value : "")}
                  placeholder="Enter number of pregnancies"
                />
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        )
      )}
    </div>
  );
};


export default PredictionPage;
