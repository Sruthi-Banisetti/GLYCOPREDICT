import numpy as np
import tensorflow as tf
import os
import logging

# Configure logging
logging.basicConfig(filename="diabetes_app.log", level=logging.INFO, 
                    format="%(asctime)s - %(levelname)s - %(message)s")

# Get the model path from the 'instance' folder
model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'instance', 'diabetes_model.h5')

# Load the model
if os.path.exists(model_path):
    model = tf.keras.models.load_model(model_path)
    logging.info(f"Model loaded successfully from {model_path}")
else:
    logging.error(f"Model file not found at {model_path}")
    model = None  # In case the model is not found

# Predict diabetes using the trained model
def classify_diabetes(features):
    if model is None:
        logging.error("Model is not loaded correctly.")
        return None, "Model is not loaded correctly."
    
    # Ensure that the input features are a valid array of numbers
    if len(features) != 5 or not all(isinstance(i, (int, float)) for i in features):
        error_message = "Invalid input features. Ensure that all features are numbers."
        logging.error(error_message)
        return None, error_message
    
    try:
        # Reshape features for prediction
        features_array = np.array(features).reshape(1, -1)
        prediction = model.predict(features_array)
        risk = float(prediction[0][0])  # Convert numpy.float32 to Python float

        # Log the prediction result
        logging.info(f"Prediction result: {risk}")
        
        return ("Diabetic" if risk >= 0.5 else "Not Diabetic"), None
    except Exception as e:
        logging.error(f"Error during prediction: {e}")
        return None, f"Error during prediction: {e}"

# Suggest personalized food chart based on glucose and BMI
def suggest_food_chart(glucose, bmi):
    try:
        # Basic validation for glucose and BMI
        if not isinstance(glucose, (int, float)) or not isinstance(bmi, (int, float)):
            error_message = "Glucose and BMI must be numbers."
            logging.error(error_message)
            return None, error_message
        
        # Determine the result based on glucose and BMI thresholds
        if glucose > 100 or bmi > 30:
            result = "Diabetic"
        elif glucose >= 90 and glucose <= 100 or bmi >= 25 and bmi <= 30:
            result = "Prediabetic"
        else:
            result = "Normal"
        
        logging.info("Result determined successfully.")
        return result, None
    except Exception as e:
        logging.error(f"Error during result determination: {e}")
        return None, f"Error during result determination: {e}"
