import React from 'react';
import './CheckoutPage.css';
import MyNavbar from './Navbar';

const CheckoutPage = () => {
  if (window.location.hash !== '#Checkout') {
    return null;
  }

  return (
    <>
      <MyNavbar />
      <div className="checkout-page">
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order has been successfully placed.</p>
        <a className="continue-button" href="#Product">
          Continue Shopping
        </a>
      </div>
    </>
  );
};

export default CheckoutPage;
