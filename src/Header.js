import React from 'react';
import './Header.css';
import { ReactComponent as Logo } from './logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Logo fill="#FF6B6B" className="logo-image" />
        <h1 className="logo">WriteGather</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Roadmap</a></li>
          <li><a href="#">Apply</a></li>
          <li><a href="#" className="sign-up">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;