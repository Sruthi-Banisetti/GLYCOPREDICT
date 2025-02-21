import logging
from flask import Flask
from flask_cors import CORS
from .config import Config
from .models import load_model, load_scaler

# Set up logging
logging.basicConfig(level=logging.INFO)

def create_app():
    # Initialize the Flask app
    app = Flask(__name__, instance_relative_config=True)

    # Load configuration from config.py
    app.config.from_object(Config)

    # Enable CORS
    CORS(app)

    # Load the trained model
    try:
        app.model = load_model(app.config.get('MODEL_PATH'))
        app.logger.info(f"Model loaded successfully from {app.config.get('MODEL_PATH')}")
    except Exception as e:
        app.logger.error(f"Error loading model: {e}")
        app.model = None

    # Load the scaler
    try:
        app.scaler = load_scaler(app.config.get('SCALER_PATH'))
        app.logger.info(f"Scaler loaded successfully from {app.config.get('SCALER_PATH')}")
    except Exception as e:
        app.logger.error(f"Error loading scaler: {e}")
        app.scaler = None

    # Register routes
    from .routes import routes
    app.register_blueprint(routes)

    return app
