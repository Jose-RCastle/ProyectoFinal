import React from 'react';

function LibroTable({ libros, onEdit, onDelete }) {
  return (
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th className="text-end">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {libros.map(libro => (
          <tr key={libro.id}>
            <td>{libro.titulo}</td>
            <td>{libro.autor}</td>
            <td className="text-end">
              <button 
                className="btn btn-sm btn-primary me-2" 
                onClick={() => onEdit(libro)}
              >
                Editar
              </button>
              <button 
                className="btn btn-sm btn-danger" 
                onClick={() => onDelete(libro.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LibroTable;