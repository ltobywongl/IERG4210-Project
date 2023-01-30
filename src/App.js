import React from "react";
import './App.css';
import Navigation from './navigation';
import Main from './main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Main />
    </BrowserRouter>
  );
}

export default App;
