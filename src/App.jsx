import './App.css';
import { Routes, Route } from 'react-router-dom';

import Compare from './Compare/Compare.jsx';
import Watchlist from './Watchlist/Watchlist.jsx'; 

function App() {
  return (
    <>

      <Routes>
        <Route path="/watchlist" element={<Watchlist />} /> 
        <Route path="/compare" element={<Compare />} />
      </Routes>

    </>
  );
}

export default App;
