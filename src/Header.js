import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="logo.png" alt="logo" className="logo-image" /> {/* Replace "logo.png" with your actual logo image path */}
        <h1 className="logo">WriteGather</h1>
      </div>
      <nav>
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