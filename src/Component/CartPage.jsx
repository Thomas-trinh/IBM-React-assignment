import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, clearCart } from './CartSlice';
import MyNavbar from './Navbar';

const CartPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.cartItems);

    const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    if (window.location.hash !== '#Cart') {
        return null;
    }

    return (
        <>
            <MyNavbar />
            <div className="cart-page">
                <h2>Your Cart</h2>
                {items.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="cart-list">
                            {items.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        {/* <p>${item.price}</p> */}
                                        <p>Price: ${item.price} - Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                        <div className="cart-actions">
                                            <button onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => dispatch(increaseItemQuantity(item.id))}>+</button>
                                            <button onClick={() => dispatch(removeItemFromCart(item.id))}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <h3>Total: ${totalPrice.toFixed(2)}</h3>
                        <button className="checkout-button"
                            onClick={() => {
                                dispatch(clearCart());
                                window.location.hash = '#Checkout';
                              }}
                              >
                            Checkout
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default CartPage;
