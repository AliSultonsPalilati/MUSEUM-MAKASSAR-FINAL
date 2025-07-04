import React from "react";
import "./Koleksi.css"; // <-- Jangan lupa import file CSS baru

// Import gambar untuk setiap kartu koleksi
import imgArkeologi from "../assets/koleksi/arkeologi.jpg";
import imgNumismatik from "../assets/koleksi/numismatik.jpg";
import imgEtnografi from "../assets/koleksi/etnografi.jpg";
import imgDiorama from "../assets/koleksi/diorama.jpg";
import imgPameran from "../assets/koleksi/pameran.jpg";

export default function Koleksi() {
  return (
    <div className="koleksi-page container">
      <div className="koleksi-header">
        <h1>Koleksi & Pameran</h1>
        <p>
          Jelajahi kekayaan artefak dan warisan budaya yang kami simpan dengan
          bangga.
        </p>
      </div>

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
              Artefak dari masa prasejarah hingga era kerajaan yang menceritakan
              peradaban awal di Sulawesi Selatan.
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
              Benda-benda budaya yang menggambarkan kehidupan sehari-hari, adat,
              dan kesenian suku-suku di Makassar.
            </p>
          </div>
        </div>

        {/* Kartu 4: Diorama */}
        <div className="koleksi-card">
          <img src={imgDiorama} alt="Diorama Sejarah" className="card-image" />
          <div className="card-content">
            <h3>Diorama Sejarah</h3>
            <p>
              Visualisasi tiga dimensi dari peristiwa-peristiwa penting dalam
              sejarah perjuangan Makassar.
            </p>
          </div>
        </div>
      </div>

      <div className="pameran-section">
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
          <a href="/agenda" className="pameran-button">
            Lihat Jadwal Agenda
          </a>
        </div>
      </div>
    </div>
  );
}
