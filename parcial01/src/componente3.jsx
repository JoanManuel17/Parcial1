import { useState } from "react";

export const Componente3 = () => {
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const saludar = () => {
    if (hora >= 0 && hora < 12) {
      setMensaje(`Buenos días, ${nombre}`);
    } else if (hora >= 12 && hora < 18) {
      setMensaje(`Buenos tardes, ${nombre}`);
    } else {
      setMensaje(`Buenas noches, ${nombre}`);
    }
    console.log(mensaje);
  };

  return (
    <>
      <div>
        <h1>Componente saludar</h1>
        <input
          type="text"
          value={nombre}
          onChange={(evt) => setNombre(evt.target.value)}
        ></input>

        <input
          type="number"
          value={hora}
          onChange={(evt) => setHora(evt.target.value)}
        ></input>
        <button onClick={() => saludar()}> Saludar </button>
        <p>{mensaje}</p>
      </div>
    </>
  );
};
