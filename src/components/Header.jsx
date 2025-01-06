import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 

const Header = () => {
  const cart = useSelector((state) => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="#product-listing">Products</Link> {/* الرابط يقود إلى قسم المنتجات */}
        <Link to="/cart">
          <FaShoppingCart /> 
          <span>Cart</span> 
          {totalItems > 0 && <span>({totalItems})</span>} {/* عرض عدد العناصر إذا كانت أكبر من 0 */}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
