import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import { Link } from 'react-router-dom';
import plant1 from '../assets/plant1.webp'; 
import plant2 from '../assets/plant2.webp'; 
import plant3 from '../assets/plant3.webp'; 

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const products = [
    { id: 1, name: 'Hanging Plant', price: 10, image: plant1 },
    { id: 2, name: 'Kentia ', price: 18, image: plant2 },
    { id: 3, name: 'Bonsai ', price: 13, image: plant3 },


  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)} disabled={cart.some(item => item.id === product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Link to="/shopping-cart">Go to Cart</Link>
    </div>
  );
};

export default ProductListingPage;
