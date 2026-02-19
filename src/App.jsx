import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import AlbumPage from './pages/AlbumPage';
import MusicasPage from './pages/MusicasPage';
import FilmesPage from './pages/FilmesPage';
import PedidoPage from './pages/PedidoPage';

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AlbumPage />} />
        <Route path="/musicas" element={<MusicasPage />} />
        <Route path="/filmes" element={<FilmesPage />} />
        <Route path="/pedido-especial" element={<PedidoPage />} />
      </Routes>
    </Router>
  );
}


