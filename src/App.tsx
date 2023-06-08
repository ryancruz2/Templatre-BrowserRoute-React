import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Menu from './pages/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/screen1' element={<Screen1 />} />
        <Route path='/screen2' element={<Screen2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
