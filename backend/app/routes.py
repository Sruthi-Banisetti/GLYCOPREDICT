import logging
from flask import Blueprint, request, jsonify, current_app # type: ignore
from .models import save_prediction
import numpy as np  # type: ignore

# Set up logging
logging.basicConfig(level=logging.INFO)

# Initialize Flask blueprint
routes = Blueprint('routes', __name__)

# Route to predict diabetes risk
@routes.route('/predict', methods=['POST'])
def predict():
    # Ensure model and scaler are loaded from the app context
    model = getattr(current_app, "model", None)
    scaler = getattr(current_app, "scaler", None)

    if model is None or scaler is None:
        logging.error("Model or scaler is not loaded properly.")
        return jsonify({"error": "Internal server error. Model or scaler not loaded."}), 500

    data = request.json

    # Extract features from the input
    glucose = data.get("glucose", 0)
    bp = data.get("bp", 0)
    age = data.get("age", 0)
    bmi = data.get("bmi", 0)
    pregnancies = data.get("pregnancies", 0)

    features = [pregnancies, glucose, bmi, bp, age]

    # Preprocess input data (scale it the same way as training)
    try:
        scaled_features = scaler.transform([features])  # Use the scaler to scale the features
    except Exception as e:
        logging.error(f"Error in scaling the input: {e}")
        return jsonify({"error": "Error in data scaling"}), 500

    # Predict with the model
    try:
        prediction = model.predict(scaled_features)
    except Exception as e:
        logging.error(f"Error in prediction: {e}")
        return jsonify({"error": "Error in prediction"}), 500

    # Convert model prediction to a classification (0 or 1)
    model_result = "Normal" if prediction < 0.6 else "Diabetic"
    
    # Apply custom logic for final classification
    result = model_result  # Default result from model prediction
    
    if bmi >= 30 and glucose >= 126:
        result = "Type 2 Diabetes "
    elif bmi < 30 and glucose >= 126:
        result = "Type 1 Diabetes"
    elif bmi < 25 and  glucose >= 70 and glucose<= 99 and bp < 120:
        result = "Normal "

    # Save prediction to the database
    try:
        save_prediction(glucose, bp, age, bmi, pregnancies, result)
    except Exception as e:
        logging.error(f"Error saving prediction: {e}")
        return jsonify({"error": "Error saving prediction"}), 500

    # Log the prediction details
    logging.info(f"Prediction: {result}")

    return jsonify({"result": result})
