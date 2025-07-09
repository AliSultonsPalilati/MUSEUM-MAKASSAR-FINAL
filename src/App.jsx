import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sejarah from './pages/Sejarah'
import Koleksi from './pages/Koleksi'
import Info from './pages/Info'
import Agenda from './pages/Agenda'
import Navbar from './components/navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
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
  )
}
