import React from 'react';
import './AboutDiabetes.css';

const AboutDiabetes = () => {
  return (
    <div className="about-diabetes">
      <h1>About Diabetes</h1>
      <p>
      Diabetes is a chronic condition that affects how your body turns food into energy. It occurs when the body either does not produce enough insulin (a hormone that helps regulate blood sugar levels) or cannot effectively use the insulin it does produce. This leads to high blood sugar levels, which over time can cause serious health problems.
      </p>

      <h2>Types of Diabetes</h2>

      {/* Type 1 Diabetes */}
      <div className="diabetes-type">
        <div className="info">
          <h3>Type 1 Diabetes</h3>
          <p>
            Type 1 diabetes, also known as juvenile diabetes or insulin-dependent diabetes, is a chronic condition where the body's immune system mistakenly attacks and destroys the insulin-producing beta cells in the pancreas.
          </p>
          <ul>
            <li>Symptoms: Frequent urination, excessive thirst, weight loss, fatigue.</li>
            <li>Treatment: Insulin therapy and regular monitoring of blood glucose levels.</li>
          </ul>
        </div>
        <img src="https://i.ibb.co/JWYcPjQ/Screenshot-2024-12-25-150608.png" alt="Type 1 Diabetes" className="diabetes-image" />
      </div>

      {/* Type 2 Diabetes */}
      <div className="diabetes-type reverse">
        <div className="info">
          <h3>Type 2 Diabetes</h3>
          <p>
            Type 2 diabetes is a chronic condition where the body becomes resistant to insulin, or the pancreas doesn't produce enough insulin to maintain normal blood glucose levels.
          </p>
          <ul>
            <li>Symptoms: Increased hunger, fatigue, blurred vision, slow healing sores.</li>
            <li>Treatment: Lifestyle changes, oral medications, and possibly insulin therapy.</li>
          </ul>
        </div>
        <img src="https://i.ibb.co/pR3nY9r/Screenshot-2024-12-22-175808.png" alt="Type 2 Diabetes" className="diabetes-image" />
      </div>

      {/* Gestational Diabetes */}
      <div className="diabetes-type">
        <div className="info">
          <h3>Gestational Diabetes</h3>
          <p>
            Gestational diabetes is a type of diabetes that develops during pregnancy and typically disappears after the baby is born.
          </p>
          <ul>
            <li>Symptoms: Increased thirst, frequent urination, and fatigue (similar to Type 2 diabetes).</li>
            <li>Treatment: Diet management, exercise, and sometimes insulin therapy during pregnancy.</li>
          </ul>
        </div>
        <img src="https://i.ibb.co/RgJS2Nm/Screenshot-2024-12-22-180247.png" alt="Gestational Diabetes" className="diabetes-image" />
      </div>

      <h2>Tips & Suggestions</h2>
      <div className="tips">
        <h3>Managing Diabetes Effectively</h3>
        <ul>
          <li>Maintain a balanced diet, focusing on whole foods like vegetables, lean proteins, and healthy fats.</li>
          <li>Engage in regular physical activity, such as walking, swimming, or cycling.</li>
          <li>Monitor your blood sugar levels regularly and adhere to your prescribed medication schedule.</li>
          <li>Get enough sleep and manage stress to support overall well-being.</li>
        </ul>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wn0sB1rDNIc"
            title="Managing Diabetes Effectively"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <h2>Additional Resources</h2>
      <p>
        For more information on managing diabetes, consult your healthcare provider or visit reliable websites like the American Diabetes Association.
      </p>
    </div>
  );
};

export default AboutDiabetes;
