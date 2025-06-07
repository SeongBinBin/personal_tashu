import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection.js';
import MainSection from './components/MainSection/MainSection.js';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <HeaderSection />
        <Routes>
          <Route path="/" element={<MainSection />} />
          {/* 다른 라우트 예시 */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
