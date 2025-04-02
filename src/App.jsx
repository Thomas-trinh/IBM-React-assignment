import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductList from './Component/ProductPages';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Component/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Product" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
