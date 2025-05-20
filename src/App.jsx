import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lookbook from './components/Lookbook';
import ProductDetailPage from './components/ProductDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Lookbook />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
