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
          image: 'https://cdn.prod.website-files.com/674509d7f5ca92447c63bb30/674517d7d00829a1f4f4487e_IMG_0789%20(Large).jpg',
        },
        {
          id: 2,
          name: 'Monstera Deliciosa',
          price: 55,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLurDlXT1QSqwWXvcEARvOuSXyC7_En2M6WQ&s',
        },
        {
          id: 3,
          name: 'Snake Plant',
          price: 30,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUDNzeK8oiy72w-Ye4LKEv46vag03FvRoVw&s',
        },
        {
          id: 4,
          name: 'Peace Lily',
          price: 35,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73IGDEfU_cG2OA8T88bzs36kpAvYKHHp6ig&s',
        },
        {
          id: 5,
          name: 'Succulent Assortment (5-pack)',
          price: 25,
          image: 'https://www.nurserywarehouse.com.au/cdn/shop/files/preview_images/9baf2bb7c74e42499cbeb3110e7acb18.thumbnail.0000000000.jpg?v=1729653440&width=1946',
        },
        {
          id: 6,
          name: 'Mini Bonsai Tree',
          price: 60,
          image: 'https://www.thetutuguru.com.au/wp-content/uploads/2013/09/Hello-Hello-Plants-Nursery-melbourne-victoria-australia-strelitzia-reginae-Bird-of-Paradise.jpg',
        },
        {
          id: 7,
          name: 'Hanging Spider Plant',
          price: 28,
          image: 'https://traralgonwestnursery.com.au/cdn/shop/products/birdofparadise-01_1024x1024.jpg?v=1630368587',
        },
        {
          id: 8,
          name: 'Herb Starter Kit (Basil, Mint, Thyme)',
          price: 40,
          image: 'https://gardenerspath.com/wp-content/uploads/2020/10/Bright-Blue-and-Orange-Bird-of-Paradise-Flowers-in-the-Garden.jpg',
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