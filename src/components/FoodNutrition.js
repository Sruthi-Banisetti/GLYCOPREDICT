import React from 'react';
import './FoodNutrition.css';

const FoodNutrition = () => {
  return (
    <div className="food-nutrition-container">
      <section className="nutrition-section">
        <div className="text-container">
          <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic', textAlign:'left' }}>Healthy Eating Tips</h2>
          <ul>
            <li>Choose Whole Grains Over Refined Carbs</li>
            <li>Include Plenty of Non-Starchy Vegetables</li>
            <li>Control Portion Sizes</li>
            <li>Incorporate Lean Proteins</li>
            <li>Avoid Sugary Drinks</li>
            <li>Eat Healthy Fats</li>
            <li>Limit Processed and Packaged Foods</li>
            <li>Spread Meals Throughout the Day</li>
            <li>Monitor Carb Intake</li>
            <li>Stay Hydrated</li>
            <li>Incorporate Fiber-Rich Foods</li>
            <li>Be Mindful of Alcohol</li>
          </ul> 
          
        </div>
        <div className="image-container">
          <img src="https://i.ibb.co/K5CMHnP/Screenshot-2024-12-22-205747.png" alt="Healthy Eating" />
        </div>
      </section>

      <section className="nutrition-section">
      <div className="image-container">
          <img src="https://i.ibb.co/8dQyDnj/Screenshot-2024-12-22-210034.png" alt="Blood Glucose" />
        </div>
        <div className="text-container">
          <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic',textAlign:'left'}}>How Food Affects Blood Glucose</h2>
          <ul>
            <li>Carbohydrates and Blood Glucose</li>
            <li>Fiber and Blood Glucose</li>
            <li>Protein and Blood Glucose</li>
            <li>Fats and Blood Glucose</li>
            <li>Sugary Foods and Drinks</li>
            <li>Meal Timing and Portion Control</li>
            <li>The Glycemic Index (GI)</li>
          </ul>
        </div>
       
      </section>

      <section className="nutrition-section">
        <div className="text-container">
          <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic' ,textAlign:'left' }}>How to Read Food Labels</h2>
          <ul>
            <li>Check the Serving Size</li>
            <li>Look at Total Calories</li>
            <li>Understand the Macronutrients</li>
            <li>Check the Fiber Content</li>
            <li>Look at Sodium Levels</li>
            <li>Review the Vitamins and Minerals</li>
            <li>Watch for "Hidden" Ingredients</li>
            <li>Check for Allergens</li>
            <li>Look for Health Claims</li>
            <li>Understand the Ingredient List</li>
          </ul>
        </div>
        <div className="image-container">
          <img src="https://i.ibb.co/TcrfsLc/Screenshot-2024-12-22-213636.png" alt="Food Labels" />
        </div>
      </section>

      <section className="nutrition-section">
      <div className="image-container">
          <img src="https://i.ibb.co/fNHMpbL/Screenshot-2024-12-22-213025.png" alt="Eating Well" />
        </div>
        <div className="text-container">
          <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic' ,textAlign:"left" }}>Tips for Eating Well</h2>
          <ul>
            <li>Eat a Variety of Nutrient-Dense Foods</li>
            <li>Control Portion Sizes</li>
            <li>Limit Processed and Junk Foods</li>
            <li>Incorporate Healthy Fats</li>
            <li>Stay Hydrated</li>
            <li>Choose Whole Grains Over Refined Carbs</li>
            <li>Balance Protein and Carbohydrates</li>
            <li>Include Plenty of Fruits and Vegetables</li>
            <li>Plan Your Meals Ahead</li>
            <li>Practice Mindful Eating</li>
            <li>Limit Sugary Drinks</li>
            <li>Avoid Skipping Meals</li>
            
            
          </ul>
        </div>
        
      </section>

      <section className="nutrition-section">
        <div className="text-container">
          <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic',textAlign:'left' }}>Use the Diabetes Plate for Meal Planning</h2>
          <ul>
            <li>The Diabetes Plate Method Overview  </li>
            <li>Divide Your Plate  </li>
            <li>Fill Half of Your Plate with Non-Starchy Vegetables  </li>
            <li>Fill a Quarter of Your Plate with Lean Protein  </li>
            <li>Fill a Quarter of Your Plate with Carbohydrates  </li>
            <li>Add Healthy Fats in Moderation  </li>
            <li>Monitor Portion Sizes  </li>
            <li>Balance Your Meals Throughout the Day  </li>
            <li>Include High-Fiber Foods  </li>
            <li>Drink Water and Limit Sugary Beverages  </li>
          
          </ul>
        </div>
        <div className="image-container">
          <img src="https://i.ibb.co/BCgw6g1/Screenshot-2024-12-22-212618.png" alt="Diabetes Plate" />
        </div>
      </section>
    </div>
  );
};

export default FoodNutrition;
