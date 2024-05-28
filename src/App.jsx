import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LeaderBoard from './LeaderBoard';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <LeaderBoard />
    </>
  );
}

export default App;
