import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sejarah from './pages/Sejarah';
import Koleksi from './pages/Koleksi';
import Info from './pages/Info';
import Agenda from './pages/Agenda';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // ⬅️ Tambahkan ini

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* ⬅️ Tambahkan ini */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/koleksi" element={<Koleksi />} />
        <Route path="/info" element={<Info />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
      <Footer />
    </>
  );
}
