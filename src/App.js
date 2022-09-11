import React from 'react';
import { NavBar, Products, HeroSection, DevApi, Customers } from './components/index';
import  { useState } from 'react';

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  return (
    <div>
      <NavBar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Products />
      <DevApi />
      <Customers />
    </div>
  );
}

export default App;
