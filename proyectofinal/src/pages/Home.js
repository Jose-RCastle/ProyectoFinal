import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-5">
      <h1>Bienvenido a la Biblioteca</h1>
      <p className="lead fs-4">
        Gestiona tu colección de libros con nuestra aplicación
      </p>
      
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Comienza ahora</h5>
              <p className="card-text">
                Navega al apartado de libros para gestionar tu biblioteca
              </p>
              <Link to="/libros" className="btn btn-primary">
                Ir a Gestión de Libros
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;