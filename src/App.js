import React from 'react';
import { NavBar, HeroSection } from './components/index';
import  { useState } from 'react';

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  return (
    <div>
      <NavBar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
    </div>
  );
}

export default App;
