import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-about">
          <h4>Museum Kota Makassar</h4>
          <p>
            Jl. Jenderal Sudirman No. 1, Makassar, Sulawesi Selatan. <br />
            Sebuah tempat untuk melestarikan dan menampilkan warisan budaya.
          </p>
        </div>
        <div className="footer-links">
          <h3>Tautan Cepat</h3>
          <ul>
            <li><a href="/sejarah">Sejarah</a></li>
            <li><a href="/koleksi">Koleksi</a></li>
            <li><a href="/info">Info Kunjungan</a></li>
            <li><a href="/agenda">Agenda</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Ikuti Kami</h3>
          {/* Ganti # dengan link media sosial Anda */}
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Museum Makassar. Dibuat Oleh kelompok 6</p>
      </div>
    </footer>
  );
}

export default Footer;