import React, {useRef} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import StoriesPage from './pages/StoriesPage.js';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/pribehy" element={<StoriesPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;