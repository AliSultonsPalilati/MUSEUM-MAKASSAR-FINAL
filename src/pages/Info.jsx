import React from "react";
import "./Info.css"; // <-- Jangan lupa import file CSS baru
// Import ikon dari library react-icons
import {
  FaMapMarkerAlt,
  FaClock,
  FaTicketAlt,
  FaInfoCircle,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function Info() {
  return (
    <div className="info-page container">
      <div className="info-header">
        <h1>Informasi Kunjungan</h1>
        <p>Semua yang perlu Anda ketahui sebelum mengunjungi kami.</p>
      </div>

      <div className="info-layout">
        {/* Kolom Kiri: Peta */}
        <div className="info-map">
          <h3>
            <FaMapMarkerAlt /> Lokasi Kami
          </h3>
          <p>
            Jl. Balaikota No.11, Baru, Kec. Ujung Pandang, Kota Makassar,
            Sulawesi Selatan 90171
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8080051878605!2d119.4060511740691!3d-5.134596794842578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf02a562a0923f%3A0xa004e399dcd70e22!2sMuseum%20of%20Makassar!5e0!3m2!1sen!2sid!4v1751638219495!5m2!1sen!2sid"
              referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Museum Kota Makassar"
            ></iframe>
          </div>
        </div>

        {/* Kolom Kanan: Detail Info */}
        <div className="info-details">
          {/* Info Jam Operasional */}
          <div className="info-card">
            <h3>
              <FaClock /> Jam Operasional
            </h3>
            <ul>
              <li>
                <strong>Selasa - Jumat:</strong> 08:00 - 15:30 WITA
              </li>
              <li>
                <strong>Sabtu - Minggu:</strong> TUTUP
              </li>
              <li className="closed">
                <strong>Senin & Hari Libur Nasional:</strong> Tutup
              </li>
            </ul>
          </div>

          {/* Info Harga Tiket */}
          <div className="info-card">
            <h3>
              <FaTicketAlt /> Harga Tiket Masuk
            </h3>
            <ul>
              <li>
                <strong>Pelajar/Mahasiswa:</strong> Gratis,
              </li>
              <li>
                <strong>Umum (Domestik):</strong> Gratis,
              </li>
              <li>
                <strong>Turis Asing:</strong> Gratis,
              </li>
            </ul>
          </div>

          {/* Info Fasilitas & Aturan */}
          <div className="info-card">
            <h3>
              <FaInfoCircle /> Fasilitas & Aturan
            </h3>
            <p>Untuk kenyamanan dan keamanan bersama, mohon perhatikan:</p>
            <ul className="rules-list">
              <li>
                <FaCheckCircle className="icon-check" /> Area Parkir
              </li>
              <li>
                <FaCheckCircle className="icon-check" /> Toilet
              </li>
              <li>
                <FaCheckCircle className="icon-check" /> Ruang Pameran Ber-AC
              </li>
              <li>
                <FaCheckCircle className="icon-check" /> Jasa Pemandu (dengan
                konfirmasi)
              </li>
              <br />
              <li>
                <FaTimesCircle className="icon-cross" /> Dilarang menyentuh
                koleksi pameran
              </li>
              <li>
                <FaTimesCircle className="icon-cross" /> Dilarang membawa
                makanan & minuman
              </li>
              <li>
                <FaTimesCircle className="icon-cross" /> Dilarang membuat
                kegaduhan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
