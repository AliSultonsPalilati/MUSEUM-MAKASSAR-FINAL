import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Museum Makassar
        </Link>

        {/* Hamburger icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>Beranda</Link>
          </li>
          <li className="nav-item">
            <Link to="/sejarah" className="nav-links" onClick={closeMenu}>Sejarah</Link>
          </li>
          <li className="nav-item">
            <Link to="/koleksi" className="nav-links" onClick={closeMenu}>Koleksi</Link>
          </li>
          <li className="nav-item">
            <Link to="/info" className="nav-links" onClick={closeMenu}>Info</Link>
          </li>
          <li className="nav-item">
            <Link to="/agenda" className="nav-links" onClick={closeMenu}>Agenda</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
