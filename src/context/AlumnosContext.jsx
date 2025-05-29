import { createContext, useState, useEffect } from 'react';

export const AlumnosContext = createContext();

export const AlumnosProvider = ({ children }) => {
  const [alumnos, setAlumnos] = useState(() => {
    const guardados = localStorage.getItem('alumnos');
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }, [alumnos]);

  const agregarAlumno = (nuevo) => {
    setAlumnos([...alumnos, nuevo]);
  };

  const editarAlumno = (editado) => {
    setAlumnos(alumnos.map((a) => (a.id === editado.id ? editado : a)));
  };

  const eliminarAlumno = (id) => {
    setAlumnos(alumnos.filter((a) => a.id !== id));
  };

  return (
    <AlumnosContext.Provider value={{ alumnos, agregarAlumno, editarAlumno, eliminarAlumno }}>
      {children}
    </AlumnosContext.Provider>
  );
};
