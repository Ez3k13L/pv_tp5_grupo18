import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlumnosContext } from '../context/AlumnosContext';

export default function ListaAlumnos() {
  const { alumnos, eliminarAlumno } = useContext(AlumnosContext);
  const navigate = useNavigate();

  const handleEliminar = (id) => {
    if (confirm('¿Seguro que deseas eliminar este alumno?')) {
      eliminarAlumno(id);
    }
  };

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table>
        <thead>
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre} {alumno.apellido}</td>
              <td>
                <button onClick={() => navigate(`/alumnos/${alumno.id}`)}>Ver</button>
                <button onClick={() => navigate(`/alumnos/${alumno.id}/editar`)}>Editar</button>
                <button onClick={() => handleEliminar(alumno.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
