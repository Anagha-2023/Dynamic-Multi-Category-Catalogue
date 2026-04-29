import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1><a href="/">📦 Dynamic Catalog</a></h1>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:itemname" element={<ItemDetail />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2026 Dynamic Multi-Category Catalog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
