import './App.css';
import { Routes, Route } from 'react-router-dom';
import Compare from './Watchlist/Watchlist.jsx'; 
import ProductListing from './pages/ProductListing/ProductListing'

function App() {
  return (
    <>

      <Routes>
        <Route path="/watchlist" element={<Compare />} /> 
        <Route path="/productlisting" element={<ProductListing />} />
      </Routes>

    </>
  );
}

export default App;
