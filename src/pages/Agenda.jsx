import React from 'react';
import './Agenda.css'; // <-- Import file CSS baru
import { FaCalendarAlt, FaRegNewspaper } from "react-icons/fa";

// Import gambar untuk agenda & berita
import imgWorkshop from '../assets/agenda/workshop-lontara.jpg';
import imgKunjungan from '../assets/agenda/kunjungan.jpg';
import imgTur from '../assets/agenda/tur-museum.jpg';

export default function Agenda() {
  return (
    <div className="agenda-page container">
      <div className="agenda-header">
        <h1>Agenda & Berita</h1>
        <p>Ikuti perkembangan terbaru, acara menarik, dan berita seputar Museum Kota Makassar.</p>
      </div>

      {/* === AGENDA TERDEKAT === */}
      <section className="upcoming-section">
        <h2><FaCalendarAlt /> Agenda Terdekat</h2>
        <div className="upcoming-grid">
          <div className="agenda-card large">
            <img src={imgWorkshop} alt="Workshop Aksara Lontara" className="agenda-card-img" />
            <div className="agenda-card-body">
              <p className="agenda-card-date">10 - 12 Agustus 2025</p>
              <h3>Workshop Menulis Aksara Lontara</h3>
              <p className="agenda-card-text">
                Mari lestarikan warisan budaya kita! Daftarkan diri Anda untuk belajar membaca dan menulis aksara Bugis-Makassar bersama para ahli. Terbuka untuk umum, tempat terbatas.
              </p>
              <a href="#" className="agenda-card-button">Daftar Sekarang</a>
            </div>
          </div>
           <div className="agenda-card large">
            <img src={imgTur} alt="Tur Spesial Akhir Pekan" className="agenda-card-img" />
            <div className="agenda-card-body">
              <p className="agenda-card-date">Setiap Sabtu & Minggu</p>
              <h3>Tur Spesial Bersama Pemandu</h3>
              <p className="agenda-card-text">
                Jelajahi setiap sudut museum dan dapatkan cerita mendalam di balik setiap koleksi bersama pemandu ahli kami. Sesi tersedia pukul 10:00 dan 14:00.
              </p>
              <a href="/info" className="agenda-card-button">Lihat Info Kunjungan</a>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* === BERITA & KEGIATAN TERDAHULU === */}
      <section className="news-section">
        <h2><FaRegNewspaper /> Berita & Kegiatan Terdahulu</h2>
        <div className="news-grid">
          <div className="agenda-card">
            <img src={imgKunjungan} alt="Kunjungan dari Unismuh Makassar" className="agenda-card-img" />
            <div className="agenda-card-body">
              <p className="agenda-card-date">28 Juni 2025</p>
              <h3>Kunjungan Studi dari Unismuh Makassar - Kelompok 6</h3>
              <p className="agenda-card-text">
                Sebuah kolaborasi menarik antara mahasiswa Teknik Informatika Unismuh Makassar dan Museum Kota Makassar! 
                Kelompok 6 melakukan kunjungan studi khusus untuk menciptakan konten video promosi yang akan memperkenalkan 
                keindahan dan kekayaan koleksi museum kepada masyarakat luas. Dengan keahlian teknologi dan kreativitas digital, 
                mereka mendokumentasikan setiap sudut bersejarah dan artefak berharga untuk dikemas dalam 
                storytelling yang menarik dan mudah diakses melalui platform digital.
              </p>
              <a href="#" className="agenda-card-button">Baca Selengkapnya</a>
            </div>
          </div>

          {/* Anda bisa menambahkan kartu berita lainnya di sini */}

        </div>
      </section>
    </div>
  );
}