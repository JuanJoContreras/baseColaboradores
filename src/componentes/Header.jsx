import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark mb-5 p-4">
        <div className="container">
          <h4 className="text-white">Buscador de Colaboradores</h4>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Busca un colaborador"
              onChange={(e) => {
                Props.setTermino(e.target.value);
              }}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header