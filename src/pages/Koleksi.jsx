import React from "react";
import { Link } from 'react-router-dom'; // <-- Import Link
import "./Koleksi.css"; 

// Import gambar untuk setiap kartu koleksi
import imgArkeologi from "../assets/koleksi/arkeologi.jpg";
import imgNumismatik from "../assets/koleksi/numismatik.jpg";
import imgEtnografi from "../assets/koleksi/sepeda.jpg";
import imgMeriam from "../assets/koleksi/bola-meriam.jpg";
import imgPameran from "../assets/koleksi/pameran.jpg";
import imgBadik from "../assets/koleksi/badik.jpg";
import imgKeramik from "../assets/koleksi/keramik.jpg";

export default function Koleksi() {
  return (
    <div className="koleksi-page container">
      <header className="koleksi-header">
        <h1>Koleksi & Pameran</h1>
        <p>
          Jelajahi kekayaan artefak dan warisan budaya yang disimpan di museum.
        </p>
      </header>

      <div className="koleksi-grid">
        {/* Kartu 1: Arkeologi */}
        <div className="koleksi-card">
          <img
            src={imgArkeologi}
            alt="Koleksi Arkeologi"
            className="card-image"
          />
          <div className="card-content">
            <h3>Koleksi Arkeologi</h3>
            <p>
              Batu bata kuno peninggalan sejarah, digunakan pada bangunan penting era kolonial di Makassar.
            </p>
          </div>
        </div>

        {/* Kartu 2: Numismatik */}
        <div className="koleksi-card">
          <img
            src={imgNumismatik}
            alt="Koleksi Numismatik"
            className="card-image"
          />
          <div className="card-content">
            <h3>Koleksi Numismatik</h3>
            <p>
              Kumpulan mata uang dan koin kuno yang pernah beredar dan digunakan
              dalam perdagangan di Makassar.
            </p>
          </div>
        </div>

        {/* Kartu 3: Etnografi */}
        <div className="koleksi-card">
          <img
            src={imgEtnografi}
            alt="Koleksi Etnografi"
            className="card-image"
          />
          <div className="card-content">
            <h3>Koleksi Etnografi</h3>
            <p>
              Benda-benda budaya seperti sepeda ini yang menggambarkan kehidupan sehari-hari sebagai kendaraan.
            </p>
          </div>
        </div>

        {/* Kartu 4: Meriam */}
        <div className="koleksi-card">
          <img src={imgMeriam} alt="Koleksi Meriam" className="card-image" />
          <div className="card-content">
            <h3>Koleksi Meriam</h3>
            <p>
              Bola meriam peninggalan kolonial, digunakan sebagai pertahanan di benteng wilayah pesisir Makassar.
            </p>
          </div>
        </div>

        {/* Kartu 5: Badik */}
        <div className="koleksi-card">
          <img src={imgBadik} alt="Koleksi Badik" className="card-image" />
          <div className="card-content">
            <h3>Badik - Senjata Tradisional</h3>
            <p>
              Simbol kehormatan dan pertahanan diri masyarakat Bugis-Makassar sejak dahulu.
            </p>
          </div>
        </div>

        {/* Kartu 6: Keramik Abad 16–17 */}
        <div className="koleksi-card">
          <img src={imgKeramik} alt="Koleksi Keramik" className="card-image" />
          <div className="card-content">
            <h3>Koleksi Keramik Abad 16–17</h3>
            <p>
              Keramik kuno bukti hubungan dagang maritim antara Makassar dengan bangsa Asia lainnya.
            </p>
          </div>
        </div>
      </div>

      {/* Section Koleksi Lainnya */}
      <section className="koleksi-more-section">
        <div className="more-content">
          <div className="more-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Dan Masih Banyak Lagi</h3>
          <p>
            Museum ini menyimpan ratusan koleksi lain, mulai dari naskah kuno, pakaian tradisional, hingga dokumentasi sejarah langka yang menceritakan perjalanan panjang Kota Makassar.
          </p>
          <div className="more-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Artefak</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15</span>
              <span className="stat-label">Kategori</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Tahun Sejarah</span>
            </div>
          </div>
          <Link to="/koleksi" className="more-button">
            Jelajahi Semua Koleksi
          </Link>
        </div>
      </section>

      <section className="pameran-section">
        <div className="pameran-image">
          <img src={imgPameran} alt="Pameran Fotografi" />
        </div>
        <div className="pameran-info">
          <h4>PAMERAN SAAT INI</h4>
          <h2>Wajah Makassar Tempo Doeloe</h2>
          <p>
            Saksikan koleksi fotografi langka yang membawa Anda kembali ke
            suasana Kota Makassar di masa lalu. Pameran ini berlangsung hingga
            akhir tahun. Jangan lewatkan!
          </p>
          <Link to="/agenda" className="pameran-button">
            Lihat Jadwal Agenda
          </Link>
        </div>
      </section>
    </div>
  );
}