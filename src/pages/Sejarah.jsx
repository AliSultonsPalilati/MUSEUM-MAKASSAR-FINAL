import React from 'react';
import './Sejarah.css'; 
import { FaLandmark, FaPencilRuler, FaRegCalendarAlt } from 'react-icons/fa';

// Import gambar-gambar
import imgLama from '../assets/sejarah/gedung-lama.jpg';
import imgSekarang from '../assets/tampilan-utama.jpg';
import imgDetail from '../assets/sejarah/detail-arsitektur.jpg';

export default function Sejarah() {
  return (
    <div className="sejarah-page container">
      <header className="sejarah-hero">
        <div className="hero-text-overlay">
          <h1>Jejak Waktu di Jantung Kota</h1>
          <p>Kisah sebuah gedung ikonik yang bertransformasi dari pusat pemerintahan menjadi penjaga warisan budaya Makassar.</p>
        </div>
      </header>

      <section className="sejarah-content-layout">
        <div className="sejarah-narrative">
          <h2>Dari Stadhuis Menjadi Museum</h2>
          <p>
            Gedung yang kini Anda kenal sebagai Museum Kota Makassar awalnya adalah Stadhuis atau Balai Kota pada masa pemerintahan Hindia Belanda. Pembangunannya dimulai pada tahun 1916 dan dirancang oleh seorang arsitek Belanda, G.O. Appell.
          </p>
          <p>
            Dengan gaya arsitektur Neoklasik Eropa yang kental, gedung ini menjadi saksi bisu berbagai peristiwa penting di Makassar. Setelah kemerdekaan, fungsinya tetap sebagai kantor Walikota hingga tahun 1999. Menyadari nilai historisnya yang tinggi, Pemerintah Kota kemudian merevitalisasi gedung ini. Tepat pada tanggal 14 Mei 2000, gedung ini diresmikan sebagai Museum Kota Makassar untuk melestarikan dan memamerkan sejarah serta budaya kota.
          </p>
        </div>
        <aside className="sejarah-facts">
            <h3>Fakta Singkat</h3>
            <ul>
                <li><FaLandmark /> <strong>Fungsi Awal:</strong> Stadhuis (Balai Kota)</li>
                <li><FaPencilRuler /> <strong>Arsitek:</strong> G.O. Appell</li>
                <li><FaRegCalendarAlt /> <strong>Dibangun:</strong> 1916</li>
                <li><strong>Gaya:</strong> Neoklasik Eropa</li>
            </ul>
        </aside>
      </section>

      <section className="timeline-container">
        <h2>Linimasa Penting</h2>
        <ul className="timeline">
          <li>
            <div className="timeline-content">
              <h3>1916</h3>
              <p>Pembangunan gedung Stadhuis (Balai Kota) dimulai dengan arsitektur megah khas Eropa.</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3>1945 - 1999</h3>
              <p>Setelah kemerdekaan, gedung ini terus berfungsi sebagai pusat pemerintahan dan kantor Walikota Makassar.</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3>14 Mei 2000</h3>
              <p>Gedung secara resmi dialihfungsikan dan diresmikan sebagai Museum Kota Makassar.</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3>2000 - Sekarang</h3>
              <p>Revitalisasi dan pengembangan terus dilakukan untuk menjadikan museum sebagai pusat edukasi dan budaya terkemuka.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="gallery-container">
        <h2>Galeri Sejarah</h2>
        <div className="gallery-grid">
            <figure>
                <img src={imgLama} alt="Gedung Balai Kota di masa kolonial" />
                <figcaption>Gedung Balai Kota di masa kolonial</figcaption>
            </figure>
            <figure>
                <img src={imgSekarang} alt="Museum Kota Makassar saat ini" />
                <figcaption>Wajah Museum Kota Makassar saat ini</figcaption>
            </figure>
            <figure>
                <img src={imgDetail} alt="Detail arsitektur gedung" />
                <figcaption>Detail arsitektur Neoklasik</figcaption>
            </figure>
        </div>
      </section>
    </div>
  );
}