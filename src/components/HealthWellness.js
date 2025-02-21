import React from 'react';
import './HealthWellness.css';

const HealthWellness = () => {
  return (
    <div className="health-wellness">
      <h1 className="main-title" style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>Health & Wellness</h1>

      {/* Fitness Section */}
      <section className="section fitness">
        <div className="section-content">
          <div className="text">
            <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>Fitness</h2>
            <p>
              Staying physically active is crucial for managing your health and wellness. Regular exercise helps improve cardiovascular health, boost energy levels, and regulate blood sugar levels. Here are some tips:
            </p>
            <ul>
              <li>Engage in at least 30 minutes of moderate-intensity exercise daily.</li>
              <li>Incorporate strength training exercises 2-3 times per week.</li>
              <li>Stay hydrated and stretch before and after your workouts.</li>
            </ul>
          </div>
          <img
            src="https://i.ibb.co/cwTnh6V/Screenshot-2024-12-25-150521.png"
            alt="Fitness"
            className="section-image"
          />
        </div>
      </section>

      {/* Weight Management Section */}
      <section className="section weight-management">
        <div className="section-content">
        <img
            src="https://i.ibb.co/YyzhTy8/Screenshot-2024-12-22-182518.png"
            alt="Weight Management"
            className="section-image"
          />
          <div className="text">
            <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>Weight Management</h2>
            <p>
              Achieving and maintaining a healthy weight is key to reducing the risk of chronic illnesses like diabetes. Focus on a balanced diet and mindful eating habits:
            </p>
            <ul>
              <li>Monitor your calorie intake and maintain a calorie deficit.</li>
              <li>Prioritize whole foods like fruits, vegetables, lean proteins, and whole grains.</li>
              <li>Avoid processed foods and sugary beverages that can spike blood sugar levels.</li>
            </ul>
          </div>
          
        </div>
      </section>

      {/* Medications Section */}
      <section className="section medications">
        <div className="section-content">
          <div className="text">
            <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>Medications</h2>
            <p>
              Proper medication management is essential for controlling chronic conditions like diabetes. Always follow your healthcare provider's recommendations:
            </p>
            <ul>
              <li>Take medications at the prescribed times and dosages without skipping.</li>
              <li>Keep track of your medications with a journal or a digital medication tracker.</li>
              <li>Report any side effects or concerns to your healthcare provider immediately.</li>
            </ul>
          </div>
          <img
            src="https://i.ibb.co/jv7PF5T/Screenshot-2024-12-22-182703.png"
            alt="Medications"
            className="section-image"
          />
        </div>
      </section>
    </div>
  );
};

export default HealthWellness;
