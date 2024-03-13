import React, { useState } from 'react';
import { ReactComponent as Logo } from './logo.svg'; // import the logo as a React Component
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <Logo fill="#FF6B6B" className="logo-image" />
        <h1 className="logo">WriteGather</h1>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
        {isOpen ? 'X' : '≡'} {/* use 'X' for close and '≡' for hamburger */}
      </button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Roadmap</a></li>
          <li><a href="#" className="sign-up">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;