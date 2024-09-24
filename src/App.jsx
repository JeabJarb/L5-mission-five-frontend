import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductListing from './pages/ProductListing/ProductListing'

function App() {

  return (
    <>
      <Routes>
        <Route path="/productlisting" element={<ProductListing />} />
      </Routes>
    </>
  )
}

export default App
