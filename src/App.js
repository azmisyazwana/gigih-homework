import logo from './logo.svg';
import './App.css';
import Song from './component/Song';
import data from './Data/data';
import Track from './component/Track';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Search from './component/Search/Search';
import Home from './pages/Home'

function App() {

  return (
    <div className='app'>
      <Home/>
    </div>
  ) 
}

export default App;
