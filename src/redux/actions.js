// تعريف الأنواع
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_CART = 'SET_CART';

// إضافة عنصر إلى العربة
export const addToCart = (plant) => ({
  type: ADD_TO_CART,
  payload: plant,
});

// إزالة عنصر من العربة
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

// زيادة الكمية
export const increment = (id) => ({
  type: INCREMENT,
  payload: id,
});

// تقليل الكمية
export const decrement = (id) => ({
    type: DECREMENT,
    payload: id,
  });
  

// تعيين العربة
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});
