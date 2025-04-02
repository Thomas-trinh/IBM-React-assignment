import React from 'react';
import './ProductPages.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addItemToCart } from './CartSlice';
import MyNavbar from './Navbar';

const ProductList = () => {

    const products = [
        {
          id: 1,
          name: 'Fiddle Leaf Fig',
          price: 45,
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 2,
          name: 'Monstera Deliciosa',
          price: 55,
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 3,
          name: 'Snake Plant',
          price: 30,
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 4,
          name: 'Peace Lily',
          price: 35,
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 5,
          name: 'Succulent Assortment (5-pack)',
          price: 25,
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 6,
          name: 'Mini Bonsai Tree',
          price: 60,
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 7,
          name: 'Hanging Spider Plant',
          price: 28,
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 8,
          name: 'Herb Starter Kit (Basil, Mint, Thyme)',
          price: 40,
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
        },
      ];

      const dispatch = useDispatch();
      const items = useSelector((state) => state.cart.cartItems);
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

      if (window.location.hash !== '#Product') {
        return null;
      }

      const handleAddToCart = product => {
        dispatch(addItemToCart(product));
      };

    return (
        <>
        <MyNavbar></MyNavbar>
        <div className="product-list">
            {products.map(product => (
                <li key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p> ${product.price}</p>
                    <button
                    onClick={() => handleAddToCart(product)}>
                        Add to Cart
                    </button>
                </li>
            ))}
        </div>
        </>
    );
}

export default ProductList;