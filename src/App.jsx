import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing/ProductListing";
import Compare from './Compare/Compare.jsx';
import Watchlist from './Watchlist/Watchlist.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/marketplace/products/:id" element={<ProductListing />} />
        <Route path="/watchlist" element={<Watchlist />} /> 
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </>
  );
}

export default App;
