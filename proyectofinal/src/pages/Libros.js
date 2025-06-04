import React, { useState } from 'react';
import LibroCard from '../components/LibroCard';
import LibroTable from '../components/LibroTable';

function Libros() {
  const [libros, setLibros] = useState([
    { id: 1, titulo: '1984', autor: 'George Orwell' },
    { id: 2, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' }
  ]);
  
  const [nuevoLibro, setNuevoLibro] = useState({ titulo: '', autor: '' });
  const [editando, setEditando] = useState(null);

  const agregarLibro = () => {
    if (nuevoLibro.titulo && nuevoLibro.autor) {
      const newId = libros.length > 0 ? Math.max(...libros.map(l => l.id)) + 1 : 1;
      setLibros([...libros, { ...nuevoLibro, id: newId }]);
      setNuevoLibro({ titulo: '', autor: '' });
    }
  };

  const iniciarEdicion = (libro) => {
    setEditando({ ...libro });
  };

  const guardarEdicion = () => {
    if (editando.titulo && editando.autor) {
      setLibros(libros.map(libro => libro.id === editando.id ? editando : libro));
      setEditando(null);
    }
  };

  const eliminarLibro = (id) => {
    setLibros(libros.filter(libro => libro.id !== id));
  };

  return (
    <div className="container">
      <h2 className="my-4">Gestión de Libros</h2>
      
      {/* Formulario para agregar/editar */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">
            {editando ? 'Editar Libro' : 'Agregar Nuevo Libro'}
          </h5>
          
          <div className="row g-3">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Título"
                value={editando ? editando.titulo : nuevoLibro.titulo}
                onChange={(e) => editando 
                  ? setEditando({...editando, titulo: e.target.value}) 
                  : setNuevoLibro({...nuevoLibro, titulo: e.target.value})
                }
              />
            </div>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Autor"
                value={editando ? editando.autor : nuevoLibro.autor}
                onChange={(e) => editando 
                  ? setEditando({...editando, autor: e.target.value}) 
                  : setNuevoLibro({...nuevoLibro, autor: e.target.value})
                }
              />
            </div>
            <div className="col-md-2">
              {editando ? (
                <>
                  <button 
                    className="btn btn-success me-2" 
                    onClick={guardarEdicion}
                  >
                    Guardar
                  </button>
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setEditando(null)}
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <button 
                  className="btn btn-primary" 
                  onClick={agregarLibro}
                >
                  Agregar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vista de tarjetas */}
      <h4 className="mt-5">Vista de Tarjetas</h4>
      <div className="row">
        {libros.map(libro => (
          <div key={libro.id} className="col-md-4 mb-3">
            <LibroCard 
              libro={libro} 
              onEdit={() => iniciarEdicion(libro)}
              onDelete={eliminarLibro} 
            />
          </div>
        ))}
      </div>

      {/* Vista de tabla */}
      <h4 className="mt-5">Vista de Tabla</h4>
      <LibroTable 
        libros={libros} 
        onEdit={iniciarEdicion}
        onDelete={eliminarLibro} 
      />
    </div>
  );
}

export default Libros;