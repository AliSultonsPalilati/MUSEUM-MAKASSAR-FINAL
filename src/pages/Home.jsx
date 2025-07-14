import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/tampilan-utama.jpg'; // Pastikan path gambar ini benar

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Selamat Datang di Museum Kota Makassar</h1>
            <p>Menjelajahi Kekayaan Sejarah dan Budaya Kota Daeng</p>
            <Link to="/koleksi" className="hero-button">Lihat Koleksi Museum</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="video-section">
          <div className="container">
            <h2>Sekilas Tentang Museum of Makassar</h2>
            <p>Saksikan perjalanan singkat mengenai kekayaan koleksi dan sejarah yang dijelaskan oleh Kelompok 6 - Pemrograman Multimedia.</p>
            <div className="video-wrapper">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Cyb1clOmDKo?si=YgCBLSbDdIajvOA0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2>Mengapa Berkunjung?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Koleksi Autentik</h3>
                <p>Lihat ribuan artefak bersejarah dari berbagai era.</p>
              </div>
              <div className="feature-item">
                <h3>Edukasi & Sejarah</h3>
                <p>Pelajari lebih dalam tentang warisan budaya Makassar.</p>
              </div>
              <div className="feature-item">
                <h3>Acara Menarik</h3>
                <p>Ikuti Instagram @museumkotamakassar untuk melihat acara menarik.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;