import { useState } from "react";


const Contador = () => {

    const [numero, setnumero] = useState(1)

// let numero = 10;
// numero = nuemero + 1;

  return (
    <article className="text-center">
      <h2>Contador</h2>
      <p>{numero}</p>
      <button
        className="btn btn-primary"
        onClick={() => setnumero (numero + 1)}
      >
        +1
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setnumero (numero - 1)}
      >
        -1
      </button>
      
    {/*  Agregar un boton para decrementar en 1 el valor del state. */}
    </article>
    
  );
};

export default Contador;
