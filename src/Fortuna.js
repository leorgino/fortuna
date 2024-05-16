import React from 'react';
import './App.css';

function Fortuna({ imgUrl, texto, generarFortuna }) {
  return (
    <>
      <div className="contenedor">
        <img src={imgUrl} alt="Imagen" className="imagen" />
        <span className="texto">{texto}</span>
      </div>
      <div>
        <button className="boton" onClick={generarFortuna}>
          Tu Fortuna en un Click
        </button>
      </div>
    </>
  );
}

export default Fortuna;
