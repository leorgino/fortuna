import React, { useState } from 'react';
import fondo1 from './imagenes/fondo1.jpg';
import fondo2 from './imagenes/fondo2.jpg';
import fondo3 from './imagenes/fondo3.jpg';
import fondo4 from './imagenes/fondo4.jpg';
import Fortuna from './Fortuna';
import phrases from './utils/phrases.json';

const imagenes = [
  fondo1,
  fondo2,
  fondo3,
  fondo4,
];

function App() {
  console.log('textos', phrases)
  const [imagenSeleccionada, setImagenSeleccionada] = useState('');
  const [textoSeleccionado, setTextoSeleccionado] = useState('');

  const generarFortuna = () => {
    const indiceAleatorioImagen = Math.floor(Math.random() * imagenes.length);
    const indiceAleatorioTexto = Math.floor(Math.random() * phrases.length);

    setImagenSeleccionada(imagenes[indiceAleatorioImagen]);
    setTextoSeleccionado(phrases[indiceAleatorioTexto]);
  };

  return (
    <>
      <Fortuna
        key={1}
        imgUrl={imagenSeleccionada}
        texto={textoSeleccionado}
        generarFortuna={generarFortuna}
      />
    </>
  );
}

export default App;
