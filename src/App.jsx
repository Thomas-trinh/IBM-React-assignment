import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductList from './Component/ProductPages';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Cart from './Component/CartPage';
import CheckoutPage from './Component/CheckoutPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/Product" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
