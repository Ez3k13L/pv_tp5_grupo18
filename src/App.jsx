import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ListaAlumnos from './pages/ListaAlumnos';
import NuevoAlumno from './pages/NuevoAlumno';
import EditarAlumno from './pages/EditarAlumno';
import DetalleAlumno from './pages/DetalleAlumno';
import AcercaDe from './pages/AcercaDe';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<ListaAlumnos />} />
        <Route path="/alumnos/nuevo" element={<NuevoAlumno />} />
        <Route path="/alumnos/:id" element={<DetalleAlumno />} />
        <Route path="/alumnos/:id/editar" element={<EditarAlumno />} />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </>
  );
}

export default App;
