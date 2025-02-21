import tensorflow as tf # type: ignore
import os
import logging
import joblib # type: ignore
from .config import get_db_connection

# Set up logging
logging.basicConfig(level=logging.INFO)

# Define paths for the model and scaler
MODEL_PATH = os.path.join(os.path.dirname(__file__), '../instance/diabetes_model.h5')
SCALER_PATH = os.path.join(os.path.dirname(__file__), '../instance/scaler.pkl')

# Load the model
def load_model(model_path=MODEL_PATH):
    """
    Load the trained model from the specified path.
    """
    if os.path.exists(model_path):
        try:
            model = tf.keras.models.load_model(model_path)
            logging.info(f"Model loaded successfully from {model_path}")
            return model
        except Exception as e:
            logging.error(f"Error loading model: {e}")
            return None
    else:
        logging.error(f"Error: Model file not found at {model_path}")
        return None

# Load the scaler
def load_scaler(scaler_path=SCALER_PATH):
    """
    Load the scaler from the specified path.
    """
    if os.path.exists(scaler_path):
        try:
            scaler = joblib.load(scaler_path)
            logging.info(f"Scaler loaded successfully from {scaler_path}")
            return scaler
        except Exception as e:
            logging.error(f"Error loading scaler: {e}")
            return None
    else:
        logging.error(f"Error: Scaler file not found at {scaler_path}")
        return None

# Save the prediction results to the database
def save_prediction(glucose, bp, age, bmi, pregnancies, result):
    """
    Save prediction results to the database.
    """
    conn = get_db_connection()
    
    if conn is None:
        logging.error("Error: Could not establish a connection to the database.")
        return
    
    try:
        cursor = conn.cursor()

        # Insert prediction into the database
        query = """
            INSERT INTO predictions (glucose, bp, age, bmi, pregnancies, result)
            VALUES (%s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (glucose, bp, age, bmi, pregnancies, result))
        conn.commit()
        logging.info("Prediction saved successfully.")
    except Exception as e:
        logging.error(f"Error saving prediction: {e}")
    finally:
        # Ensure the cursor and connection are closed properly
        cursor.close()
        conn.close()

# Utility function to get model and scaler together
def get_model_and_scaler():
    """
    Returns the loaded model and scaler.
    Raises an exception if either is not properly loaded.
    """
    model = load_model()
    scaler = load_scaler()

    if model is None:
        raise ValueError("Model not loaded. Check the model path and ensure the file exists.")
    if scaler is None:
        raise ValueError("Scaler not loaded. Check the scaler path and ensure the file exists.")
    return model, scaler
