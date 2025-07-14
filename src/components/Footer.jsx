import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section footer-about">
          <h4>Museum Kota Makassar</h4>
          <p>
            Jl. Balaikota No.11, Baru, Kec. Ujung Pandang, Kota Makassar, Sulawesi Selatan 90111.
            <br />
            Sebuah tempat untuk melestarikan dan menampilkan warisan budaya.
          </p>
        </div>
        <div className="footer-section footer-links">
          <h3>Tautan Cepat</h3>
          <ul>
            {/* Menggunakan Link untuk navigasi internal */}
            <li><Link to="/sejarah">Sejarah</Link></li>
            <li><Link to="/koleksi">Koleksi</Link></li>
            <li><Link to="/info">Info Kunjungan</Link></li>
            <li><Link to="/agenda">Agenda</Link></li>
          </ul>
        </div>
        <div className="footer-section footer-social">
          <h3>Ikuti Kami</h3>
          <div className="social-icons">
             {/* Ganti # dengan link media sosial yang benar */}
            <a href="https://www.instagram.com/museumkotamakassar/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Museum Makassar. Dibuat Oleh Kelompok 6.</p>
      </div>
    </footer>
  );
}

export default Footer;