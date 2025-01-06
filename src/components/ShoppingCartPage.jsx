import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeFromCart } from '../redux/actions';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'; // استيراد الأيقونات

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => dispatch(increment(item.id))}>
                  <FaPlus /> 
                </button>
                <button onClick={() => dispatch(decrement(item.id))}>
                  <FaMinus /> 
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  <FaTrash /> 
                </button>
              </div>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Items: {cart.length}</h2>
        <h2>Total Cost: ${totalCost}</h2>
      </div>
      <div className="cart-actions">
        <button className="checkout-btn">Checkout Soon</button>
        <Link to="/product-listing">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
