import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.webp'; // استيراد الصورة بشكل صحيح

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <div className="left-section">
          <h1>Plant Haven</h1>
          <Link to="/product-listing">
            <button>Get Started</button>
          </Link>
        </div>
        <div className="right-section">
          <p className="fancy-paragraph">
            Welcome to Plant Haven, your one-stop shop for all things green and 
            beautiful. Whether you're a seasoned gardener or a beginner looking 
            to add some life to your space, we have something for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
