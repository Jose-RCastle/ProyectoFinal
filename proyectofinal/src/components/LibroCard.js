import React from 'react';

function LibroCard({ libro, onEdit, onDelete }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{libro.titulo}</h5>
        <p className="card-text">
          <span className="fw-bold">Autor:</span> {libro.autor}
        </p>
      </div>
      <div className="card-footer bg-white border-0">
        <button 
          className="btn btn-primary me-2" 
          onClick={() => onEdit(libro)}
        >
          Editar
        </button>
        <button 
          className="btn btn-danger" 
          onClick={() => onDelete(libro.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default LibroCard;