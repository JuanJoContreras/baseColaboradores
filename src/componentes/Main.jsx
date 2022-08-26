import React, { useState } from 'react';
import { BaseColaboradores } from '../bbdd';
import { nanoid } from 'nanoid';

const Main = (Props) => {
    const [nColaborador, setnColaborador] = useState("");
    const [cColaborador, setcColaborador] = useState("");
    const [Colaboradores, setColaboradores] = useState(BaseColaboradores);
  
    const agregarColaborador = (e) => {
      e.preventDefault();
      if (!nColaborador.trim() || !cColaborador.trim()) {
        alert("Favor rellena con tus datos!");
      } else {
        setColaboradores([
          ...Colaboradores,
          { id: nanoid(), nombre: nColaborador, correo: cColaborador }
        ]);
      }
    };
  
    return (
      <>
        <div className="container">
          <form onSubmit={agregarColaborador}>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Ingresa el nombre del colaborador"
              id="nombre"
              onChange={(e) => setnColaborador(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa correo del colaborador"
              id="correo"
              onChange={(e) => setcColaborador(e.target.value)}
            />
            <input
              type="submit"
              value="Agregar colaborador"
              className="btn btn-primary my-4"
            />
          </form>
  
          <hr />
          <div>
            <h1>Listado de colaboradores</h1>
            {Colaboradores.filter((el) => {
              if (Props.termino === "") {
                return el;
              } else if (
                el.nombre
                  .toLocaleLowerCase()
                  .includes(Props.termino.toLocaleLowerCase())
              ) {
                return el;
              }
            }).map((el) => (
              <div key={el.id}>
                <p>
                  {el.nombre} - {el.correo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

export default Main