import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Museum Makassar
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Beranda</Link>
          </li>
          <li className="nav-item">
            <Link to="/sejarah" className="nav-links">Sejarah</Link>
          </li>
          <li className="nav-item">
            <Link to="/koleksi" className="nav-links">Koleksi</Link>
          </li>
          <li className="nav-item">
            <Link to="/info" className="nav-links">Info</Link>
          </li>
          <li className="nav-item">
            <Link to="/agenda" className="nav-links">Agenda</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;