import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import Header from './components/Header';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product-listing" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
