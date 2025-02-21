# 🩸 GlycoPredict - AI-Based Diabetes Prediction System

## 🚀 Overview
GlycoPredict is a deep learning-based diabetes prediction system that analyzes patient health data to assess diabetes risk. It utilizes machine learning models trained on medical datasets for accurate predictions.

## 🔥 Features
- 🧠 **Deep Learning Model** trained using TensorFlow/Keras  
- 📊 **Data Preprocessing & Feature Engineering**  
- 🎯 **Diabetes Risk Prediction API using Flask**  
- 🗄 **MySQL Database for storing user inputs & results**  
- 🌐 **Web-Based Interface for easy interaction**  

---

## 🏗 **Project Structure**
DIABETES_PREDICTION_PROJECT/
│
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   ├── utils.py
│   │   ├── config.py
│   │   └── instance/
│   │       ├── my_diabetes_model.h5
│   │       └── my_scaler.pkl
│   ├── requirements.txt
│   └── run.py  # Main entry point
│
├── frontend/  # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── PredictionForm.js
│   │   │   ├── ResultDisplay.js
│   │   ├── services/  # API Calls
│   │   │   ├── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   ├── index.css
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│
└── README.md  # Project Documentation
