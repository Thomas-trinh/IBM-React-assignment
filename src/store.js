import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Component/CartSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;