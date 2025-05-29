import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlumnosContext } from '../context/AlumnosContext';

export default function NuevoAlumno() {
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: ''
  });

  const { agregarAlumno } = useContext(AlumnosContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarAlumno(form); // ✅ Añade el alumno al contexto
    navigate('/alumnos');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo Alumno</h2>
      {Object.keys(form).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input name={key} value={form[key]} onChange={handleChange} required />
        </div>
      ))}
      <button type="submit">Guardar</button>
    </form>
  );
}
