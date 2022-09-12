import React from 'react';
import { NavBar, Products, HeroSection, DevApi, Customers, Contact, Footer } from './components/index';
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
