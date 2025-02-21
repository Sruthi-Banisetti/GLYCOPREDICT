// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3003/predict';  // Replace with your Flask backend URL

// Function to make POST request to the Flask API
export const makePrediction = async (inputData) => {
    try {
        const response = await axios.post(API_URL, inputData);
        return response.data;
    } catch (error) {
        console.error('Error making prediction:', error);
        return { error: 'Unable to fetch data from the backend' };
    }
};
 