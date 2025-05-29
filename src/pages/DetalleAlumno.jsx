import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AlumnosContext } from '../context/AlumnosContext';

export default function DetalleAlumno() {
  const { id } = useParams();
  const { alumnos } = useContext(AlumnosContext);

  const alumno = alumnos.find((a) => a.id === id);

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <div>
      <h2>Detalle del Alumno</h2>
      {Object.entries(alumno).map(([key, value]) => (
        <p key={key}><strong>{key}:</strong> {value}</p>
      ))}
    </div>
  );
}
