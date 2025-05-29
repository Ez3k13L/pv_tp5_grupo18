import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AlumnosContext } from '../context/AlumnosContext';

export default function EditarAlumno() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { alumnos, editarAlumno } = useContext(AlumnosContext);

  const [form, setForm] = useState(null);

  // Buscar alumno al montar el componente
  useEffect(() => {
    const alumnoExistente = alumnos.find((a) => a.id === id);
    if (alumnoExistente) {
      setForm(alumnoExistente);
    } else {
      alert('Alumno no encontrado');
      navigate('/alumnos');
    }
  }, [id, alumnos, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editarAlumno(form);
    navigate('/alumnos');
  };

  if (!form) {
    return <p>Cargando alumno...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Alumno</h2>
      {Object.keys(form).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input
            name={key}
            value={form[key]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Guardar Cambios</button>
    </form>
  );
}
