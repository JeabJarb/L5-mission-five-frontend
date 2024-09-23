import './App.css';
import { Routes, Route } from 'react-router-dom';


import Compare from './Watchlist/Watchlist.jsx'; 

function App() {
  return (
    <>

      <Routes>
        <Route path="/watchlist" element={<Compare />} /> 
      </Routes>

    </>
  );
}

export default App;
