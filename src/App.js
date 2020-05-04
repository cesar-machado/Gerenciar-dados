import React from 'react';

import './app.css'

import Header from './components/Header/Header'
import Menu from './components/menu/Menu'
import Main from './components/main/Main'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div className="app">
      <Header  />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
