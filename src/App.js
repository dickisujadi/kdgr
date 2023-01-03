import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import PhotoDetailPage from './pages/PhotoDetailPage';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/photos/:id" element={<PhotoDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
