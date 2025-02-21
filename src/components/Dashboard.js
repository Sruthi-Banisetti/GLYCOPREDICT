import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "./Dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle the case where `state` is undefined
  const state = location.state || {};

  const {
    name = "Unknown",
    weight = "Unknown",
    height = "Unknown",
    bmi = "Unknown",
    age = "Unknown",
    pregnancies = "Unknown",
    glucose = "Unknown",
    bloodPressure = "Unknown",
    prediction = "Unknown",
  } = state;

  // Redirect to the home page if no state is provided
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const downloadReport = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text(`${name}'s Dashboard Report`, 10, 10);

    // Add content
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 10, 30);
    doc.text(`Weight: ${weight} kg`, 10, 40);
    doc.text(`Height: ${height} cm`, 10, 50);
    doc.text(`BMI: ${bmi}`, 10, 60);
    doc.text(`Age: ${age}`, 10, 70);
    doc.text(`Pregnancies: ${pregnancies}`, 10, 80);
    doc.text(`Glucose Level: ${glucose} mg/dL`, 10, 90);
    doc.text(`Blood Pressure: ${bloodPressure} mmHg`, 10, 100);
    doc.text(`Prediction: ${prediction}`, 10, 110);

    // Save the PDF
    doc.save(`${name}_Dashboard_Report.pdf`);
  };

  return (
    <div className="dashboard">
      <h2>{name}'s Dashboard</h2>
      <div className="dashboard-details">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Weight:</strong> {weight} kg
        </p>
        <p>
          <strong>Height:</strong> {height} cm
        </p>
        <p>
          <strong>BMI:</strong> {bmi}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Pregnancies:</strong> {pregnancies}
        </p>
        <p>
          <strong>Glucose Level:</strong> {glucose} mg/dL
        </p>
        <p>
          <strong>Blood Pressure:</strong> {bloodPressure} mmHg
        </p>
        <p>
          <strong>Prediction:</strong> {prediction}
        </p>
      </div>
      <div>
        <button onClick={downloadReport}>Download Report</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      <div className="about-link">
        <Link to="/about">Learn More About Diabetes</Link>
        <Link to="/health">Learn More about Health & Wellness</Link>
      </div>
    </div>
  );
};

export default Dashboard;
