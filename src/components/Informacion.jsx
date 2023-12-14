import React from "react";

/* const Informacion = (props) => */

const Informacion = ({comision, anioActualProps}) => {
  //Aqui va la logica del componente

  return (
    //Aqui puede ir un poco de logica
    <>
      <h2>Conseptos de react {comision} </h2>
      <section>
        {/* Aqui va todo el maquetado del componente */}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          ratione? Tempore excepturi nesciunt dolor quia mollitia? Modi tempora
          aut magnam molestiae numquam iure illum sunt eaque esse veritatis
          explicabo incidunt excepturi quae quis eius, impedit doloribus ipsa at
          officia beatae. Ut excepturi nihil expedita illo labore hic
          consequatur deserunt quia! <br /> comision: {anioActualProps} 
        </p>
      </section>
    </>
  );
};

export default Informacion;
