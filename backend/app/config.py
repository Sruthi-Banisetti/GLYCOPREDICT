import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",       # Your MySQL host
        user="Glycopredict",            # Your MySQL username
        password="diabetes",    # Your MySQL password
        database="diabetes_predictor"  # The database you created
    )

from app.config import get_db_connection

try:
    conn = get_db_connection()
    print("Database connection successful!")
    conn.close()
except Exception as e:
    print(f"Error connecting to database: {e}")
class Config:
    MODEL_PATH = 'instance/diabetes_model.h5'  # Ensure this path is correct based on your project structure
    SECRET_KEY = 'your_secret_key'  # Add other necessary configuration variables as required
     # Update this path as needed
    SCALER_PATH = 'instance/scaler.pkl'       # Update this path as needed

