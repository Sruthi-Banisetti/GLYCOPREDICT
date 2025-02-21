import React from 'react';
import './Home.css';
import AboutDiabetes from './AboutDiabetes';
// import FoodNutrition from './FoodNutrition';
// import Carousel from './Carousel';
// import Footer from './Footer';
const Home = () => {
    return (
        <>
        {/* <Carousel/> */}
         <section className="hero">
          
            <div className="hero-content ">
             <h2 className='style'>Welcome to Glycopredict</h2>
            <p>Assess your risk of developing diabetes <br></br>using our advanced Deep learning tool.</p>
            <a href="#features" className="cta-btn">Learn More</a>
            </div>
        
      </section>

      

      <section className="features " id="features">
        <div className="container">
          <h2 style={{ fontFamily: 'sans-serif',  fontStyle: 'italic' }}  >Features</h2>
          <div className="feature-cards style">
            <div className="card style">
              <h3 style={{ fontFamily: 'sans-serif',  fontStyle: 'italic' }} >Advanced Algorithms</h3>
              <p>Our tool uses Deep learning to provide accurate predictions.</p>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'sans-serif',  fontStyle: 'italic' }}  >Personalized Predictions</h3>
              <p>Receive tailored risk assessments based on your health data.</p>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }} >Easy to Use</h3>
              <p>Our tool is user-friendly and provides instant results.</p>
            </div>
          </div>
        </div>
      </section>

     <div>
        <AboutDiabetes/>
     </div>
     {/* <div>
        <Footer/>
     </div> */}
        </>
    );
};

export default Home;
