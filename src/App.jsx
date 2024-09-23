import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductItem from './pages/ProductItem/ProductItem';
import ProductListing from './pages/ProductItem/ProductListing';
import Navbar from './common/Navbar'; 
import Footer from './common/Footer';

function App() {
  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/productitem" element={<ProductItem />} />
        <Route path="/products" element={<ProductListing />} /> {/* Adjust this path as needed */}
      </Routes>
      <Footer />  
    </>
  );
}

export default App;
