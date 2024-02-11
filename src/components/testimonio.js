import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../img/img1.jpeg")}
        alt="foto de emma"
      />
      <div  className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostion</p>
        <p className="cargo-testimonio">Ingenieria de sistemas</p>
        <p className="texto-testimonio">Siempre he tenido mentores</p>
      </div>
    </div>
  );
}

export default Testimonio;
